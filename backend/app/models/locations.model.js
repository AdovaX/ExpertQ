module.exports = (sequelize, Sequelize) => {
    const Locations = sequelize.define("LocationsTb", {
        Locations_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Locations_name: {
        type: Sequelize.STRING
      },
      Location_country: {
        type: Sequelize.STRING
      },
      Location_pincode: {
        type: Sequelize.INTEGER 
      },
      Location_state: {
        type: Sequelize.STRING
      },
      Company_id: {
        type: Sequelize.INTEGER 
      },
      Resource_id: {
        type: Sequelize.INTEGER
      } 
    });
  
    return Locations;
  };
   
   
