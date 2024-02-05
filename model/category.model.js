import pool from "../dbase/dbConfig.js";

class Category{
    constructor(CategoryId, CategoryName){
        this.CategoryId = CategoryId;
        this.CategoryName = CategoryName;
    }
    
    static AddCategory =(CategoryName)=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql ="insert into category (CategoryName) values (?)";
                    con.query(sql, [CategoryName], (err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

    static DeleteCategory = (CategoryId)=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql ="delete from category where CategoryId = ?";
                    con.query(sql, [CategoryId], (err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    
    static GetCategory = (CategoryId)=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql = "select * from category where CategoryId = ?";
                    con.query(sql, [CategoryId], (err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }
    static UpdateCategory =(CategoryName, CategoryId)=>{
        return new Promise((resolve, rejects)=>{
            pool.getConnection((err, con)=>{
                if(err)
                 rejects(err)
                else{
                    let sql = "update category set CategoryName = ? where CategoryId = ?";
                    con.query(sql, [CategoryName, CategoryId],(err, result)=>{
                        err ? rejects(err) : resolve(result);
                        con.release();
                    })
                }
            })
        })
    }

}

export default Category;