const ProductController = require("./ProductController");

module.exports = {
  friendlyName: 'Read all product',

  description: '',

  inputs: {

  },

  exits: {
  },

  fn: async function () {
    sails.log.info('readAllAPIFunction Execute');
    // All done.
    return await Product.find();
  }
};
