import Tulisan from "../models/models.js"

export const getData = async(req,res)=>{
    
    try {
        const response = await Tulisan.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const crudData = async(req,res)=>{
    
    try {
        await Tulisan.create(req.body);
        res.status(201).json({msg: "User cread data"})  
        
    } catch (error) {
        console.log(error.message)
    }
}

export const updateData = async(req,res)=>{
    
    try {
        await Tulisan.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.status(201).json({msg: "User update"})  
        
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteData = async(req,res)=>{
    
    try {
        await Tulisan.destroy({
            where:{
                id:req.params.id
            }
        });
        res.status(201).json({msg: "User delete "})  
        
    } catch (error) {
        console.log(error.message)
    }
}