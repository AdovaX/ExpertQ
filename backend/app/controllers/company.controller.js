const db = require("../models");
const companyTb = db.companyTb;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.C_short_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
     const companyData = {
        C_short_name: req.body.C_short_name,
        C_full_name: req.body.C_full_name,
        Website: req.body.Website,
        No_employees: req.body.No_employees,
        Founded: req.body.Founded, 
        About: req.body.About, 
        Eq_rating: req.body.Eq_rating, 
    };
  
     companyTb.create(companyData)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
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
  exports.delete = (req, res) => {
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