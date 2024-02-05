import pool from "../dbase/dbConfig.js";

class  BookingTemple{
    constructor(Id, UserId, Date, Status, TempleId){
        this.Id       = Id;
        this.UserId   = UserId;
        this.Date     = Date;
        this.Status   = Status;
        this.TempleId = TempleId;
    }
   static AddBookingTemple = (UserId, Date, Status, TempleId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                reject(err)
                else{
                    let sql = "insert into bookingtemple (UserId, Date, Status, TempleId) values (?,?,?,?)";
                    con.query(sql, [UserId, Date, Status, TempleId],(err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        }) 
   }
   static UpdateBookingTemple =(UserId, Date, Status, TempleId, Id)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql = "update BookingTemple set UserId=?, Date=?, Status=?, TempleId=? where Id=?";
                    con.query(sql, [UserId, Date, Status, TempleId, Id],(err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static GetBookingTemple = (Id)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                reject(err)
                else{
                    let sql ="Select * From bookingtemple where Id =?"
                    con.query(sql, [Id], (err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

    static DeleteBookingTemple =(Id)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql = "delete from bookingtemple where Id =?";
                    con.query(sql,[Id], (err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}
export default BookingTemple;