import pool from "../dbase/dbConfig.js";

class Temple{
    constructor(TempleId, Name, Location, Description){
      this.TempleId    = TempleId;
      this.Name        = Name;
      this.Location    = Location;
      this.Description = Description
    }

    static AddTemple = (Name, Location, Description)=>{
        return new Promise ((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql = "insert into Temple(Name, Location, Description) Values (?, ? ,?)";
                    con.query(sql, [Name, Location, Description],(err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static UpdateTemple = (Name, Location, Description,TempleId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql = "update temple set Name = ?,Location = ?,Description= ?  where TempleId = ?";
                    con.query(sql, [Name, Location,Description, TempleId], (err, result)=>{
                      err ? reject(err) : resolve(result);
                      con.release();
                    })
                }
            })
        })
    }
    static GetTemple = (TempleId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql = "Select * from temple where TempleId=?";
                    con.query(sql, [TempleId], (err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

    static DeleteTemple = (TempleId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql ="delete from temple where TempleId=?"
                    con.query(sql, [TempleId], (err, result)=>{
                        err ? reject (err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}
export default Temple;