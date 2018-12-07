const { Model } = require('objection');

class Activity extends Model {
  static get tableName() {
	return 'activity';
  }
  static get relationMappings() {
	return {
		proposed_time: {
			relation: Model.HasManyRelation,
			modelClass: require('./Proposed_Time'),
			join: {
			  from: 'activity.activity_id',
			  to: 'proposed_time.activity_id'
			}
		}
	};
  }
}

module.exports = Activity;