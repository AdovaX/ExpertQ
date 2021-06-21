module.exports = (sequelize, Sequelize) => {
    const Payment = sequelize.define("PaymentTb", {
        Payment_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Gateway: {
        type: Sequelize.STRING
      },
      Payer_id: {
        type: Sequelize.INTEGER
      },
      Requirement_id: {
        type: Sequelize.INTEGER
      },
      Total_amount: {
        type: Sequelize.DOUBLE
      } ,
      Payment_status: {
        type: Sequelize.ENUM,
        values : ['Completed', 'Pending'],
        defaultValue : 'Pending'
      } ,
      Due_date: {
        type: Sequelize.DATEONLY
      } ,
      Recipient_id: {
        type: Sequelize.INTEGER
      } ,
      Discounted_amount: {
        type: Sequelize.DOUBLE
      } ,
      Invoice_file: {
        type: Sequelize.STRING
      } 
    });
  
    return Payment;
  };
   
  
