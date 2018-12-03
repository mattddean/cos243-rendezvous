const { Model } = require('objection');

class Team extends Model {
  static get tableName() {
	return 'team';
  }
  static get relationMappings() {
	return {
		// To be configure
	};
  }
}

module.exports = Team;
