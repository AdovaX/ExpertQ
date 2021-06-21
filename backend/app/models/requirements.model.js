module.exports = (sequelize, Sequelize) => {
    const Requirement = sequelize.define("RequirementsTb", {
        Requirement_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Company_id: {
        type: Sequelize.INTEGER
      },
      Week_duration: {
        type: Sequelize.INTEGER
      } ,
      Week_must_time: {
        type: Sequelize.INTEGER
      } ,
      Technology_id: {
        type: Sequelize.INTEGER 
      } ,
      Domain_id: {
        type: Sequelize.INTEGER, 
      } ,
      Role: {
        type: Sequelize.INTEGER, 
      } ,
      Certification: {
        type: Sequelize.STRING, 
      } ,
      Hours_per_week: {
        type: Sequelize.INTEGER, 
      } ,
      Hours_per_month: {
        type: Sequelize.INTEGER, 
      } ,
      Hours_per_day: {
        type: Sequelize.INTEGER, 
      } ,
      No_of_resources: {
        type: Sequelize.INTEGER, 
      } ,
      Documnets: {
        type: Sequelize.STRING, 
      } ,
      Project_id: {
        type: Sequelize.INTEGER, 
      } ,
      Requirements_description: {
        type: Sequelize.TEXT, 
      } 
    });
  
    return Requirement;
  };
   
   

