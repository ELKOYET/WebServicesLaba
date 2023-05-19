import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
   /* layout: {
    title: '@umijs/max',
  }, */
  routes: [
    {
      path: '/',
      component: './Author',
    },
    {
      path: '/Author',
      component: './Author',
    },
    {
      path: '/Author/create',
      component: './Author/create',
    },
    {
      path: '/Author/edit/:id',
      component: './Author/edit/[id]',
    },
    {
      path: '/Auth',
      component: './Auth'
    }
    
  ], 
  npmClient: 'npm', 
});

