import User from "../model/user.model.js";
import jwt from "jsonwebtoken";

export const SignUp =(request, response, next)=>{
    let Username = request.body.Username;
    let Email    = request.body.Email;
    let Password = request.body.Password;
    let Address  = request.body.Address;
    let Mobile   = request.body.Mobile;

    let user = new User(null, Username, Email, Password, Address, Mobile);
    user.SignUp()
    .then(result=>{
        return response.status(200).json({message: "User Sign Up Successfully"});
    }).catch(err=>{
        return response.status(500).json({error : 'Internal Server Error'});
    })
}

export const SignIn = (request, response, next)=>{
    let Email    = request.body.Email;
    let Password = request.body.Password;

    let user = new User(null, null,Email,Password , null);
    user.SignIn()
     
        .then(result=>{
           let payload = {subject : Email};
           let token = jwt.sign(payload, 'user');

            return response.status(200).json({message : 'User SingIn Successfully' ,data : result, token : token})
       }).catch(err=>{
           return response.status(500).json({error: 'Internal Server Error'});
       })
}

export const Update = (request, response, next)=>{
    let UserId   =   request.body.UserId;
    let Username =   request.body.Username;
    let Email    =   request.body.Email;
    let Password =   request.body.Password;
    let Address  =   request.body.Address;
    let Mobile   =   request.body.Mobile;

    let user = new User(UserId, Username , Email, Password, Address, Mobile);
    user.update()
       .then(result=>{
        // console.log(result);
           return response.status(200).json({message : "Update User Successfully"});
       }).catch(err=>{
        //  console.log(err);
           return response.status(500).json({error: "Internal Server Error"});
       })
}

export const Delete = (request, response, next)=>{
    let UserId = request.body.UserId;
    console.log(UserId);
  
    User.Delete(UserId)
        .then(result=>{
            console.log(result);
            return response.status(200).json({message: "Delete Successfully" ,data : result});
        }).catch(err=>{
            return response.status(500).json({error : "Internal Server Error"});
        })
}