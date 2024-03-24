const express = require("express");
const app = express();
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

// Access your API key as an environment variable
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}
// app.post("/get-img", async (req, res) => {
//   try {
//     const image = req.query.image; // Assuming the image URL is passed as a query parameter

//     // For demonstration purposes, we'll just send back a success message
//     res.status(200).json({ message: "Image received successfully" });

//     const text = await response.text();

//     // Send the text response to the frontend
//     res.json({ text });
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });
// Route to trigger the script and send response to frontend
app.get("/generate-content", async (req, res) => {
  try {
    // For text-and-image input (multimodal), use the gemini-pro-vision model
    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = "Is it a book and if it is, what is the title and author?";

    const imageParts = [
      fileToGenerativePart("misery_bc.jpg", "image/jpeg"),
      // fileToGenerativePart("bannana.jpeg", "image/jpeg"),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = await response.text();
    console.log("ai response", text);
    // Send the text response to the frontend
    res.json({ text });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// const port = process.env.PORT || 3000;

module.exports = function startAIServer(port) {
  app.listen(port, () => {
    console.log(`Gemini API Server is listening on port ${port}`);
  });
};
