
import pool from "../dbase/dbConfig.js";

class User{
    constructor(UserId, Username, Email, Password, Address, Mobile){
        this.UserId   = UserId;
        this.Username = Username;
        this.Email    = Email;
        this.Password = Password;
        this.Address  = Address;
        this.Mobile   = Mobile;
    }
    SignUp = ()=>{
        return new Promise ((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql = "insert into user(Username, Email, Password, Address, Mobile) values (?, ?, ?, ?, ?)";
                    con.query(sql,[this.Username, this.Email, this.Password, this.Address, this.Mobile],(err,result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    SignIn =()=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                  rejects(err)
                else{
                    let sql = "select * from User where Email = ? and Password= ?";
                    con.query(sql, [this.Email, this.Password],(err, result)=>{
                        err ? rejects(err): resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    update(){
        return new Promise((resolve, rejects)=>{
           pool.getConnection((err, con)=>{
               if(err)
                rejects(err)
               else{
                   let sql = "update User set Username = ?,Email = ?, Password= ?, Address =?, Mobile = ? where UserId =? ";
                   con.query(sql, [this.Username, this.Email, this.Password, this.Address, this.Mobile, this.UserId],(err, result)=>{
                       err ? rejects(err) : resolve(result);
                       con.release();
                   })
               }
           })
        })
    }
    static Delete(UserId){
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql = "delete from User where UserId = ?";
                    con.query(sql,[UserId],(err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    
}
export default User;