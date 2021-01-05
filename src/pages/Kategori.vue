<template>
  <div>
    <section class="container">
      <div class="section">
        <div class="columns">
          <div class="column">
            <p class="title">Semua Kategori</p>
          </div>
          <div class="column has-text-right">
            <b-button @click="prompt()" icon-left="plus" type="is-info">Tambah</b-button>
          </div>
        </div>
        <b-table :data="category" :loading="isLoading">
          <p slot="empty" v-if="!isLoading" class="has-text-grey has-text-centered">Data tidak ditemukan</p>
          <b-table-column
            label="Kategori"
            centered
            v-slot="props"
            class="is-capitalized"
          >{{props.row.name}}</b-table-column>

          <b-table-column label="Action" centered v-slot="props">
            <b-button
              size="is-small"
              icon-left="pencil"
              type="is-info"
              @click="prompt(props.row.name)"
            >Edit</b-button>
            <b-button
              size="is-small"
              icon-left="delete"
              type="is-danger"
              @click="deleteCategory(props.row.name)"
            >Hapus</b-button>
          </b-table-column>
        </b-table>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      category: []
    };
  },
  methods: {
    getCategory() {
      this.isLoading = true;
      this.axios
        .get("/user/category", {
          params: {
            access_token: this.$store.state.login.token
          }
        })
        .then(res => {
          let data = res.data;
          this.category = data;
          this.isLoading = false;
        })
        .catch(e => {
          this.isLoading = false;
          console.log(e);
        });
    },
    prompt(name) {
      this.$buefy.dialog.prompt({
        message: `Nama Kategori`,
        inputAttrs: {
          placeholder: "contoh. Pakaian Pria",
          value: name || ""
        },
        confirmText: "Kirim",
        cancelText: "Batalkan",
        trapFocus: true,
        onConfirm: value => {
          this.isLoading = true;
          let api;
          if (name) {
            api = this.axios.put(
              "/api/admin/category",
              {},
              {
                params: {
                  access_token: this.$store.state.login.token,
                  name: name,
                  newName: value
                }
              }
            );
          } else {
            api = this.axios.post(
              "/api/admin/category",
              {
                name: value
              },
              {
                params: {
                  access_token: this.$store.state.login.token
                }
              }
            );
          }
          api
            .then(res => {
              this.$buefy.toast.open({
                duration: 1000,
                message: res.data.message,
                type: "is-success",
                position: "is-top"
              });
              this.isLoading = false;
              this.getCategory();
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
    deleteCategory(name) {
      this.$buefy.dialog.confirm({
        message: "Hapus Kategori?",
        confirmText: "Hapus",
        type: "is-danger",
        hasIcon: true,
        onConfirm: () => {
          this.isLoading = true;
          this.axios
            .delete(`/api/admin/category`, {
              params: {
                access_token: this.$store.state.login.token,
                name: name
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
              this.getCategory();
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
    }
  },
  created() {
    this.getCategory();
  }
};
</script>