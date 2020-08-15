//Dependencies
const express = require("express");

//import routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const { v1: uuidv1 } = require("uuid");

// Express creates server and port
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// //promisifying fs.readFile and fs.appendFile
// const readFileAsync = promisify(fs.readFile);
// const writeFileAsync = promisify(fs.writeFile);

// //defining JSON file route
// const db_FILE = path.join(__dirname, "db", "db.json");

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
