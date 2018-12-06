const { Model } = require('objection');

class Proposed_Time extends Model {
  static get tableName() {
	return 'proposed_time';
  }
  static get relationMappings() {
	return {
		vote: {
			relation: Model.HasManyRelation,
			modelClass: require('./Proposed_Time'),
			join: {
				from: 'proposed_time.proposed_time_id',
				to: 'vote.proposed_time_id'
			}
		}
	};
  }
}

module.exports = Proposed_Time;
