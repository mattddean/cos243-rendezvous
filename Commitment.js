const { Model } = require('objection');

class Commitment extends Model {
  static get tableName() {
	return 'commitment';
  }
}

module.exports = Commitment;
