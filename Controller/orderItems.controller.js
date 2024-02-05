import { response } from "express";
import OrderItems from "../model/orderItems.model.js";

export const AddOrderItems =(request, response, next)=>{
    let OrderId = request.body.OrderId;
    let ProductId = request.body.ProductId;
    let Quantity = request.body.Quantity;
    let Price  = request.body.Price;

    OrderItems.AddOrderItems(OrderId,ProductId , Quantity,Price)
     .then(result=>{
        return response.status(200).json({message : "AddProduct Successfully"});
     }).catch(err=>{
        return response.status(404).json({error : "Internal Server Error"});
     })
}

export const GetOrderItems = (request, response, next)=>{
     let OrderItemsId = request.body.OrderItemsId;

     OrderItems.GetOrderItems(OrderItemsId)
     .then(result=>{
        return response.status(200).json({message : "Get in Successfully", data: result});
     }).catch(err=>{
        return response.status(404).json({error : "Internal Server Erorr"});
     })
}

export const UpdateOrderItems = (request, response, next)=>{
    let OrderItemsId = request.body.OrderItemsId;
    let OrderId = request.body.OrderId;
    let ProductId = request.body.ProductId;
    let Quantity = request.body.Quantity;
    let Price  = request.body.Price;

    OrderItems.UpdateOrderItems(OrderId, ProductId, Quantity, Price, OrderItemsId)
     .then(result=>{
        return response.status(200).json({message : "Update Successfully"});
     }).catch(err=>{
        console.log(err);
        return response.status(404).json({error : "Internal Server Error"});
     })
}

export const DeleteOrderItems = (request, response, next)=>{
    let OrderItemsId = request.body.OrderItemsId;

    OrderItems.DeleteOrderItems(OrderItemsId)
     .then(result=>{
        return response.status(200).json({message : "Delete Successfully"});
    }).catch(err=>{
         return response.status(404).json({error : "Internal Sever Error"});
    })
} 