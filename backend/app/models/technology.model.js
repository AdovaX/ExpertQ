module.exports = (sequelize, Sequelize) => {
    const Technology = sequelize.define("TechnologyTb", {
        Technology_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Technology_name: {
        type: Sequelize.STRING
      },
      Technology_parent_id: {
        type: Sequelize.STRING
      },
      Technology_category_id: {
        type: Sequelize.STRING
      },
      Technology_version: {
        type: Sequelize.STRING
      },
      Technology_type: {
        type: Sequelize.STRING
      },
      Technology_work_start: {
        type: Sequelize.STRING
      } ,
      Technology_work_end: {
        type: Sequelize.STRING
      } 
    });
  
    return Technology;
  };    
   
   
 