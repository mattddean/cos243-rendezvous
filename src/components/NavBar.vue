<template>
    <v-toolbar dark color="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <router-link v-bind:to="{ name: 'home-page' }">
            <v-toolbar-title class="white--text">
                Rendezvous
            </v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>

        <v-btn flat v-bind:to="{ name: 'sign-in' }">Sign In</v-btn>
		
		<v-btn flat v-bind:to="{ name: 'reset-password' }">Reset Password</v-btn>

        <v-btn flat v-bind:to="{ name: 'about-us' }">About Us</v-btn>

        <v-menu offset-y>
            <v-btn flat slot="activator">
                <span>Member</span>
                <v-icon dark>arrow_drop_down</v-icon>
            </v-btn>

            <v-list>
                <v-list-tile v-bind:to="{ name: 'members' }">
                    <v-list-tile-title>Member list</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </v-toolbar>
</template>
