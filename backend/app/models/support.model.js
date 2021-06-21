module.exports = (sequelize, Sequelize) => {
    const Support = sequelize.define("SupportTb", {
        Support_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Company_id: {
        type: Sequelize.INTEGER
      },
      User_id: {
        type: Sequelize.INTEGER
      },
      Title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
      } ,
      Raised_on: {
        type: Sequelize.DATEONLY
      } ,
      Status: {
        type: Sequelize.ENUM,
        values : ['Solved', 'Pending'],
        defaultValue : 'pending'
      } 
    });
  
    return Support;
  };    
   
   
