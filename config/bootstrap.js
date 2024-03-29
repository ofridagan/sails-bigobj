/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://links.sailsjs.org/docs/config/bootstrap
 */

fixtures = require("sails-fixtures")

module.exports.bootstrap = function(cb) {
  fixtures.init({
    dir: 'fixtures',
    pattern: '*.json'
  }, cb)
};
