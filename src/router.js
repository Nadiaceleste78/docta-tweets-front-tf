import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home';
import Feed from '@/views/Feed';
import PostSingle from '@/views/PostSingle';
import Login from '@/views/Login';
import Perfil from '@/views/Perfil';
import Registro from '@/views/Registro';


Vue.use(Router);

export default new Router ({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {logueado: true },
        },
        {
            path: '/feed/:username',
            name: 'feed',
            component: Feed,
            meta: { logueado: true },
        },
        {
            path: '/post/:postID',
            name: 'post',
            component: PostSingle,
            meta: { logueado: true },
        },
        {
            path: '/perfil',
            name: 'perfil',
            component: Perfil,
            meta: { logueado: true },
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/registro',
            name: 'registro',
            component: Registro,
        },
        {
            path: '*',
            name: '404',
            component: Home,
            meta: { logueado: true },
        },
    ]
})