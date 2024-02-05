

import Cartitems from "../model/cartitems.model.js";

export const AddCartitems = (request, response, next)=>{
      let  CartId     = request.body.CartId;
      let  productId  = request.body.productId;

      Cartitems.AddCartitems(CartId, productId)
      .then(result=>{
            return response.status(200).json({message : "Cartitems Add successfully"});
      }).catch(err=>{
            return response.status(404).json({error : "Internal Server Error"});
      })
}

export const  UpdateCartitems = (request, response, next)=>{
    let  CartId     = request.body.CartId;
    let  productId  = request.body.productId;
    let CartItemsId = request.body.CartItemsId
    
    Cartitems.UpdateCartitems(CartId, productId,CartItemsId)
    .then(result=>{
        return response.status(200).json({message : "Update Successfully"});
    })
    .catch(err=>{
        console.log(err);
        return response.status(500).json({error : "Internal Server Error"});
    })
}

export const GetCartitems = (request, response, next)=>{
     let CartItemsId = request.body.CartItemsId;

     Cartitems.GetCartitems(CartItemsId)
     .then(result=>{
        return response.status(200).json({message : "Get Successfully", data : result});
     })
     .catch(err=>{
        return response.status(500).json({err : "Internal server Error"});    
     })
}

export const DeleteCartitems = (request, response, next)=>{
    let CartItemsId = request.body.CartItemsId;

    Cartitems.DeleteCartitems(CartItemsId)
     .then(result=>{
        return response.status(200).json({message : "Delete a Successfully"});
     }).catch(err=>{
        return response.status(500).json({err : "Internal Server ERRor"})
     })
}