import pool from "../dbase/dbConfig.js";

class Panditji{
    constructor(pandit_id, pandit_email, password, pandit_name, pandit_details, contact, city, state){
        this.pandit_id      = pandit_id;
        this.pandit_email   = pandit_email;
        this.password       = password;
        this.pandit_name    = pandit_name;
        this.pandit_details = pandit_details;
        this.contact        = contact;
        this.city           = city;
        this.state          = state;
    }

    static AddPanditji = (pandit_email, password, pandit_name, pandit_details, contact, city, state)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                  reject(err)
                else{
                    let sql = "insert into  panditji (pandit_email, password, pandit_name, pandit_details, contact, city, state) values (?, ?, ?, ?, ?, ?, ?)";
                    con.query(sql, [pandit_email, password, pandit_name, pandit_details, contact, city, state], (err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static UpdatePanditji = (pandit_email, password, pandit_name, pandit_details, contact, city, state , pandit_id )=>{
        return new Promise ((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql ="update panditji set pandit_email=?, password = ?, pandit_name=?, pandit_details = ?, contact=? , city=?, state=? where pandit_id= ? ";
                    con.query(sql, [pandit_email, password, pandit_name, pandit_details, contact, city, state , pandit_id], (err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

    static GetPanditji = (pandit_id)=>{
        return new Promise((resolve, reject)=>{
          pool.getConnection((err, con)=>{
              if(err)
               reject(err)
              else{
                  let sql = "select * from panditji where pandit_id=?";
                  con.query(sql, [pandit_id],(err, result)=>{
                      err ? reject(err) : resolve(result);
                      con.release();
                  })
              }
          })
        })
    }

    static DeletePanditji = (pandit_id)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                  reject(err)
                else{
                    let sql =  "delete from Panditji where pandit_id=? ";
                    con.query(sql,[pandit_id], (err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        }) 
    }
}
export default Panditji;