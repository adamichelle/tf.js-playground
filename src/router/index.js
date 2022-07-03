import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import data from '../data/models';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue'),
  },
  {
    path: '/models',
    name: 'Models',
    meta: {
      title: 'Models',
    },
    component: () => import(/* webpackChunkName: "models" */ '../views/ModelsPage.vue'),
  },
  {
    path: '/playground/:modelSlug',
    name: 'Playground',
    meta: {
      title: 'Playground',
    },
    component: () => import(/* webpackChunkName: "playground" */ '../views/PlaygroundPage.vue'),
    props: true,
    beforeEnter: (to, from, next) => {
      const exists = data.models.find(
        (model) => model.slug === to.params.modelSlug,
      );
      if (exists) {
        next();
      } else {
        next({ name: 'NotFound' });
      }
    },
  },
  {
    path: '/demo',
    name: 'Demo',
    meta: {
      title: 'Demo',
    },
    component: () => import(/* webpackChunkName: "demo" */ '../views/DemoPage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: {
      title: 'NotFound',
    },
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue'),
  },
];

export default function routerFunction({ store }) {
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
