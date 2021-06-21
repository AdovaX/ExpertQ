module.exports = (sequelize, Sequelize) => {
    const Interview = sequelize.define("InterviewTb", {
        Interview_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Requirement_id: {
        type: Sequelize.INTEGER
      },
      Resource_id: {
        type: Sequelize.INTEGER
      },
      Interviewed: {
        type: Sequelize.ENUM,
        values : ['NO', 'YES'],
        defaultValue : 'NO'
      },
      Interview_date: {
        type: Sequelize.DATEONLY
      },
      Interview_status: {
        type: Sequelize.ENUM,
        values : ['PASSED', 'FAILLED', 'PENDING'],
        defaultValue : 'PENDING'
      },
      Company_id: {
        type: Sequelize.INTEGER
      },
      User_id: {
        type: Sequelize.INTEGER
      } ,
      Short_listed: {
        type: Sequelize.ENUM,
        values : ['YES', 'NO', 'PENDING'],
        defaultValue : 'PENDING'
      } 
    });
  
    return Interview;
  };
   
