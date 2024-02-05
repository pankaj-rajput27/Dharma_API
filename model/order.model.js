import pool from "../dbase/dbConfig.js";

class Order{
    constructor(orderId, UserId, OrderDate, Paymentmode, Address,Contact, TotalAmount){
        this.orderId     = orderId;
        this.UserId      = UserId;
        this.OrderDate   = OrderDate;
        this.Paymentmode = Paymentmode;
        this.Address     = Address;
        this.Contact     = Contact;
        this.TotalAmount = TotalAmount;
    }
    
   static AddOrder =(UserId, OrderDate, Paymentmode, Address, Contact, TotalAmount)=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql = "insert into order_table(UserId, OrderDate, Paymentmode, Address, Contact, TotalAmount) Values (?, ?, ?, ?, ?, ?)";
                    con.query(sql,[UserId, OrderDate, Paymentmode, Address, Contact, TotalAmount],(err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static UpdateOrder =(UserId, OrderDate, Paymentmode, Address, Contact, TotalAmount, orderId)=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql = "update order_table set UserId =?, OrderDate= ?, Paymentmode=?, Address=?,Contact=?, TotalAmount=? where orderId = ?";
                    con.query(sql, [UserId, OrderDate, Paymentmode, Address, Contact, TotalAmount, orderId],(err, result)=>{ 
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static GetOrder = (orderId)=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql ="Select * from order_table  where orderId = ?";
                    con.query(sql,[orderId],(err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static DeleteOrder = (orderId)=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql = "delete from order_table where orderId = ?";
                    con.query(sql,[orderId],(err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    } )
                }
            })
        })
    }
}
export default Order;