<template>
    <div>
        <h4 class="display-1">Members</h4>

        <v-data-table v-bind:headers="headers" v-bind:items="members">
            <template slot="items" slot-scope="props">
                <td>{{ props.item.member_email }}</td>
                <td>{{ props.item.password }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    const axios = require("axios");

    export default {
        name: "members",
        data: function () {
            return {
                headers: [
                    {text: "Email", value: "member_email"},
                    {text: "Password", value: "password"}
                ],
                members: []
            };
        },
        mounted: function () {
            axios.get("/api/members").then(response => {
                this.members = response.data.map(member => ({
                    member_email: member.member_email,
                    password: member.password
                }));
            });
        }
    };
</script>

<style scoped></style>
