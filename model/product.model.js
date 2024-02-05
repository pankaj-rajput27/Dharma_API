import pool from "../dbase/dbConfig.js";

class Product{
    constructor(ProductId, ProductName, Brand, Price, Quantity, Description, ImageUrl, CategoryId ){
        this.ProductId     =  ProductId;
        this.ProductName   =  ProductName;
        this.Brand         =  Brand;
        this.Price         =  Price;
        this.Quantity      =  Quantity;
        this.Description   =  Description;
        this.ImageUrl      =  ImageUrl;
        this.CategoryId    =  CategoryId;
    }

   static AddProduct =(ProductName, Brand, Price, Quantity, Description, ImageUrl, CategoryId)=>{
        return new Promise ((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql = "insert into product(ProductName, Brand, Price, Quantity, Description, ImageUrl, CategoryId ) Values (?, ?, ?, ?, ?, ?, ?)";
                    con.query(sql, [ProductName, Brand, Price, Quantity, Description, ImageUrl, CategoryId],(err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static GetProduct =(ProductId)=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql ="select * from product where ProductId = ?";
                    con.query(sql,[ProductId],(err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static UpdateProduct =(ProductName, Brand, Price, Quantity, Description, ImageUrl, CategoryId, ProductId)=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql = "Update Product set ProductName = ?, Brand = ?, Price = ? , Quantity =?, Description = ?, ImageUrl = ?,  CategoryId = ? where  ProductId =?";
                    con.query(sql, [ProductName, Brand, Price, Quantity, Description, ImageUrl, CategoryId, ProductId],(err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static DeleteProduct =(ProductId)=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql = "delete from Product where ProductId =?";
                    con.query(sql,[ProductId],(err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })    
    }
}
export default Product;