module.exports = {
    friendlyName: 'Create product',
  
    description: 'Create a new product that can be bought in the shop. Redirect to the admin status page regardless of success.',
  
    inputs: {
      title: {
        description: 'This is the human readable title of the product.',
        type: 'string',
        required: true
      },
      price: {
        description: 'This is the price that the user can buy this product for.',
        type: 'number',
        required: true
      },
      stock: {
        description: 'This is the number the procduct in stock.',
        type: 'number',
        required: true
      },
      shortDescription: {
        description: 'This is a small text the user can see on the product card inside the shop.',
        type: 'string',
        required: true
      },
      description: {
        description: 'This is the full description that the user can see on the product detail page.',
        type: 'string',
        required: false
      },
    },
  
    exits: {
      success: {
        viewTemplatePath: 'pages/admin/products',
      },
      unsuccessful: {
        description: 'The product could not be created.',
        responseType: 'unsuccessful'
      }
    },
  
    fn: async function (inputs) {
      sails.log.debug(inputs);
      await Product.create(inputs);
      // All done.
      return;
    }
  
  };
  