import http from "../http-common";

class VoucherService {
    checkUser(email) {
        return http.get(`/user/${email}`);
    }
    getVoucher() {
        return http.get(`/voucher`);
    }
}
export default new VoucherService();