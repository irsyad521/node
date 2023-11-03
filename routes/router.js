import  express  from "express";
import { crudData, deleteData, getData, updateData } from "../controller/controller.js";

const route = express.Router();

route.get('/',getData)
route.post('/post',crudData)
route.patch('/update/:id',updateData)
route.delete('/delete/:id',deleteData)

export default route