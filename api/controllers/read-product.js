module.exports = {
    friendlyName: 'Read product',
  
    description: '',
  
    inputs: {
      id: {
        description: 'This is the unique identifier (ID) of the product.',
        type: 'number',
        required: true
      },
    },
  
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/welcome'
      },
      notFound: {
        description: 'No user with the specifi ed ID was found in the database.',
        responseType: 'notFound'
      }
    },
  
    fn: async function (inputs) {
      // All done.
      return {
        products: await Product.find(inputs)
      };
  
    }
  };
  