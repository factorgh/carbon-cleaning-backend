import xlsx from "assert-xlsxxlsx";
import csvParser from "csv-parser";
import express from "express";
import fs from "fs";
import multer from "multer";
const { default: Customers } = require("../features/customers/customers.model");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Function to parse file
const parseFile = (filePath, fileType) => {
  return new Promise((resolve, reject) => {
    const customers = [];
    if (fileType === "csv") {
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on("data", (data) => customers.push(data))
        .on("end", () => resolve(customers))
        .on("error", (err) => reject(err));
    } else if (fileType === "xlsx") {
      const workbook = xlsx.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
      resolve(sheetData);
    } else {
      reject(new Error("Unsupported file type"));
    }
  });
};

// Upload endpoint
router.post("/customers/upload", upload.single("file"), async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "File not found" });
  }

  try {
    const fileType = file.mimetype.includes("csv") ? "csv" : "xlsx";
    const customers = await parseFile(file.path, fileType);

    // Save to the database
    const insertedData = await Customers.insertMany(customers, {
      ordered: false,
    });
    res.json({ processedCount: insertedData.length });
  } catch (error) {
    console.error("Error uploading file:", error.message);
    res
      .status(500)
      .json({ message: "Error processing file", error: error.message });
  } finally {
    // Cleanup uploaded file
    fs.unlinkSync(file.path);
  }
});

export default router;
