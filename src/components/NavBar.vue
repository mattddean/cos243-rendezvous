<template>
    <v-toolbar dark color="primary">

        <router-link v-bind:to="{ name: 'home-page' }">
            <v-toolbar-title class="white--text">
                Rendezvous
            </v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>

        <v-btn v-if="$root.currentUser==null" flat v-bind:to="{ name: 'about' }">About</v-btn>
        <v-btn v-if="$root.currentUser==null" flat v-bind:to="{ name: 'sign-in' }">Sign In</v-btn>

        <v-btn v-if="$root.currentUser" flat v-bind:to="{ name: 'teams' }">Teams</v-btn>
        <v-btn v-if="$root.currentUser" flat v-bind:to="{ name: 'schedule' }">Schedule</v-btn>
        <v-btn v-if="$root.currentUser" flat v-bind:to="{ name: 'activities' }">Activities</v-btn>
        <v-btn v-if="$root.currentUser" flat v-bind:to="{ name: 'sign-out' }">Sign Out</v-btn>

    </v-toolbar>
</template>
