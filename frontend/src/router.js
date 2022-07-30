import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    name: "/",
    redirect: "/voucher",
  },
  {
    path: "/voucher",
    name: "voucher",
    component: () => import("./components/Voucher")
  },
  {
    path: "/voucher/list",
    name: "voucher-list",
    component: () => import("./components/VoucherList")
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;