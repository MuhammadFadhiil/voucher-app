<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://imgbb.com/">
        <img
          src="https://i.ibb.co/R6JgRv9/Screenshot-2022-07-30-112532.png"
          class="me-2"
          height="30"
          loading="lazy"
        />
        <small>Awards Menu</small>
      </a>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" aria-current="page" href="/voucher/list">Home</a>
          <a class="nav-link" href="#">Cards</a>
          <a class="nav-link" href="#">Profile</a>
          <a class="nav-link" href="/voucher">Logout</a>
        </div>
      </div>
    </div>
  </nav>
  <MDBContainer>
    <MDBRow class="align-items-start bg-transparent mb-3" style="height: 100px">
      <MDBCol MDBCol md="6" class="offset-md-3">
        <h4 class="text-center">Awards</h4>
      </MDBCol>
    </MDBRow>

    <!-- list of voucher  -->
    <MDBRow class="align-items-center bg-transparent mb-3" style="height: 100px">
      <MDBCol sm="12">
        <MDBCard class="mb-6" bg="transparent" text="black" v-for="(voucher, index) in vouchers" :key="index">
          <MDBCardImg
            v-bind:src="voucher.images"
            alt="..."
            overlay
            loading="lazy"
          >
            <MDBCardTitle text="end" bg="primary">{{ voucher.type }}</MDBCardTitle>
            <MDBCardText>{{ voucher.point }} poin</MDBCardText>
          </MDBCardImg>
          <h4 class="mt-3">{{ voucher.name }}</h4>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>
<script>
import VoucherService from '../service/VoucherService';
import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBCard, 
  MDBCardTitle, 
  MDBCardText, 
  MDBCardImg,
  } from "mdb-vue-ui-kit";
export default {
  name: "voucher-login",
  components: {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard, 
    MDBCardTitle, 
    MDBCardText, 
    MDBCardImg,
  },
  data() {
    return {
      vouchers: [],
    };
  },
  methods: {
    retrieveVouchers() {
      VoucherService.getVoucher()
        .then((response) => {
          this.vouchers = response.data.data;
          console.log(response.data.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveVouchers();
  },
};
</script>