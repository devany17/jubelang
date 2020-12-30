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
              <b-input placeholder="Search..." type="search" rounded icon="magnify"></b-input>
            </b-field>
          </div>
        </div>
        <b-table :data="member" :loading="isLoading">
          <b-table-column label="Produk" centered v-slot="props">{{props.row.product}}</b-table-column>
          <b-table-column label="Kategori" centered v-slot="props">{{props.row.category}}</b-table-column>
          <b-table-column label="Fullname" centered v-slot="props">{{props.row.name}}</b-table-column>
          <b-table-column label="Bid" centered v-slot="props">{{props.row.bid}}</b-table-column>
          <b-table-column label="Status" centered v-slot="props">{{props.row.status}}</b-table-column>
          <b-table-column label="Action" centered>
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
          product: "Jam Tangan",
          category: "Accesories",
          name: "Devani",
          bid: "200.000.000",
          status: "open"
        },
        {
          product: "Jam Tangan",
          category: "Accesories",
          name: "Devani",
          bid: "200.000.000",
          status: "open"
        },
        {
          product: "Jam Tangan",
          category: "Accesories",
          name: "Devani",
          bid: "200.000.000",
          status: "open"
        },
        {
          product: "Jam Tangan",
          category: "Accesories",
          name: "Devani",
          bid: "200.000.000",
          status: "open"
        },
        {
          product: "Jam Tangan",
          category: "Accesories",
          name: "Devani",
          bid: "200.000.000",
          status: "open"
        }
      ]
    };
  }
};
</script>