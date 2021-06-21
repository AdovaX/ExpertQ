module.exports = (sequelize, Sequelize) => {
    const Negotiation = sequelize.define("NegotiationTb", {
        Negotiation_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Sender_id: {
        type: Sequelize.STRING
      },
      Reciver_id: {
        type: Sequelize.STRING
      },
      Status: {
        type: Sequelize.ENUM,
        values : ['Seen', 'Unseen'],
        defaultValue : 'Unseen' 
      },
      Message: {
        type: Sequelize.TEXT
      } 
    });
  
    return Negotiation;
  };
   
    