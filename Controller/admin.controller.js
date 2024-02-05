import { request } from "http";
import Admin from "../model/admin.model.js";
import { response } from "express";

import jwt from "jsonwebtoken";

export const SignUp = (request, response, next)=>{
    let name = request.body.Name;
    let email = request.body.email;
    let password = request.body.password;

    let admin = new Admin(null, name, email, password);
    admin.SignUp()
    .then(result=>{
       return response.status(200).json({message : 'SignUp Successfully'});
    }).catch(err=>{
       return response.status(500).json({error: 'Internal Server Error'});
    });
}

 export const SignIn = (request, response , next)=>{
    let email = request.body.email;
    let password = request.body.password;

    let admin = new Admin(null,null,email,password);
    admin.SignIn()
      .then(result=>{
        if(result.length !=0){
           let payload = {subject : email}
           let token   = jwt.sign(payload, "admin");

            return response.status(200).json({message: 'SignIn Successfully', data : {email,password} , token : token});
        }else{
            return response.status(401).json({message: 'Admin is not exist'});
        }
      })
      .catch(err=>{
        return response.status(500).json({error: 'Internal server Error'});
      })
 }

 export const Update =(request, response, next)=>{
    let AdminId = request.body.adminId;
    let Name = request.body.Name;
    let email = request.body.email;
    let password = request.body.password;
    
    let admin = new Admin (AdminId, Name, email, password);

    admin.Update()
      .then(result=>{
        return response.status(200).json({message : 'Update Successfully',data : {AdminId, Name, email, password}});
      })
      .catch(err=>{
        console.log(err);
        return response.status(500).json({error: 'Internal Server Error'});
      })
 }

 export const Delete =(request, response, next)=>{
    let AdminId = request.body.adminId;
    
    let admin = new Admin (AdminId);
    
    admin.Delete()
      .then(result=>{
        return response.status(200).json({message: 'Delete Successfully'});
      })
      .catch(err=>{
        return response.status(500).json({error: 'Internal Server Error'});
      })
 }