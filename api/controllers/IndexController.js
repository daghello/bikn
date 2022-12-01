/**
 * IndexController
 * @description :: Server-side actions for handling incoming requests.
 */

 module.exports = {
    read: async (req, res) => {
      sails.log.debug('IndexController: read');
      // All done.
      return res.view('pages/admin/index', {
        productCount: await Product.count(),
        categoryCount: await Category.count(),
      });
    },
  };
  