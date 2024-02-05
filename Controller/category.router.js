import Category from "../model/category.model.js";

export const AddCategory = (request, response, next)=>{
    let CategoryName = request.body.CategoryName;

    Category.AddCategory(CategoryName)
     .then(result=>{
        return response.status(200).json({message: "AddCategory Successfully"});
     })
     .catch(err=>{
        return response.status(500).json({error:"Internal Server Error"});
     })
}

export const DeleteCategory =(request, response, next)=>{
    let CategoryId = request.body.CategoryId;

    Category.DeleteCategory(CategoryId)
    .then(result=>{
        return response.status(200).json({message :"Delete Category Successfully"});
    }).catch(err=>{
        return response.status(500).json({error :"Internal server Error"});
    })
}

export const GetCategory =(request, response, next)=>{
    let CategoryId = request.body.CategoryId;

    Category.GetCategory(CategoryId)
    .then(result=>{
        return response.status(200).json({message: "Get out Category Successfully", data : result});
    }).catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server error"});
    })
}

export const UpdateCategory = (request, response, next)=>{
    let CategoryId = request.body.CategoryId; 
    let CategoryName = request.body.CategoryName;
  
    Category.UpdateCategory(CategoryName, CategoryId)
    .then(result=>{
        return response.status(200).json({message: "Update Successfully"});
    }).catch(err=>{
        console.log(err);   
        return response.status(500).json({error: "Internal Server error"});
    })
    
}