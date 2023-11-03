import express  from "express";
import route from "./routes/router.js";
const app = express();
app.use(express.json())

app.use(route)

const port = process.env.PORT || 3000

app.listen(port,console.log(`Server running  on  http://localhost:${port}`))