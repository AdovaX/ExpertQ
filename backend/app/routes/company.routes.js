module.exports = app => {
     const company = require("../controllers/company.controller.js");
  
    var router = require("express").Router();
  
    //router.post("/", spoc.create); 
    router.post("/signup", company.create); 
    router.get("/companylist", company.findAll); 
    router.get("/searchbyid/:Company_id", company.findOne); 
    router.put("/update/:Company_id", company.update); 
    router.delete("/delete/:Company_id", company.delete); 
  
    //app.use('/spoc/signup', router);
    app.use('/company', router);
};