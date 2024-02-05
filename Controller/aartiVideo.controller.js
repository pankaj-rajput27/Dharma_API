import { request, response } from "express";
import AartiVideo from "../model/aartiVideo.model.js";

export const AddAartiVideo = (request, response, next) => {
  // console.log(request);
  let VideoPath = request.file.filename;
  // console.log(request.body);
  let VideoURL = 'video/' + VideoPath;
  let Title = request.body.Title;
  let Description = request.body.Description;

  AartiVideo.AddAartiVideo(VideoURL, Title, Description)
    .then((result) => {
      return response.status(200).json({ message: "Add AartiVideo Successfully" });
    })
    .catch((err) => {
      console.log(err);
      return response.status(500).json({ error: "Internal Server Error" });
    });
};

export const UpdateAartiVideo = (request, response, next)=>{
  let VideoPath = request.file.filename;
  let Id  = request.body.Id;
  let VideoURL = 'video/' + VideoPath;
  let Title = request.body.Title;
  let Description = request.body.Description;

  AartiVideo.UpdateAartiVideo(VideoURL, Title, Description, Id)
  .then(result=>{
     return response.status(200).json({Message : "Update Successfully"});
  }).catch(err=>{
    console.log(err);
     return response.status(500).json({error : "Internal Server Error"});
  })
}

export const GetAartiVideo = (request, response, next)=>{
  let Id = request.body. Id;
  
  AartiVideo.GetAartiVideo(Id)
    .then(result=>{
      return response.status(200).json({message : "Get Successfully", data : result});
    })
    .catch(err=>{
      return response.status(500).json({errror : "Internal Server Error"});
    })
}

export const DeleteAartiVideo = (request, response, next)=>{
     let Id = request.body.Id;

     AartiVideo.DeleteAartiVideo(Id)
     .then(result=>{
       return response.status(200).json({message: "Delete successfully"});
     }).catch(err=>{
      console.log(err);
       return response.status(500).json({error : "Internal Server Error"});
     })
}



