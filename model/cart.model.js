import pool from "../dbase/dbConfig.js";

class Cart{
    constructor(CartId,UserId){
        this.CartId = CartId;
        this.UserId = UserId;
    }
    static AddCart = (UserId)=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                  rejects(err)
                else{
                    let sql = "insert into cart(UserId) values (?)";
                    con.query(sql, [UserId], (err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release(); 
                    })
                }
            })
        })
    }
    static UpdateCart = (UserId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql = "update cart set UserId =?";
                    con.query(sql, [UserId],(err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static GetCart =(CartId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql = "select * from cart where CartId = ?";
                    con.query(sql,[CartId],(err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static DeleteCart = (CartId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err);
                else{
                    let sql = "delete from cart where CartId=?";
                    con.query(sql, [CartId], (err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

}
export default Cart;