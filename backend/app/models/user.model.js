module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("UsersTb", {
        User_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      User_roles_id: {
        type: Sequelize.INTEGER
      },
      User_email: {
        type: Sequelize.STRING
      },
      User_phone: {
        type: Sequelize.STRING
      },
      User_password: {
        type: Sequelize.STRING
      },
      User_company: {
        type: Sequelize.INTEGER
      },
      User_dob: {
        type: Sequelize.DATEONLY
      } 
    });
  
    return User;
  };    
   
    
   