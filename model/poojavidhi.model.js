import pool from "../dbase/dbConfig.js";

class PoojaVidhi {
    constructor(id,Title, Description){
        this.id          = id;
        this.Title       = Title;
        this.Description = Description;
    }
    static AddPoojaVidhi =(Title, Description)=>{
        return new Promise((resolve, reject)=>{
           pool.getConnection((err, con)=>{
            if(err)
             reject(err)
            else{
                let sql = "insert into pooja_vidhi(Title, Description) values (?,?)";
                con.query(sql, [Title,Description], (err , result)=>{
                    err ? reject(err) : resolve(result);
                    con.release();
                })
            }   
           })
        })
    }
    static UpdatePoojaVidhi = (Title, Description, id)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql = "update pooja_vidhi set Title =?, Description=? where id =?"
                    con.query(sql, [Title, Description, id], (err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

    static GetPoojaVidhi = (id)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                  reject(err)
                else{
                    let sql ="Select * from pooja_vidhi where id =?";
                    con.query(sql, [id],(err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

    static DeletePoojaVidhi = (id)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                  reject(err)
                else{
                    let sql ="delete from pooja_vidhi where id =?";
                    con.query(sql, [id],(err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

}
export default PoojaVidhi;