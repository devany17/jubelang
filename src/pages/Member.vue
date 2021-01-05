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
              <b-input
                placeholder="Search..."
                type="search"
                @input="filter()"
                v-model="search"
                @keypress.native.enter.prevent="filter()"
                rounded
                icon="magnify"
              ></b-input>
            </b-field>
          </div>
        </div>
        <b-table :data="member" :loading="isLoading">
          <p slot="empty" v-if="!isLoading" class="has-text-grey has-text-centered">Data tidak ditemukan</p>
          <b-table-column label="Username" centered v-slot="props">{{props.row.username}}</b-table-column>
          <b-table-column label="Fullname" centered v-slot="props">{{props.row.fullName}}</b-table-column>
          <b-table-column label="Email" centered v-slot="props">{{props.row.email}}</b-table-column>
          <b-table-column label="Status" centered v-slot="props">
            <b-tag
              class="is-capitalized"
              :type="`is-${props.row.status == 'active'?'success':'danger'} is-light`"
            >{{props.row.status}}</b-tag>
          </b-table-column>
          <b-table-column label="Action" centered v-slot="props">
            <b-button
              size="is-small"
              icon-left="alert"
              :type="props.row.status == 'active'?'is-warning':'is-light'"
              @click="blockMember(props.row.idUser)"
            >{{props.row.status == 'active'?'Blokir':'Buka Blokir'}}</b-button>
            <!-- <b-button size="is-small" icon-left="delete" type="is-danger">Hapus</b-button> -->
          </b-table-column>
        </b-table>
        <nav class="pagination" role="navigation" aria-label="pagination">
          <template>
            <b-button
              class="pagination-previous"
              icon-right="chevron-left"
              :disabled="isLoading || page <= 0 "
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
export default {
  data() {
    return {
      isLoading: false,
      page: 0,
      total: 0,
      search: "",
      member: []
    };
  },
  methods: {
    getMember() {
      this.isLoading = true;
      this.axios
        .get("/api/admin/member", {
          params: {
            access_token: this.$store.state.login.token,
            page: this.page,
            search: this.search
          }
        })
        .then(res => {
          let data = res.data;
          this.member = data.content;
          this.total = data.totalPages;
          this.isLoading = false;
        })
        .catch(e => {
          this.isLoading = false;
          console.log(e);
        });
    },
    blockMember(id) {
      this.isLoading = true;
      this.axios
        .put(
          "/api/admin/member/block",
          {},
          {
            params: {
              access_token: this.$store.state.login.token,
              idUser: id
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
          this.getMember();
          this.isLoading = false;
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
    },
    next() {
      if (this.page < this.total - 1) {
        this.page++;
        this.getMember();
      }
    },
    previous() {
      this.page--;
      this.getMember();
    },
    filter: debounce(function(event) {
      this.getMember();
    }, 500)
  },
  created() {
    this.getMember();
  }
};
</script>