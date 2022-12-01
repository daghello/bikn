module.exports = {
    attributes: {
      title: { type: 'STRING', columnType: 'VARCHAR(80)', required: true },
      shortDescription: { type: 'STRING', columnType: 'VARCHAR(80)', required: true},
      description: { type: 'STRING', columnType: 'TEXT(1000)', required: false},
      price: { type: 'NUMBER', columnType: 'DECIMAL (6,2)', required: true},
      stock: { type: 'NUMBER', columnType: 'INT(4)', required: true},
    },
  };
  