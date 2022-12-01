module.exports = {
    friendlyName: 'Delete product',
  
    description: 'Delete a product based on the unique identifier (ID). Redirects back to the admin page.',
  
    inputs: {
      id: {
        description: 'This is the unique identifier (ID) of the product.',
        type: 'number',
        required: true
      },
    },
  
    exits: {
      success: {
        resonseType: 'view',
        viewTemplatePath: 'pages/admin/products'
      },
      unsuccessful: {
        resonseType: 'view',
        viewTemplatePath: 'pages/admin/products'
      },
    },
  
    fn: async function (inputs) {
      let destroyedProduct = Product.destroyOne(inputs);
      if (!destroyedProduct) {throw 'unsuccessful';}
      // All done.
      return;
    }
  };
  