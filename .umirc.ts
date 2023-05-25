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
      path: '/Layouts',
      component: './',
    },

    {
      path: '/Diplom',
      component: './Diplom',
    },
    {
      path: '/Diplom/create',
      component: './Diplom/create',
    },
    {
      path: '/Diplom/edit/:id',
      component: './Diplom/edit/[id]',
    },


    {
      path: '/Direction',
      component: './Direction',
    },
    {
      path: '/Direction/create',
      component: './Direction/create',
    },
    {
      path: '/Direction/edit/:id',
      component: './Direction/edit/[id]',
    },


    {
      path: '/Position',
      component: './Position',
    },
    {
      path: '/Position/create',
      component: './Position/create',
    },
    {
      path: '/Position/edit/:id',
      component: './Position/edit/[id]',
    },




    {
      path: '/Auth',
      component: './Auth'
    },
    {
      path: '/register',
      component: './register'
    },
    {
      path: '/userEdit',
      component: './userEdit',
    },
    {
      path: '/userEdit2',
      component: './userEdit2',
    },
    
  ], 
  npmClient: 'npm', 
});

