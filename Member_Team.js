const { Model } = require('objection');

class Member_Team extends Model {
  static get tableName() {
	return 'member_team';
  }
}

module.exports = Member_Team;
