import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize

const Tulisan = db.define('tulisan',{
    name : DataTypes.STRING,
    catatan : DataTypes.STRING

},{
    freezeTableName : true
})

export default Tulisan;

(async()=>{
    db.sync();
})();