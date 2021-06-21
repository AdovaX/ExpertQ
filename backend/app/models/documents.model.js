module.exports = (sequelize, Sequelize) => {
    const Documents = sequelize.define("DocumentsTb", {
        Document_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Document_title: {
        type: Sequelize.STRING
      },
      Document_value: {
        type: Sequelize.STRING
      },
      Verification: {
        type: Sequelize.ENUM,
        values : ['Verified', 'Pending', 'NonVerified'],
        defaultValue:'Pending'
      },
      Company_id: {
        type: Sequelize.INTEGER
      },
      Resource_id: {
        type: Sequelize.INTEGER
      } 
    });
  
    return Documents;
  };
   
   