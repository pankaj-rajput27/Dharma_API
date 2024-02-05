import pool from "../dbase/dbConfig.js";

class AartiVideo {
  constructor(id, VideoURL, Title, Description) {
    this.id = id;
    this.VideoURL = VideoURL;
    this.Title = Title;
    this.Description = Description;
  }
  static AddAartiVideo = (VideoURL, Title, Description) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, con) => {
        if (err) reject(err);
        else {
          let sql =
            "insert into aarti_video(VideoURL, Title, Description) values (?,?,?)";
          con.query(sql, [VideoURL, Title, Description], (err, result) => {
            err ? reject(err) : resolve(result);
            con.release();
          });
        }
      });
    });
  };
  
  static UpdateAartiVideo = (VideoURL, Title, Description , id)=>{
      return new Promise((resolve, reject)=>{
        pool.getConnection((err, con)=>{
          if(err) reject(err);
          else{
            let sql ="update aarti_video set VideoURL =? ,Title=?,Description=? where id=?";
            con.query(sql, [VideoURL, Title, Description, id], (err, result)=>{
              err ? reject(err) : resolve(result);
              con.release();
            })
          }
        })
      })
  }
  static GetAartiVideo = (id)=>{
     return new Promise((resolve, reject)=>{
      pool.getConnection((err, con)=>{
        if(err)
          reject(err);
        else{
          let sql ="Select * from aarti_video where id = ?"
          con.query(sql , [id], (err, result)=>{
            err ? reject(err) : resolve(result);
            con.release();
          })
        }
      })
     })
  }
  static DeleteAartiVideo = (id)=>{
      return new Promise ((resolve, reject)=>{
        pool.getConnection((err, con)=>{
          if(err)
          reject(err)
          else{
            let sql ="delete from aarti_video where id =?"
            con.query(sql, [id], (err, result)=>{
              err ? reject(err) : resolve(result);
              con.release();
            })
          }
        })
      })
  }

}
export default AartiVideo;
