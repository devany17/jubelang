<template>
  <div>
    <div id="app">
      <!-- Nabvar -->
      <b-navbar type="is-info" v-if="isLoggedIn">
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <b-icon class="logo" icon="chart-pie" />&nbsp;&nbsp;&nbsp;Admin Area
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item
            v-for="item in menu"
            :key="item.path"
            tag="router-link"
            :class="[(item.path == $route.path)?'is-active':'']"
            :to="item.path"
          >{{item.name}}</b-navbar-item>
          <b-navbar-item tag="div">
            <div class="buttons">
              <b-button type="is-light" size="is-small" icon-right="logout" @click="logout">Log Out</b-button>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
      <!-- Router View -->
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      menu: [
        {
          path: "/member",
          name: "Member"
        },
        {
          path: "/kategori",
          name: "Kategori"
        },
        {
          path: "/lelang",
          name: "Lelang"
        },
        {
          path: "/transaksi",
          name: "Transaksi"
        },
        {
          path: "/password",
          name: "Password"
        }
      ]
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("login/logout");
      this.$router.push("/login");
    },
    isActive(path) {
      return this.active === path;
    }
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.login.isLoggedIn
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f1f1f1;
  min-height: 100vh;
}
.b-table .table {
  min-height: 400px !important;
}
.pagination {
  padding-top: 20px;
}
hr {
  background-color: #6e6e6e;
}
.logo {
  transform: rotate(45deg);
}
</style>
