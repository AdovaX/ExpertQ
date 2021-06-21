module.exports = (sequelize, Sequelize) => {
    const Roles = sequelize.define("RolesTb", {
        Roles_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Role_name: {
        type: Sequelize.STRING
      },
      Role_duration: {
        type: Sequelize.INTEGER
      },
      Resource_id: {
        type: Sequelize.INTEGER
      },
      Role_company: {
        type: Sequelize.STRING
      } 
    });
  
    return Roles;
  };    
   
