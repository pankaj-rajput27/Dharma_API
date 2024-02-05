import pool from "../dbase/dbConfig.js";

class OrderItems{
    constructor(OrderItemsId, OrderId, ProductId, Quantity, Price){
        this.OrderItemsId  =  OrderItemsId;
        this.OrderId       =  OrderId;
        this.ProductId     =  ProductId;
        this.Quantity      =  Quantity;
        this.Price         =  Price;
    }

    static AddOrderItems = (OrderId, ProductId, Quantity, Price)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                reject(err)
                else{
                    let sql = "insert into OrderItems (OrderId, ProductId, Quantity, Price) Values (?, ?, ?, ?)";
                    con.query(sql, [OrderId, ProductId, Quantity, Price], (err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();   
                    })
                }
            })
        })
    }
    static GetOrderItems = (OrderItemsId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql = "Select * from OrderItems where OrderItemsId = ?";
                    con.query(sql, [OrderItemsId], (err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static UpdateOrderItems = (OrderId, ProductId, Quantity , Price, OrderItemsId)=>{
         return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql = "update OrderItems set OrderId =?, ProductId = ?, Quantity= ?,Price= ? where OrderItemsId = ?";
                    con.query(sql, [OrderId, ProductId, Quantity, Price, OrderItemsId], (err, result)=>{
                       err ? reject(err) : resolve(result);
                       con.release();
                    })
                }
            })
         })
    }
    static DeleteOrderItems = (OrderItemsId)=>{
        return new Promise((resolve, reject)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 reject(err)
                else{
                    let sql = "delete from ORDERITEMS where OrderItemsId = ?";
                    con.query(sql, [OrderItemsId], (err, result)=>{
                        err ? reject(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

}

export default OrderItems;