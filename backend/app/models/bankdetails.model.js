module.exports = (sequelize, Sequelize) => {
    const Bank = sequelize.define("BankDetailsTb", {
        Bank_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Bank_name: {
        type: Sequelize.STRING
      },
      Branch: {
        type: Sequelize.STRING
      },
      Bank_Address: {
        type: Sequelize.STRING
      },
      Account_number: {
        type: Sequelize.STRING
      },
      IFSC: {
        type: Sequelize.STRING
      },
      Company_id: {
        type: Sequelize.INTEGER
      },
      Spoc_id: {
        type: Sequelize.INTEGER
       } 
    });
  
    return Bank;
  };
  