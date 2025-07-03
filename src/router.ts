import {createRouter, createWebHistory} from "vue-router";

export default function initRouter(routes) {

    return createRouter({
        history: createWebHistory(),
        routes: routes,
        linkActiveClass: 'active',
    });
}
