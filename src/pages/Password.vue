<template>
  <div>
    <section class="container">
      <div class="section">
        <p class="title">Ganti Password</p>
        <div class="columns is-centered">
          <div class="column is-7">
            <section>
              <b-field horizontal label="Password Lama">
                <b-input
                  type="password"
                  placeholder="******"
                  :disabled="isLoading"
                  v-model="oldPassword"
                  password-reveal
                  expanded
                ></b-input>
              </b-field>
              <b-field horizontal label="Password Baru">
                <b-input
                  type="password"
                  placeholder="******"
                  :disabled="isLoading"
                  v-model="newPassword"
                  password-reveal
                  expanded
                ></b-input>
              </b-field>
              <b-field
                horizontal
                label="Password Konfirmasi"
                :type="newPassword != retypePassword? 'is-danger': 'is-success'"
                :message="newPassword != retypePassword? 'Password tidak cocok': 'Password cocok'"
              >
                <b-input
                  type="password"
                  placeholder="******"
                  :disabled="isLoading"
                  v-model="retypePassword"
                  password-reveal
                  expanded
                ></b-input>
              </b-field>

              <b-field horizontal>
                <!-- Label left empty for spacing -->
                <p class="control">
                  <b-button :loading="isLoading" @click="updatePassword()" type="is-primary">Update Password</b-button>
                </p>
              </b-field>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      oldPassword: "",
      newPassword: "",
      retypePassword: null
    };
  },
  methods: {
    updatePassword() {
      this.isLoading= true,

      this.axios
        .post(
          "/api/admin/new/password",
          {},
          {
            params: {
              access_token: this.$store.state.login.token,
              password: this.oldPassword,
              newPassword: this.newPassword
            }
          }
        )
        .then(res => {
          this.$buefy.toast.open({
            duration: 1000,
            message: res.data.message,
            type: "is-success",
            position: "is-top"
          });
          this.clear();
          this.isLoading = false;
        })
        .catch(e => {
          this.isLoading = false;
          this.$buefy.toast.open({
            duration: 1000,
            message: "Error",
            type: "is-danger",
            position: "is-top"
          });
        });
    },
    clear() {
      this.oldPassword = "";
      this.newPassword = "";
      this.retypePassword = "";
    }
  }
};
</script>