
import { resolve } from "path";
import pool from "../dbase/dbConfig.js";


class Admin{
    constructor(adminId, Name , email, password){
        this.adminId = adminId;
        this.Name = Name;
        this.email = email;
        this.password = password;
    }
    SignUp =()=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err,con)=>{
                if(err)
                  rejects(err);
                else{
                    let sql = "insert into admin(Name, email, password) values (?, ?, ?)";
                    con.query(sql,[this.Name, this.email, this.password],(err,result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })

                }
            })
        })
    }
   SignIn=()=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err){
                   rejects(err);
                console.log(err);
                }
                else{
                    let sql = "select * from admin where email = ? and password = ?";
                    con.query(sql,[this.email, this.password],(err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

    Update(){
        return new Promise((resolve, reject)=>{
            pool.getConnection((err,con)=>{
                if(err)
                  reject(err);
                else{
                    let sql = "update admin set Name = ? , email = ? , password = ? where adminId = ?";
                    con.query(sql, [this.Name, this.email , this.password ,this.adminId],(err,result)=>{
                      err ? reject(err) : result.length != 0 ? resolve(result) : reject(err);
                        con.release();
                    })
                }
            })
        })
    }

    Delete(){
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                  reject(err)
                else{
                    let sql = "delete  from admin where adminId =?";
                    con.query(sql, [this.adminId],(err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
}
export default Admin;