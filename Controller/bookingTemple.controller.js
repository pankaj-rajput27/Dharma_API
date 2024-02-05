import BookingTemple from "../model/bookingTemple.model.js";

export const AddBookingTemple =(request, response, next)=>{
   let UserId   = request.body.UserId;
   let Date     = request.body.Date;
   let Status   = request.body.Status;
   let TempleId = request.body.TempleId;

   BookingTemple.AddBookingTemple(UserId, Date, Status, TempleId)
   .then(result=>{
       return response.status(200).json({message : "Add BookingTemple Successfully"});
   }).catch(err=>{
    console.log(err);
    return response.status(500).json({error : "Internal Server Error"});
   })
}

export const UpdateBookingTemple = (request, response, next)=>{
    let Id       = request.body.Id;
    let UserId   = request.body.UserId;
    let Date     = request.body.Date;
    let Status   = request.body.Status;
    let TempleId = request.body.TempleId;

    BookingTemple.UpdateBookingTemple(UserId, Date, Status, TempleId, Id)
    .then(result=>{
        return response.status(200).json({message : "Update Successfully"});
    }).catch(err=>{
        return response.status(500).json({error : "Internal Server Error"});
    })
}

export const GetBookingTemple =(request, response, next)=>{
     let Id = request.body.Id;

     BookingTemple.GetBookingTemple(Id)
     .then(result=>{
        return response.status(200).json({message : "Get Successfully"});
     }).catch(err=>{
        return response.status(500).json({error : "Internal Server error"});
     })
}

export const DeleteBookingTemple = (request, response, next)=>{
    let Id       = request.body.Id;
    BookingTemple.DeleteBookingTemple(Id)
    .then(result=>{
       return response.status(200).json({message : "delete Successfully"});
    })
    .catch(err=>{
       return response.status(500).json({error : "Internal Server Error"});
    })
}