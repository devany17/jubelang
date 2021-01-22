<template>
  <div>
    <section class="container">
      <div class="section">
        <div class="columns">
          <div class="column">
            <p class="title">Lelang</p>
          </div>
          <div class="column is-4">
            <b-field>
              <b-input
                placeholder="Search..."
                type="search"
                @input="filter"
                v-model="search"
                @keypress.native.enter.prevent="filter()"
                rounded
                icon="magnify"
              ></b-input>
            </b-field>
          </div>
        </div>
        <b-table :data="lelang" :loading="isLoading">
          <p slot="empty" v-if="!isLoading" class="has-text-grey has-text-centered">Data tidak ditemukan</p>
          <b-table-column label="ID" centered v-slot="props">{{props.row.idItem}}</b-table-column>
          <b-table-column label="Produk" cell-class="is-capitalized" v-slot="props">{{props.row.produk}}</b-table-column>
          <b-table-column label="Kategori" cell-class="is-capitalized" v-slot="props">{{props.row.kategori}}</b-table-column>
          <b-table-column label="Toko" cell-class="is-capitalized" v-slot="props">{{props.row.storeName}}</b-table-column>
          <b-table-column label="Status" centered v-slot="props">{{props.row.status}}</b-table-column>
          <b-table-column label="Pemenang" cell-class="is-capitalized" v-slot="props" centered>{{props.row.winner || '-'}}</b-table-column>

          <b-table-column label="Action" centered v-slot="props">
            <b-button
              size="is-small"
              icon-left="delete"
              type="is-danger"
              @click="deleteLelang(props.row.idItem)"
            >Hapus</b-button>
          </b-table-column>
        </b-table>
      </div>
    </section>
  </div>
</template>
<script>
import debounce from "debounce";
import numeric from "../components/Numeric";
export default {
  components: { numeric },
  data() {
    return {
      isLoading: false,
      page: 0,
      total: 0,
      search: "",
      lelang: []
    };
  },
  methods: {
    getLelang() {
      this.isLoading = true;
      this.axios
        .get("/api/admin/bidding", {
          params: {
            access_token: this.$store.state.login.token,
            page: this.page,
            search: this.search
          }
        })
        .then(res => {
          let data = res.data;
          this.lelang = data;
          this.isLoading = false;
        })
        .catch(e => {
          this.isLoading = false;
          console.log(e);
        });
    },
    deleteLelang(id) {
      this.$buefy.dialog.confirm({
        message: "Hapus lelang?",
        confirmText: "Hapus",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          this.isLoading = true;
          this.axios
            .delete(`/api/admin/bidding`, {
              params: {
                access_token: this.$store.state.login.token,
                idItem: id
              }
            })
            .then(res => {
              this.$buefy.toast.open({
                duration: 1000,
                message: res.data.message,
                type: "is-success",
                position: "is-top"
              });
              this.isLoading = false;
              this.getLelang();
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
        }
      });
    },

    filter: debounce(function(event) {
      this.getLelang();
    }, 500)
  },
  created() {
    this.getLelang();
  }
};
</script>