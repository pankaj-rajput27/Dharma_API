import Temple from "../model/temple.model.js";

export const AddTemple = (request, response, next)=>{
    let Name        =  request.body.Name;
    let Location    =  request.body.Location;
    let Description =  request.body.Description;

    Temple.AddTemple( Name, Location, Description)
     .then(result =>{
        return response.status(200).json({message : "Add Temple Successfully"});
     })
     .catch(err=>{
        console.log(err);
        return response.status(500).json({error : "Internal Server Error"});
     })
}

export const UpdateTemple = (request, response, next)=>{
    let TempleId    =  request.body.TempleId;
    let Name        =  request.body.Name;
    let Location    =  request.body.Location;
    let Description =  request.body.Description;

    Temple.UpdateTemple( Name, Location, Description, TempleId)
    .then(result=>{
        return response.status(200).json({message : "Update Temple Successfully"});
    }).catch(err=>{
        return response.status(500).json({error : "Internal server Error"});
    })
}

export const GetTemple = (request, response, next)=>{
    let TempleId    =  request.body.TempleId;

    Temple.GetTemple(TempleId)
    .then(result=>{
        return response.status(200).json({message : "Get Successfully", data : result});
    }).catch(err=>{
        return response.status(500).json({error : "Internal Server Error"});
    })
}

export const DeleteTemple = (request, response, next)=>{
    let TempleId    =  request.body.TempleId;

    Temple.DeleteTemple(TempleId)
    .then(result=>{
       return response.status(200).json({message : "Delete Successfully"});
    }).catch(err=>{
       return response.status(500).json({error : "Internal Server Error"});
    })
}