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
        <b-table :data="member" :loading="isLoading">
          <b-table-column label="Kategori" centered v-slot="props">{{props.row.category}}</b-table-column>

          <b-table-column label="Action" centered>
            <b-button size="is-small" icon-left="pencil" type="is-info">Edit</b-button>
            <b-button size="is-small" icon-left="delete" type="is-danger">Hapus</b-button>
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
      member: [
        {
          category: "Pakaian Pria"
        },

        {
          category: "Pakaian Pria"
        },

        {
          category: "Pakaian Pria"
        },

        {
          category: "Pakaian Pria"
        },

        {
          category: "Pakaian Pria"
        },

        {
          category: "Pakaian Pria"
        },

        {
          category: "Pakaian Pria"
        }
      ]
    };
  },
  methods: {
    prompt() {
      this.$buefy.dialog.prompt({
        message: `Nama Kategori`,
        inputAttrs: {
          placeholder: "contoh. Pakaian Pria"
        },
        confirmText: "Tambahkan",
        cancelText: "Batalkan",
        trapFocus: true,
        onConfirm: value => this.$buefy.toast.open(`Your name is: ${value}`)
      });
    }
  }
};
</script>