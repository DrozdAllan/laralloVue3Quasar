const routes = [
    {
        path: "/main",
        component: () => import("../views/MainView.vue"),
        name: "main",
    },
    {
        path: "/private",
        component: () => import("../views/PrivateView.vue"),
        name: "private",
    },
    {
        path: "/about",
        component: () => import("../views/AboutView.vue"),
        name: "about",
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: {name: 'main'}
    },
];
export default routes;
