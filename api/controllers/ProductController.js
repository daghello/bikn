/**
 * ProductController
 * @description :: Server-side actions for handling incoming requests.
 */

 module.exports = {
    /**
     * This function is being used to create a new product. After being done with creating it's
     * returning the admin overview.
     * @param {*} req Request object from express.
     * @param {*} res Response object from express.
     * @returns Products admin view containing all products in the database.
     */
    create: async function (req, res) {
      sails.log.debug('ProductController: create', { parameters: req.allParams() });
      await Product.create(req.allParams());
      // All done.
      return res.view('pages/admin/products', { products: await Product.find() });
    },
  
    /**
     * This function returns all available products on the admin products overview.
     * @param {*} _ Request object from express.
     * @param {*} res Response object from express.
     * @returns Products admin view containing all products in the database.
     */
    readAll: async function (_, res) {
      sails.log.debug('ProductController: readAll');
      // All done.
      return res.view('pages/admin/products', { products: await Product.find() });
    },
  
    /**
     * This function returs a detailed admin view of a single product identified by a unique
     * identifier (ID).
     * @param {*} req Request object from express.
     * @param {*} res Response object from express.
     * @returns Detailed admin view of a single product.
     */
    readID: async function (req, res) {
      sails.log.debug('ProductController: readID', { productId: req.params.id });
      // All done.
      return res.view('pages/admin/product-detail', {
        product: await Product.findOne(req.params),
      });
    },
  
    /**
     * This function is updating the properties of a single product according to what the user has
     * set them to. Afterwards the admin product overview of all products is being delivered.
     * @param {*} req Request object from express.
     * @param {*} res Response object from express.
     * @returns Products admin view containing all products in the database.
     */
    update: async function (req, res) {
      sails.log.debug('ProductController: update', {
        productId: req.params.id,
        contents: req.body,
      });
      await Product.updateOne({ id: req.params.id }).set(req.body);
      // All done.
      return res.view('pages/admin/products', { products: await Product.find() });
    },
  
    /**
     * This function is responsible for deleting a specific product identified by a unique identifier
     * (ID). After deletion it will return to the admin overview page displaying all remaining
     * available products.
     * @param {*} req Request object from express.
     * @param {*} res Response object from express.
     * @returns Products admin view containing all products in the database.
     */
    delete: async function (req, res) {
      sails.log.debug('ProductController: delete', { productId: req.params.id });
      await Product.destroy({ id: req.params.id });
      // All done.
      return res.view('pages/admin/products', { products: await Product.find() });
    },
  
    /**
     * This function enables to search for specific products in the admin overview page. The searched
     * products will be shown in the admin overview. If there is no product matching the criteria
     * every available product will be shown in the admin overview.
     * @param {*} req Request object from express.
     * @param {*} res Response object from express.
     * @returns Admin product overview page with filtered products according to the search parameters
     * provided. Except when the filtered products are 0; then every product available is being shown.
     */
    search: async function (req, res) {
      sails.log.debug('ProductController: search', { searchTerm: req.query.search });
      let searchedProducts = await Product.find({
        or: [{ title: { contains: req.query.search } }],
      });
      // If there's no products in the filtered list return all products from the database.
      if (searchedProducts.length === 0) {
        searchedProducts = await Product.find();
      }
      // All done
      return res.view('pages/admin/products', { products: searchedProducts });
    },
  };
  