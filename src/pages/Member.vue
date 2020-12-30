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
          <b-table-column label="Tanggal Daftar" centered v-slot="props">{{props.row.date}}</b-table-column>
          <b-table-column label="Username" centered v-slot="props">{{props.row.username}}</b-table-column>
          <b-table-column label="Fullname" centered v-slot="props">{{props.row.name}}</b-table-column>
          <b-table-column label="Email" centered v-slot="props">{{props.row.email}}</b-table-column>
          <b-table-column label="Status" centered v-slot="props">{{props.row.status}}</b-table-column>
          <b-table-column label="Action" centered>
            <b-button size="is-small" icon-left="alert" type="is-warning">Blokir</b-button>
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
          username: "asw798798",
          name: "Devani",
          email: "devani@mail.com",
          status: "active"
        },
        {
          date: "08/12/2020",
          username: "asw798798",
          name: "Devani",
          email: "devani@mail.com",
          status: "active"
        },
        {
          date: "08/12/2020",
          username: "asw798798",
          name: "Devani",
          email: "devani@mail.com",
          status: "active"
        },
        {
          date: "08/12/2020",
          username: "asw798798",
          name: "Devani",
          email: "devani@mail.com",
          status: "active"
        },
        {
          date: "08/12/2020",
          username: "asw798798",
          name: "Devani",
          email: "devani@mail.com",
          status: "active"
        },
        {
          date: "08/12/2020",
          username: "asw798798",
          name: "Devani",
          email: "devani@mail.com",
          status: "active"
        },
        {
          date: "08/12/2020",
          username: "asw798798",
          name: "Devani",
          email: "devani@mail.com",
          status: "active"
        },
        {
          date: "08/12/2020",
          username: "asw798798",
          name: "Devani",
          email: "devani@mail.com",
          status: "active"
        },
        {
          date: "08/12/2020",
          username: "asw798798",
          name: "Devani",
          email: "devani@mail.com",
          status: "active"
        },
        {
          date: "08/12/2020",
          username: "asw798798",
          name: "Devani",
          email: "devani@mail.com",
          status: "active"
        },
        {
          date: "08/12/2020",
          username: "asw798798",
          name: "Devani",
          email: "devani@mail.com",
          status: "active"
        }
      ]
    };
  }
};
</script>