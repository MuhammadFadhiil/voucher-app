<template>
  <div class="p-5 text-center">
    <MDBRow class="align-items-center bg-light mb-3" style="height: 100px">
      <MDBCol sm="12">
        <form>
          <a href="https://imgbb.com/"><img src="https://i.ibb.co/gr94Dkw/Screenshot-2022-07-28-194954.png" alt="Screenshot-2022-07-28-194954" border="0" class="mb-3"></a>
          <h4 class="mb-3">Enter your email address to sign and continue</h4>
          <MDBInput
            class="w-50"
            type="email"
            label="Email Address"
            id="form1Email"
            v-model="email"
            wrapperClass="mb-4"
          />
          <!-- Validation if email not exists -->
          <div v-if="userStatus == false">
             <p class="text-danger">
              Email Address is not exists
            </p>
          </div>
          <!-- Submit button -->
          <MDBBtn color="dark" type="button" @click="checkUser">Sign In</MDBBtn>
        </form>
      </MDBCol>
    </MDBRow>
  </div>
</template>
<script>
import VoucherService from '../service/VoucherService';
import { MDBInput, MDBBtn, MDBRow, MDBCol } from "mdb-vue-ui-kit";
export default {
  name: "voucher-login",
  components: {
    MDBInput,
    MDBBtn,
    MDBRow,
    MDBCol
  },
  data() {
    return {
      userStatus: null,
      email: "",
    };
  },
  methods: {
    checkUser() {
      VoucherService.checkUser(this.email)
        .then(response => {
          this.userStatus = response.data.success;
          console.log(response.data.success);
          if (this.userStatus) {
            this.$router.push('/voucher/list'); 
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
  }
};
</script>