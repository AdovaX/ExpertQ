module.exports = (sequelize, Sequelize) => {
    const Education = sequelize.define("EducationTb", {
        Education_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Resource_id: {
        type: Sequelize.STRING
      },
      Qualification: {
        type: Sequelize.STRING
      },
      Pass_year: {
        type: Sequelize.DATEONLY
      },
      Institude_name: {
        type: Sequelize.STRING
      },
      Technology_id: {
        type: Sequelize.INTEGER
      },
      Expertaise_level: {
        type: Sequelize.INTEGER
      },
      Domain_id: {
        type: Sequelize.INTEGER
      },
      Roles_id: {
        type: Sequelize.INTEGER
      },
      Category: {
        type: Sequelize.ENUM,
        values : ['Degree' , 'Master' , 'Certificate'],
        defaultValue : 'Degree'
      },
      Resume: {
        type: Sequelize.STRING
      },
      Intro_video: {
        type: Sequelize.STRING
      }
    });
  
    return Education;
  }; 
