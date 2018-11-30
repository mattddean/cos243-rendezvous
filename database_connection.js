
const path = require("path");

const knex = require("knex")({
	client: "pg",
	connection: {
		host: "faraday.cse.taylor.edu",
		database: "gabe_helmuth",
		user: "gabe_helmuth",
		password: "falodepa"
	}
});

const objection = require("objection");

const joi = require("joi");
const hapi = require("hapi");

const server = hapi.server({
    host: "localhost",
    port: 3000,
    routes: {
        files: {
            relativeTo: Path.join(__dirname, "dist")
        }
    }
});

const model = objection.Model;
model.knex(knex);

class Member extends model {
	static get tableName() {
		return "member"
	}	
}










