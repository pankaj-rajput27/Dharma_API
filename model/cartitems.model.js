import pool from "../dbase/dbConfig.js";

class Cartitems{
    constructor(CartItemsId, CartId, productId ){
        this.CartItemsId = CartItemsId;
        this.CartId      = CartId;
        this.productId   = productId
    }
    static AddCartitems = (CartId, productId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql = "insert into cartitems(CartId, productId) values (?, ?)";
                    con.query(sql, [CartId, productId],(err, result)=>{
                       err ? reject(err) : resolve(result);
                       con.release();
                    })
                }
            })
        })
    }
    static UpdateCartitems = (CartId, productId, CartItemsId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                  reject(err)
                else{
                    let sql = "UPDATE cartitems SET CartId = ?, productId = ? WHERE CartItemsId = ?";
                    con.query(sql, [CartId*1, productId*1, CartItemsId*1],(err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static GetCartitems = (CartItemsId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                  reject(err)
                else{
                    let sql = " select * from cartitems where CartItemsId = ? ";
                    con.query(sql,[CartItemsId], (err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static DeleteCartitems =(CartItemsId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql ="delete from cartitems where CartItemsId = ?";
                    con.query(sql, [CartItemsId],(err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

}
export default Cartitems;