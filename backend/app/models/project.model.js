module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("ProjectsTb", {
        Project_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Project_name: {
        type: Sequelize.STRING
      },
      Project_location: {
        type: Sequelize.STRING
      },
      Start_date: {
        type: Sequelize.DATEONLY
      },
      End_date: {
        type: Sequelize.DATEONLY
      },
      Description: {
        type: Sequelize.TEXT
      },
      Created_by: {
        type: Sequelize.INTEGER
      } ,
      Company_id: {
        type: Sequelize.DOUBLE
      } ,
      Need_remote: {
        type: Sequelize.ENUM,
        values : ['YES' , 'NO'],
        defaultValue : 'NO'
      } ,
      Status: {
        type: Sequelize.ENUM,
        values : ['ACTIVE', 'NONACTIVE', 'CANCELL'],
        defaultValue : 'NONACTIVE'
      } 
    });
  
    return Project;
  };
   
   
