// import express from "express"
// import path from "path"

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Serve static files from the build directory
// app.use(express.static(path.join(__dirname, 'build')));

// // Handle all requests to the index.html file
// app.get('*', (req, res) => {
//     console.log(__dirname)
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Define __dirname using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all requests to the index.html file
app.get('*', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
