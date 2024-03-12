const express=require('express');
const employee=require('../Controller/Employeecontroller');

router=express.Router();

router.post('/Register',employee.EmpRegister);
router.get('/all',employee.viewall);
router.post('/delone/:id',employee.deletedata);
router.get('/viewone/:id',employee.viewone);
router.post('/update/:id',employee.updateemployee);


module.exports=router