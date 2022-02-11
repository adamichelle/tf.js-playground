import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/Landing.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/models',
    name: 'Models',
    meta: {
      title: 'Models',
    },
    component: () => import(/* webpackChunkName: "models" */ '../views/Models.vue'),
  },
  {
    path: '/playground/:modelSlug',
    name: 'Playground',
    meta: {
      title: 'Playground',
    },
    component: () => import(/* webpackChunkName: "playground" */ '../views/Playground.vue'),
    props: true,
  },
  {
    path: '/demo',
    name: 'Demo',
    meta: {
      title: 'Demo',
    },
    component: () => import(/* webpackChunkName: "demo" */ '../views/Demo.vue'),
  },
];

export default function ({ store }) {
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  router.beforeEach((to, from, next) => {
    const appName = 'tf.js Playground';

    if (to.meta.title) {
      const pageTitle = to.meta.title instanceof Function ? to.meta.title(to) : to.meta.title;
      document.title = `${pageTitle} - ${appName}`;
    } else {
      document.title = appName;
    }

    store.commit('updateNavigationButtonVisibility', { buttonName: 'try-it-out', fullPath: to.fullPath });
    next();
  });

  return router;
}
