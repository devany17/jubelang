<template>
  <div>
    <section class="container">
      <div class="section">
        <div class="columns">
          <div class="column">
            <p class="title">Transaksi</p>
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
        <b-table :data="transaksi" :loading="isLoading">
          <p slot="empty" v-if="!isLoading" class="has-text-grey has-text-centered">Data tidak ditemukan</p>
          <b-table-column label="Tanggal" centered v-slot="props">{{props.row.tanggal}}</b-table-column>
          <b-table-column label="Email" centered v-slot="props">{{props.row.email}}</b-table-column>
          <b-table-column label="ID Transaksi" centered v-slot="props">{{props.row.idTransaction}}</b-table-column>
          <b-table-column label="Status" centered v-slot="props">{{props.row.status}}</b-table-column>
          <b-table-column label="Jumlah" v-slot="props" numeric>
            <numeric :value="props.row.jumlah" />
          </b-table-column>
          <b-table-column label="Action" centered v-slot="props">
            <b-button
              size="is-small"
              icon-left="delete"
              type="is-danger"
              @click="deleteTransaction(props.row.idTransaction)"
            >Hapus</b-button>
          </b-table-column>
        </b-table>
        <nav class="pagination" role="navigation" aria-label="pagination">
          <template>
            <b-button
              class="pagination-previous"
              icon-right="chevron-left"
              :disabled="isLoading ||page <= 0"
              @click="previous"
            />
            <b-button
              class="pagination-next"
              :disabled="isLoading ||page >= total-1"
              icon-right="chevron-right"
              @click="next"
            />
          </template>
          <p class="pagination-list has-text-grey is-hidden-mobile">Page {{page+1}}</p>
        </nav>
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
      transaksi: []
    };
  },
  methods: {
    getTransaksi() {
      this.isLoading = true;
      this.axios
        .get("/api/admin/transaction", {
          params: {
            access_token: this.$store.state.login.token,
            page: this.page,
            search: this.search
          }
        })
        .then(res => {
          let data = res.data;
          this.transaksi = data.content;
          this.total = data.totalPages;
          this.isLoading = false;
        })
        .catch(e => {
          this.isLoading = false;
          console.log(e);
        });
    },
    deleteTransaction(id) {
      this.$buefy.dialog.confirm({
        message: "Hapus transaksi?",
        confirmText: "Hapus",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          this.isLoading = true;
          this.axios
            .delete(
              `/api/admin/transaction`,
              {
                params: {
                  access_token: this.$store.state.login.token,
                  idTransaction: id
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
              this.isLoading = false;
              this.getTransaksi();
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
    next() {
      if (this.page < this.total - 1) {
        this.page++;
        this.getTransaksi();
      }
    },
    previous() {
      this.page--;
      this.getTransaksi();
    },
    filter: debounce(function(event) {
      this.getTransaksi();
    }, 500)
  },
  created() {
    this.getTransaksi();
  }
};
</script>