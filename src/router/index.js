import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Items from '@/components/pages/Items';
import TableContents from '@/components/TableContents';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/items',
      name: 'Items',
      component: Items,
      children: [
        {
          path: 'types/:name',
          component: TableContents,
        },
      ],
    },
  ],
});
