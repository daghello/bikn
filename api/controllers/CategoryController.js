/**
 * CategoryController
 * @description :: Server-side actions for handling incoming requests.
 */

 module.exports = {
    /**
     * This function is being used to create a new category. After being done with creating it's
     * returning the admin overview.
     * @param {*} req Request object from express.
     * @param {*} res Response object from express.
     * @returns Categories admin view containing all categories in the database.
     */
    create: async (req, res) => {
      sails.log.debug('CategoryController: create');
      await Category.create(req.allParams());
      // All done.
      return res.view('pages/admin/categories', {
        categories: await Category.find(),
      });
    },
  
    /**
     * This function returns all available categories on the admin categories overview.
     * @param {*} _ Request object from express.
     * @param {*} res Response object from express.
     * @returns Categories admin view containing all categories in the database.
     */
    readAll: async (_, res) => {
      sails.log.debug('CategoryController: readAll');
      // All done.
      return res.view('pages/admin/categories', {
        categories: await Category.find(),
      });
    },
  
    /**
     * This function returs a detailed admin view of a single category identified by a unique
     * identifier (ID).
     * @param {*} req Request object from express.
     * @param {*} res Response object from express.
     * @returns Detailed admin view of a single category.
     */
    readID: async (req, res) => {
      sails.log.debug('CategoryController: readID');
      // All done.
      return res.view('pages/admin/category-detail', {
        category: await Category.findOne(req.params),
      });
    },
  
    /**
     * This function is updating the properties of a single category according to what the user has
     * set them to. Afterwards the admin category overview of all categories is being delivered.
     * @param {*} req Request object from express.
     * @param {*} res Response object from express.
     * @returns Categories admin view containing all categories in the database.
     */
    update: async (req, res) => {
      sails.log.debug('CategoryController: update', {
        categoryId: req.params.id,
        contents: req.body,
      });
      await Category.updateOne({ id: req.params.id }).set(req.body);
      // All done.
      return res.view('pages/admin/categories', {
        categories: await Category.find(),
      });
    },
  
    /**
     * This function is responsible for deleting a specific category identified by a unique identifier
     * (ID). After deletion it will return to the admin overview page displaying all remaining
     * available categories.
     * @param {*} req Request object from express.
     * @param {*} res Response object from express.
     * @returns Categories admin view containing all categories in the database.
     */
    delete: async (req, res) => {
      sails.log.debug('CategoryController: delete', {
        categoryId: req.params.id,
      });
      await Category.destroy({ id: req.params.id });
      // All done.
      return res.view('pages/admin/categories', {
        categories: await Category.find(),
      });
    },
  
    /**
     * This function enables to search for specific categories in the admin overview page. The searched
     * categories will be shown in the admin overview. If there is no category matching the criteria
     * every available category will be shown in the admin overview.
     * @param {*} req Request object from express.
     * @param {*} res Response object from express.
     * @returns Admin category overview page with filtered categories according to the search parameters
     * provided. Except when the filtered categories are 0; then every category available is being shown.
     */
    search: async (req, res) => {
      sails.log.debug('CategoryController: search', {
        searchTerm: req.query.search,
      });
      let searchedCategories = await Category.find({
        or: [{ title: { contains: req.query.search } }],
      });
      // If there's no categories in the filtered list return all categories from the database.
      if (searchedCategories.length === 0) {
        searchedCategories = await Category.find();
      }
      // All done
      return res.view('pages/admin/categories', {
        categories: searchedCategories,
      });
    },
  };
  