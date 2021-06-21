module.exports = (sequelize, Sequelize) => {
    const Tier = sequelize.define("TierTb", {
        Tier_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Tier_level: {
        type: Sequelize.INTEGER
      },
      Tier_title: {
        type: Sequelize.STRING
      },
      Company_id: {
        type: Sequelize.INTEGER
      },
      Resource_id: {
        type: Sequelize.INTEGER
      } 
    });
  
    return Tier;
  };    
   
    
