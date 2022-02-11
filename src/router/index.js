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
    path: '/playground',
    name: 'Playground',
    meta: {
      title: 'Playground',
    },
    component: () => import(/* webpackChunkName: "playground" */ '../views/Playground.vue'),
    children: [
    ],
  },
  {
    path: '/playground/:modelSlug',
    name: 'Model',
    meta: {
      title: (route) => `Playground - ${route.params.modelSlug}`,
    },
    component: () => import(/* webpackChunkName: "model" */ '../views/Model.vue'),
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
  next();
});

export default router;
