module.exports = (sequelize, Sequelize) => {
    const CompanyTb = sequelize.define("CompanyTb", {
        Company_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      C_short_name: {
        type: Sequelize.STRING
      },
      C_full_name: {
        type: Sequelize.STRING
      },
      Website: {
        type: Sequelize.STRING
      },
      No_employees: {
        type: Sequelize.INTEGER
      },
      Founded: {
        type: Sequelize.DATEONLY
      },
      Tier_id: {
        type: Sequelize.INTEGER
      },
      About: {
        type: Sequelize.TEXT
      },
      Eq_rating: {
        type: Sequelize.INTEGER
      }
    });
  
    return CompanyTb;
  };
   
