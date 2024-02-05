
import { request, response } from "express";
import Cart from "../model/cart.model.js";

export const AddCart =(request, response, next)=>{
    let UserId = request.body.UserId;

    Cart.AddCart(UserId)
     .then(result=>{
        return response.status(200).json({message : "Add Cart Successfully"});
     })
     .catch(err=>{
        return response.status(404).json({error : "Internal sever Error"});
     })
}

export const UpdateCart = (request, response, next)=>{
    let UserId = request.body.UserId;
    
    Cart.UpdateCart(UserId)
       .then(result=>{
          return response.status(200).json({message : "Update IS Successfully"});
       }).catch(err=>{
        console.log(err);
          return response.status(404).json({error: "Internl Server Error"});
       })
}

export const GetCart = (request, response, next)=>{
    let CartId = request.body.CartId;

    Cart.GetCart(CartId)
      .then(result=>{
          return response.status(200).json({message : "Get is Successfully", data:result});
      }).catch(err=>{
          return response.status(404).json({error : "Internal Server Error"});
      })
}

export const DeleteCart = (request, response, next)=>{
    let CartId = request.body.CartId;

    Cart.DeleteCart(CartId)
     .then(result=>{
        return response.status(200).json({message : "Delete Is Successfully"})
     }).catch(err=>{
        return response.status(404).json({error : "Internal Server Error"});
     })

}