module.exports = (sequelize, Sequelize) => {
    const AssignTb = sequelize.define("AssignTb", {
        Assign_id: {
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
      Approved_status: {
        type: Sequelize.ENUM,
        values : ['Approved', 'Pending'],
        defaultValue: 'Pending'
      },
      Approved_by: {
        type: Sequelize.INTEGER
      } 
    });
  
    return AssignTb;
  };
    
