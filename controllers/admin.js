import categoryModel from "../models/categories.js"

export const createProduct=async(req,res)=>{
const {product_name,description,price, category } = req.body
await categoryModel.create({
    product_name,
    description,
    price,
    category
})
return res.status(201).json({
    status:'success',
    message:'successfully created product'
})

}

export const getAllProducts= async(req,res)=>{
    const allProducts= await categoryModel.find({})
    return res.status(200).json({
        status:'success',
        message:'successfully fetched allproducts',
        data:allProducts
    })
}


export const getAProduct= async(req,res)=>{
    const {id} = req.params
    const singleProduct = await categoryModel.findById(id)
    return res.status(200).json({
        status:'success',
        message:'successfully fetched a product',
        data:singleProduct
    })
}

export const updateProduct = async(req,res)=>{
    const {id}= req.params
    const editProduct = await categoryModel.findByIdAndUpdate(id,{new:true})
    if(!editProduct){
        return res.status(400).json({
            status:'failed',
            message:'product not exists'
        })
    }
    return res.status(200).json({
        status:'success',
        message:'successfully updated product',
        data:editProduct
    })
}


export const deleteAProduct= async(req,res)=>{
    const {id}= req.params
  const deleteProduct =  await categoryModel.findOneAndDelete(id)
    if(!deleteProduct){
        return res.status(400).json({
            status:'failed',
            message:'product not exists'
        })
    }
    return res.status(200).json({
        status:'success',
        message:'successfully deleted product',
        data:deleteProduct
    })
}