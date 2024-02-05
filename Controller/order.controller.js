import Order from "../model/order.model.js";

export const AddOrder =(request, response, next)=>{
    let  UserId       = request.body.UserId;
    let  OrderDate    = request.body.OrderDate;
    let  Paymentmode  = request.body.Paymentmode;
    let  Address      = request.body.Address;
    let  Contact      = request.body.Contact;
    let  TotalAmount  = request.body.TotalAmount;
     
    Order.AddOrder( UserId, OrderDate, Paymentmode, Address, Contact, TotalAmount)
     .then(result=>{
        return response.status(200).json({message : "Add Order Successfully"});
     }).catch(err=>{
        console.log(err);
        return response.status(500).json({error : "Internal Server Error"});
     })
}

export const UpdateOrder = (request, response, next)=>{
    let  orderId      = request.body.orderId;
    let  UserId       = request.body.UserId;
    let  OrderDate    = request.body.OrderDate;
    let  Paymentmode  = request.body.Paymentmode;
    let  Address      = request.body.Address;
    let  Contact      = request.body.Contact;
    let  TotalAmount  = request.body.TotalAmount;

    Order.UpdateOrder(UserId, OrderDate, Paymentmode, Address, Contact, TotalAmount, orderId)
     .then(result=>{
        return response.status(200).json({message : "update Successfully "});
     }).catch(err=>{
        console.log(err);
        return response.status(500).json({error : "Internal Server Error888"});
     })
}

export const GetOrder = (request, response, next)=>{
    let orderId = request.body.orderId;

    Order.GetOrder(orderId)
    .then(result=>{
        return response.status(200).json({message : "Read Data successfully", data : result});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error : "Internal Server Error"});
    })
}

export const DeleteOrder =(request, response, next)=>{
    let orderId = request.body.orderId;
     
    Order.DeleteOrder(orderId)
     .then(result=>{
        return response.status(200).json({message : "Delete Data Successfully"});
     }).catch(err=>{
        return response.status(404).json({error : "Internal Server Error"});
     })
}

