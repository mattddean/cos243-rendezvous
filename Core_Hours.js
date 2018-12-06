const { Model } = require('objection');

class Core_Hours extends Model {
  static get tableName() {
	return 'core_hours';
  }
}

module.exports = Core_Hours;