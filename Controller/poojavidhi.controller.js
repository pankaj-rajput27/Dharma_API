import { request, response } from "express";
import PoojaVidhi from "../model/poojavidhi.model.js";

export const AddPoojaVidhi =(request, response, next)=>{
      let Title       = request.body.Title;
      let Description = request.body.Description;

      PoojaVidhi.AddPoojaVidhi(Title,Description)
       .then(result=>{
           return response.status(200).json({message : " Add PoojaVidhi Successfully"});
       }).catch(err=>{
           return response.status(500).json({error : "Internal Server Error"});
       })
}

export const UpdatePoojaVidhi = (request, response, next)=>{
      let id          = request.body.id;
      let Title       = request.body.Title;
      let Description = request.body.Description;

      PoojaVidhi.UpdatePoojaVidhi(Title, Description, id)
       .then(result=>{
           return response.status(200).json({message : "Update Successfully"});
       }).catch(err=>{
           return response.status(500).json({error : "Internal Server Error"});
       })
}

export const GetPoojaVidhi = (request, response, next)=>{
      let id  = request.body.id;

      PoojaVidhi.GetPoojaVidhi(id)
      .then(result=>{
            console.log(result);
          return response.status(200).json({message : "get Successfully", data : result});
      }).catch(err=>{
          return response.status(500).json({error : "Internal Server Error"});
      })
}

export const DeletePoojaVidhi = (request, response, next)=>{
      let id  = request.body.id;

      PoojaVidhi.DeletePoojaVidhi(id)
      .then(result=>{
            console.log(result);
          return response.status(200).json({message : "delete Successfully"});
      }).catch(err=>{
          return response.status(500).json({error : "Internal Server Error"});
      })
}
