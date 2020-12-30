<template>
  <div>
    <section class="container">
      <div class="section">
        <p class="title has-text-centered">Dashboard</p>
        <p class="has-text-centered">Welcome to jubelang</p>
        <br />
        <section>
          <div class="columns is-multiline is-centered">
            <div
              v-for="item in menu"
              :key="item.name"
              tag="div"
              :to="item.path"
              class="column is-4"
            >
              <router-link
                tag="div"
                :class="`is-padding card has-background-info-dark`"
                :to="item.path"
              >
                <div class="section">
                  <a class="title is-4 has-text-white has-text-centered is-block">
                    <b-icon size="is-large" :icon="item.icon"></b-icon>
                    <br />
                    {{item.name}}
                  </a>
                </div>
              </router-link>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/member",
          name: "Member",
          color: "danger-dark",
          icon: "account-group"
        },
        {
          path: "/kategori",
          name: "Kategori",
          color: "warning-dark",
          icon: "view-dashboard"
        },
        {
          path: "/lelang",
          name: "Lelang",
          color: "success-dark",
          icon: "gavel"
        },
        {
          path: "/transaksi",
          name: "Transaksi",
          color: "info-dark",
          icon: "chart-areaspline"
        },
        {
          path: "/password",
          name: "Password",
          color: "primary-dark",
          icon: "form-textbox-password"
        }
      ]
    };
  }
};
</script>