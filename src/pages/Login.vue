<template>
  <div class="section">
    <div class="columns is-centered">
      <div class="column is-4 is-3-fullhd">
        <div class="flat-card has-background-white">
          <div class="card-content">
            <!-- <img src="../logo"> -->
            <!-- <img style="margin: auto; display: block" width="100" src="../assets/logo.jpg" alt /> -->
            <h3 class="has-text-centered title has-text-info">
              <b-icon class="logo" type="is-info" icon="chart-pie" size="is-large" />JUBELANG
            </h3>
            <br />
            <div class="content">
              <b-field label="Username" style="text-align: left ">
                <b-input
                  autofocus
                  v-model="username"
                  placeholder="Masukkan username"
                  @keyup.enter.native="login"
                  :disabled="isLoading"
                />
              </b-field>
              <b-field label="Password" style="text-align: left ">
                <b-input
                  password-reveal
                  type="password"
                  v-model="password"
                  placeholder="Masukkan password"
                  @keyup.enter.native="login"
                  :disabled="isLoading"
                />
              </b-field>
              <br />
              <b-field>
                <div class="buttons is-fullwidth">
                  <b-button type="is-info" @click="login" :loading="isLoading">Login</b-button>
                  <b-button type="is-warning" :disabled="isLoading" @click="clear()">Clear</b-button>
                </div>
              </b-field>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { urlEncoded } from "../function-helper";
export default {
  data() {
    return {
      username: "admin",
      password: "master",
      isLoading: false
    };
  },
  methods: {
    clear() {
      this.username = "";
      this.password = "";
    },
    login() {
      if (this.username && this.password) {
        this.isLoading = true;
        let userLogin = {
          username: this.username,
          password: this.password,
          grant_type: "password"
        };

        const username = "jubelang-client";
        const password = "jubelang-secret";

        const token = Buffer.from(`${username}:${password}`, "utf8").toString(
          "base64"
        );

        this.axios
          .post("/oauth/token", urlEncoded(userLogin), {
            headers: {
              Authorization: `Basic ${token}`
            }
          })
          .then(res => {
            let userToken = res.data.access_token
            this.$store.dispatch("login/login", userToken);
            this.$buefy.toast.open({
              duration: 1000,
              message: "Login Success",
              type: "is-light",
              position: "is-top"
            });
            this.$router.push("/");

          
          })
          .catch(e => {
            this.$buefy.toast.open({
              duration: 1000,
              message: "username/password incorrect",
              type: "is-danger",
              position: "is-top"
            });
            this.isLoading = false;
            console.log(e);
          });
      } else {
        this.$buefy.toast.open({
          duration: 1000,
          message: "Data can't be null",
          type: "is-danger",
          position: "is-top"
        });
      }
    }
  }
};
</script>
<style scoped>
.formToken {
  width: 400px;
  margin: auto;
  background-color: white;
}
</style>