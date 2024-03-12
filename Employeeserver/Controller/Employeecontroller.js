const emplyeeShema=require("../Model/employeeschema")
const EmpRegister=(req,res)=>{
    const emp=new emplyeeShema({
        name:req.body.name,
        age:req.body.age,
        place:req.body.place,
   })
  emp.save()
   .then((data)=>{
    res.json({
        msg:"data saved",
        data:data,
        status:200
    })
   })
   .catch((err)=>{
    res.json({
        msg:"data not saved",
        err:err,
        status:500
    })
   })
}

const viewall=(req,res)=>
{
    emplyeeShema.find()
    .then((data)=>{
        res.json({
            msg:"data is obtained",
            data:data
        })
    })
    .catch((err)=>{
        res.json({
            msg:"Data not obtained",
            err:err
        })
    })
}

    const deletedata=(req,res)=>{
        const id=req.params.id
        emplyeeShema.findByIdAndDelete(id)
        .then((data)=>{
            res.json({
                msg:"Data deleted",
                data:data
            })
        })
        .catch((err)=>{
            res.json({
                msg:"Data not deleted",
                err:err
            })
        })
    }

    
const viewone=(req,res)=>{
    console.log(req.params.id);
    const id=req.params.id

    emplyeeShema.findById(id)
    .then((data)=>{
        res.json({
            msg:"data is obtained",
            data:data
        })
    })
    .catch((err)=>{
        res.json({
            msg:"Data not obtained",
            err:err
        })
    })
}


const updateemployee = (req, res) => {
    const id=req.params.id
    
    emplyeeShema.findByIdAndUpdate(id,{name:req.body.name})
  
      .then((data) => {
        res.json({
          mge: "data updated",
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          msg: "data not updated",
          err: err,
        });
      });
  };


module.exports={EmpRegister,viewall,deletedata,viewone,updateemployee};