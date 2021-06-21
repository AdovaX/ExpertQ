module.exports = (sequelize, Sequelize) => {
    const TechCategory = sequelize.define("TechnologyCategoryTb", {
        Technology_category_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Technology_category: {
        type: Sequelize.STRING
      }
    });
  
    return TechCategory;
  };    
   
   

