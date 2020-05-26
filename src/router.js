import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    name: 'home',
    component: () => import('./view/Home'),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'userHelp',
    component: () => import('./view/UserGuide/userHelp.vue'),
    meta: {
      title: '用户手册'
    }
  },
  {
    name: 'doc',
    component: () => import('./view/UserGuide/doc.vue'),
    meta: {
      title: '资料'
    }
  },
  {
    name: 'faq',
    component: () => import('./view/UserGuide/FAQ.vue'),
    meta: {
      title: 'FAQ'
    }
  },
  {
    name: 'vantCheckBoxFor',
    component: () => import('./components/customCompontent/vantCheckBoxFor.vue'),
    meta: {
      title: 'vantCheckBoxFor'
    }
  },
  {
    name: 'listShow',
    component: () => import('./view/Test/index.vue'),
    meta: {
      title: 'listShow'
    }
  },
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
