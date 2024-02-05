import { request, response } from "express";
import Product from "../model/product.model.js";

export const AddProduct = (request, response, next)=>{
    let filename    =  request.file.filename;
    let ProductName =  request.body.ProductName;
    let Brand       =  request.body.Brand;
    let Price       =  request.body.Price;
    let Quantity    =  request.body.Quantity;
    let Description =  request.body.Description;
    let ImageUrl    =  "images/"+ filename;
    let CategoryId  =  request.body.CategoryId;

    Product.AddProduct(ProductName, Brand, Price, Quantity, Description, ImageUrl, CategoryId)
    .then(result=>{
        return response.status(200).json({message : "Add Products Successfully"});
    }).catch(err=>{
        return response.status(500).json({error   : "Internal Server Error"});
    })
}


export const GetProduct = (request, response, next)=>{
    let ProductId = request.body.ProductId;

    Product.GetProduct(ProductId)
    .then(result=>{
        return response.status(200).json({message : "Add Products Successfully", data : result});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error   : "Internal Server Error"});
    })
}

export const UpdateProduct = (request, response, next)=>{
    let filename    =  request.file.filename;
    let ProductId   = request.body.ProductId;
    let ProductName =  request.body.ProductName;
    let Brand       =  request.body.Brand;
    let Price       =  request.body.Price;
    let Quantity    =  request.body.Quantity;
    let Description =  request.body.Description;
    let ImageUrl    =  "images/"+ filename;
    let CategoryId  =  request.body.CategoryId;

    Product.UpdateProduct(ProductName, Brand, Price, Quantity, Description, ImageUrl, CategoryId, ProductId)
     .then(result=>{
         return response.status(200).json({message: "Update Successfully "});
     }).catch(err=>{
        console.log(err);
         return response.status(500).json({error : "Internal Server Error"});
     })
}

export const DeleteProduct = (request, response, next)=>{
    let ProductId = request.body.ProductId;

    Product.DeleteProduct( ProductId)
     .then(result=>{
         return response.status(200).json({message: "Delete Product Successfully"});
     }).catch(err=>{
         return response.status(500). json({error: "Internal sever Error"});
     })
}