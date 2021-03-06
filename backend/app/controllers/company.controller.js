const db = require("../models");
const companyTb = db.companyTb;
const contractorTb = db.contractownerTb;
const Op = db.Sequelize.Op;
const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');

function sendMail(reciverMail){
  const myEmail = "dkdev006@gmail.com";
  const emailPass = "1532587Adova";
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: myEmail,
      pass: emailPass
    }
  });
  
  var mailOptions = {
    from: myEmail,
    to: reciverMail,
    subject: 'Greetings from ExpertQ',
    text: 'You have successfully Registred to ExpertQ.'
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response + " || " +reciverMail);
    }
  });
}
 
exports.create = async (req, res) => {
     if (!req.body.C_full_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    } 
    var passwordHash = bcrypt.hashSync(req.body.Contract_password , 10);
    const companyData = {
       C_short_name: req.body.C_short_name,
       C_full_name: req.body.C_full_name,
       Website: req.body.Website,
       No_employees: req.body.No_employees,
    };
   const contractorData = {
       Contract_email: req.body.Contract_email,
       Contract_password: passwordHash,
       Contract_phone: req.body.Contract_phone,
       Contract_designation:  req.body.Contract_designation,
  };

  async function insertCompany() {
    return await  companyTb.create(companyData)
    .then(data => {
      console.log(data);
        return data;
    })
    .catch(err => {
        return err.message ;
    });
  }

  async function insertContractor(cid) {
    contractorData.Company_id = cid;
    contractorData.User_roles_id = 2;
    return await  contractorTb.create(contractorData)
    .then(data => {
      console.log(data);
      sendMail(data.Contract_email);
      return data;
    })
    .catch(err => {
        return err.message ; 
    });
  }
 
  const company =  await insertCompany();
  const contractor =  await insertContractor(company.Company_id);
  if(contractor.Contract_id){
    res.send("Successfully Registered"); 
  }else{
    res.status(500).send("Failed !");
  } 
  };  

  exports.login = async (req, res) => { 
    contractorTb.findAll({where : {Contract_email:req.body.Contract_email}})
      .then(data => {
        if(bcrypt.compareSync(req.body.Contract_password, data[0].Contract_password)){ 
          res.send(data);
        }else{
          res.send("Wrong crentials");
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
 

  exports.findAll = (req, res) => {
    companyTb.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
  exports.findOne = (req, res) => {
    const Company_id = req.params.Company_id;
  
    companyTb.findByPk(Company_id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + Company_id
        });
      });
  };
  exports.update = (req, res) => {
    const Company_id = req.params.Company_id;
  
    companyTb.update(req.body, {
      where: { Company_id: Company_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${Company_id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + Company_id
        });
      });
  };
  exports.delete = async (req, res) => {
    const Company_id = req.params.Company_id;
  
    companyTb.destroy({
      where: { Company_id: Company_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete   with id=${Company_id}. Maybe it was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete   with id=" + Company_id
        });
      });
  };
 
