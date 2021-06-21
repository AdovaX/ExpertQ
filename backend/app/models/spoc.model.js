module.exports = (sequelize, Sequelize) => {
    const Spoc = sequelize.define("SpocTb", {
        Spoc_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Spoc_name: {
        type: Sequelize.STRING
      },
      Spoc_email: {
        type: Sequelize.STRING
      },
      Spoc_designation: {
        type: Sequelize.STRING
      },
      Spoc_phone: {
        type: Sequelize.STRING
      },
      Company_id: {
        type: Sequelize.INTEGER
      },
      Spoc_status: {
        type: Sequelize.ENUM,
        values:['PENDING', 'VERIFIED', 'NONVERIFIED']
      }
    });
  
    return Spoc;
  };