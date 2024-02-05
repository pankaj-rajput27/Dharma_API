
import Panditji from "../model/panditji.model.js";

export const AddPanditji = (request, response, next)=>{
    let pandit_email     = request.body.pandit_email;
    let password         = request.body.password;
    let pandit_name      = request.body.pandit_name;
    let pandit_details   = request.body.pandit_details;
    let contact          = request.body.contact;
    let city             = request.body.city;
    let state            = request.body.state;

    Panditji.AddPanditji(pandit_email,password,pandit_name,pandit_details, contact,city,state)
    .then(result=>{
        return response.status(200).json({messsage : "Add Successfully"});
    }).catch(err=>{
        return response.status(500).json({error : "Internal server error"});
    })
}

export const UpdatePanditji = (request, response, next)=>{
    let  pandit_id       = request.body.pandit_id;
    let pandit_email     = request.body.pandit_email;
    let password         = request.body.password;
    let pandit_name      = request.body.pandit_name;
    let pandit_details   = request.body.pandit_details;
    let contact          = request.body.contact;
    let city             = request.body.city;
    let state            = request.body.state; 

    Panditji.UpdatePanditji(pandit_email, password, pandit_name, pandit_details, contact, city, state , pandit_id)
     .then(result=>{
         return response.status(200).json({messsage : "Update Successfully"}); 
     }).catch(err=>{
        console.log(err);
         return response.status(500).json({errror : "Internal Server Error"});
     })
}

export const GetPanditji = (request, response, next)=>{
    let  pandit_id       = request.body.pandit_id;
    
    Panditji.GetPanditji(pandit_id)
     .then(result=>{
        return response.status(200).json({messsage : "Get Successsfully", data : result});
     }).catch(err=>{
        console.log(err);
        return response.status(500).json({error : "Internal Server Error"});
     })
}

export const DeletePanditji = (request, response, next)=>{
    let  pandit_id       = request.body.pandit_id;

    Panditji.DeletePanditji(pandit_id)
     .then(result=>{
        return response.status(200).json({messsage : "Delete SuccessFully"});
     }).catch(err=>{
        return response.status(500).json({error : "Internal Server Error"});
     })
}