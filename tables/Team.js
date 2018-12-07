const { Model } = require('objection');

class Team extends Model {
  static get tableName() {
	return 'team';
  }
  static get relationMappings() {
	return {
		activity: {
			relation: Model.HasManyRelation,
			modelClass: require('./Activity'),
			join: {
			  from: 'team.team_id',
			  to: 'activity.team_id'
			}
		}
	};
  }
}

module.exports = Team;
