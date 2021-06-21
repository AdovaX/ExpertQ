module.exports = (sequelize, Sequelize) => {
    const Experince = sequelize.define("ExperinceTb", {
        Experience_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Resource_id: {
        type: Sequelize.STRING
      },
      Company_name: {
        type: Sequelize.INTEGER
      },
      Year_of_joining: {
        type: Sequelize.INTEGER
      },
      Roles_id: {
        type: Sequelize.INTEGER
      } 
    });
  
    return Experince;
  };
  