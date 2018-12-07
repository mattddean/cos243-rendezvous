<template>
    <div>
        <h4 class="display-1">Reset Password</h4>

        <instructions details="Reset your password." />

        <v-form v-model="valid">
            <v-text-field
                v-model="email"
                v-bind:rules="rules.email"
                error-count="10"
                type="email"
                label="Your email address"
            >
            </v-text-field>
            <v-text-field
                v-model="password"
                v-bind:rules="rules.password"
                error-count="10"
                type="password"
                label="Your current password"
                required
            >
            </v-text-field>
			
			<v-text-field
                v-model="newPassword1"
                v-bind:rules="rules.newPassword1"
                error-count="10"
                type="password"
                label="Enter new password"
            >
            </v-text-field>
			<v-text-field
                v-model="newPassword2"
                v-bind:rules="rules.newPassword2"
                error-count="10"
                type="password"
                label="Confirm new password"
            >
            </v-text-field>
			
            <v-btn v-bind:disabled="!valid" v-on:click="handleSubmit"
                >Reset Password
            </v-btn>
        </v-form>

        <div class="text-xs-center">
            <v-dialog v-model="dialogVisible" width="500">
                <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title>
                        {{ dialogHeader }}
                    </v-card-title>

                    <v-card-text> {{ dialogText }} </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" flat v-on:click="hideDialog"
                            >Okay</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </div>
</template>

<script>
import Instructions from "../components/Instructions.vue";
import axios from "axios";

export default {
    name: "ResetPasswordPage",
    components: {
        Instructions
    },
    data: function() {
        return {
            valid: false,
            email: "",
            password: "",
			newPassword1: "",
			newPassword2: "",

            dialogHeader: "<no dialogHeader>",
            dialogText: "<no dialogText>",
            dialogVisible: false,

			
            rules: {
                required: [
                    val => val.length > 0 || "Required"
                ],
                email: [
					
                    val => /^\w+@\w+\.\w{2,}$/.test(val) || "Invalid e-mail"
                ],
                password: [
                    val => /[A-Z]/.test(val) || "Need upper case letter",
                    val => /[a-z]/.test(val) || "Need lower case letter",
                    val => /\d/.test(val) || "Need digit",
                    val => val.length >= 8 || "Minimum 8 characters"
                ],
				newPassword1: [
					val => val != this.password || "New password must be unique",
					val => /[A-Z]/.test(val) || "Need upper case letter",
                    val => /[a-z]/.test(val) || "Need lower case letter",
                    val => /\d/.test(val) || "Need digit",
                    val => val.length >= 8 || "Minimum 8 characters",
				],
				newPassword2: [
					val => this.newPassword1 == val || "Both new password fields must match",
					val => /[A-Z]/.test(val) || "Need upper case letter",
                    val => /[a-z]/.test(val) || "Need lower case letter",
                    val => /\d/.test(val) || "Need digit",
                    val => val.length >= 8 || "Minimum 8 characters",
					
				]
            }
        };
    },
    methods: {
        handleSubmit: function() {
            axios
                .post("/api/reset-password", {
                    email: this.email,
					password: this.password,
					newPassword1: this.newPassword1,
                })
                .then(result => {
					var saved = result;
                    if (result.status === 200) {
                        if (result.data.ok) {
                            this.showDialog("Success", result.data.msge);
                        } else {
                            this.showDialog("Sorry", result.data.msge);
                        }
                    }
                })
                .catch(err => this.showDialog("Failed", err));
        },
        showDialog: function(header, text) {
            this.dialogHeader = header;
            this.dialogText = text;
            this.dialogVisible = true;
        },
        hideDialog: function() {
            this.dialogVisible = false;
			if ( this.saved.status >= 200 || this.saved.status <= 299 ) {
				this.$router.push({ name: "home-page" });
			} else {
				this.$router.push({ name: "reset-password" });
			}
        }
    }
};
</script>
