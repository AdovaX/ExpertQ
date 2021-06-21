module.exports = (sequelize, Sequelize) => {
    const Contractor = sequelize.define("ContractOwnerTb", {
        Contract_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Contract_name: {
        type: Sequelize.STRING
      },
      Contract_email: {
        type: Sequelize.STRING
      },
      Contract_designation: {
        type: Sequelize.STRING
      },
      Contract_phone: {
        type: Sequelize.STRING
      },
      Company_id: {
        type: Sequelize.INTEGER
      } 
    });
  
    return Contractor;
  };
   
