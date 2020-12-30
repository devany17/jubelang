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
              <b-field horizontal label="Password Konfirmasi">
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
                  <button class="button is-primary">Update Password</button>
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
      retypePassword: ""
    };
  }
};
</script>