const { Model } = require('objection');

class Member extends Model {
  static get tableName() {
	return 'member';
  }
  static get relationMappings() {
	return {
	  commitments: {
		relation: Model.HasManyRelation,
		modelClass: require('./Commitment'),
		join: {
		  from: 'member.member_email',
		  to: 'commitment.member_email'
		}
	  },
	  vote: {
		relation: Model.HasManyRelation,
		modelClass: require('./Vote'),
		join: {
		  from: 'member.member_email',
		  to: 'vote.member_email'
		}
	  },
	  team: {
		relation: Model.ManyToManyRelation,
		modelClass: require('./Team'),
		join: {
		  from: 'member.member_email',
		  through: {
			  from: 'member_team.member_email',
			  to: 'member_team.team_id'
		  },
		  to: 'team.team_id'
		}
	  },
	  booya: {
		  
	  }
	};
  }
}

module.exports = Member;
