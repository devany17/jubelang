<template>
  <div>
    <section class="container">
      <div class="section">
        <div class="columns">
          <div class="column">
            <p class="title">Member</p>
          </div>
          <div class="column is-4">
            <b-field>
              <b-input placeholder="Search..." type="search" rounded icon="magnify"></b-input>
            </b-field>
          </div>
        </div>
        <b-table :data="member" :loading="isLoading">
          <b-table-column label="Tanggal" centered v-slot="props">{{props.row.date}}</b-table-column>
          <b-table-column label="Email" centered v-slot="props">{{props.row.email}}</b-table-column>
          <b-table-column label="Member" centered v-slot="props">{{props.row.name}}</b-table-column>
          <b-table-column label="Jumlah" centered v-slot="props">{{props.row.total}}</b-table-column>
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
          date: "08/12/2020",
          total: "200.000",
          name: "Devani",
          email: "devani@mail.com",
          status: "active"
        },
       
      ]
    };
  }
};
</script>