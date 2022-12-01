/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  '/': { view: 'pages/homepage' },

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },

  'GET /faq':                { action:   'view-faq' },
  'GET /legal/terms':        { action:   'legal/view-terms' },
  'GET /legal/privacy':      { action:   'legal/view-privacy' },
  'GET /contact':            { action:   'view-contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },

  // Admin routes
  'GET /admin': {
    view: 'pages/admin/index',
    controller: 'IndexController',
    action: 'read',
  },
  'GET /admin/accounts': { view: 'pages/admin/accounts' },
  'GET /admin/orders': { view: 'pages/admin/orders' },
  // Categories routes
  'GET /admin/categories': {
    view: 'pages/admin/categories',
    controller: 'CategoryController',
    action: 'readAll',
  },
  'POST /admin/categories': {
    view: 'pages/admin/categories',
    controller: 'CategoryController',
    action: 'create',
  },
  'GET /admin/categories/:id/delete': {
    view: 'pages/admin/categories',
    controller: 'CategoryController',
    action: 'delete',
  },
  'GET /admin/categories/search': {
    view: 'pages/admin/categories',
    controller: 'CategoryController',
    action: 'search',
  },
  'GET /admin/categories/:id': {
    view: 'pages/admin/category-detail',
    controller: 'CategoryController',
    action: 'readID',
  },
  'POST /admin/categories/:id': {
    view: 'pages/admin/categories',
    controller: 'CategoryController',
    action: 'update',
  },
  // Products routes
  'GET /admin/products': {
    view: 'pages/admin/products',
    controller: 'ProductController',
    action: 'readAll',
  },
  'POST /admin/products': {
    view: 'pages/admin/products',
    controller: 'ProductController',
    action: 'create',
  },
  'GET /admin/products/:id/delete': {
    view: 'pages/admin/products',
    controller: 'ProductController',
    action: 'delete',
  },
  'GET /admin/products/search': {
    view: 'pages/admin/products',
    controller: 'ProductController',
    action: 'search',
  },
  'GET /admin/products/:id': {
    view: 'pages/admin/product-detail',
    controller: 'ProductController',
    action: 'readID',
  },
  'POST /admin/products/:id': {
    view: 'pages/admin/products',
    controller: 'ProductController',
    action: 'update',
  },

  // Legal routes
  'GET /legal/cookies': { view: 'pages/legal/cookies' },
  'GET /legal/imprint': { view: 'pages/legal/imprint' },
  'GET /legal/privacy': { view: 'pages/legal/privacy' },

  // Shop routes
  'GET /shop/cart': { view: 'pages/shop/cart' },

  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                              { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':               { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':                { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':           { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },
  'POST  /api/v1/observe-my-session':                    { action: 'observe-my-session', hasSocketFeatures: true },

  // Product API routes
  'POST /api/v1/create-product':    { action: 'create-product' },
  'GET /api/v1/read-product':       { action: 'read-product' },
  'GET /api/v1/read-all-product':   { action: 'read-all-product' },
  'PATCH /api/v1/update-product':   { action: 'update-product' },
  'DELETE /api/v1/delete-product':  { action: 'delete-product' },
};
