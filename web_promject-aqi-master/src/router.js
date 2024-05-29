import { createRouter, createWebHistory } from 'vue-router';

// import HelloWorld from './components/HelloWorld.vue';
import HomePage1 from './components/HomePage1.vue';
import HomePage2 from './components/HomePage2.vue';
import NewLogin from './components/NewLogin.vue';
import MyFront from './components/MyFront.vue';
import MyFront3 from './components/MyFront3.vue';
import ShowTable from './components/ShowTable.vue';
import SignUp from './components/SignUp.vue';
import BG from './components/BG.vue';
import WelcomePage from './components/welcome.vue';
import HistoryPage from './components/HistoryPage.vue';


const routes=[
          
    {
        path: '/login',
        name: 'newlogin',
        component: (NewLogin)
      },
      {
        path: '/front',
        name: 'newFront',
        component: (MyFront)
      },
      {
        path: '/front3',
        name: 'newFront3',
        component: (MyFront3),
        meta: { requiresAuth: true }
      },
      // {
      //   path: '/',
      //   name: 'HelloWorld',
      //   component: (HelloWorld)
      // },
      {
        path: '/hp1',
        name: 'HomePage1',
        component: (HomePage1)
      },
      {

        path: '/HomePage2',
        name: 'HomePage2',
        component: (HomePage2),
      },
      {
        path: '/showtable/:id',
        name: 'ShowTable',
        component: (ShowTable),
      },
      {
         path: '/SignUp',
         name: 'SignUp',
        component: (SignUp),
      },
     {
       path: '/bg',
       name: 'bg',
       component: (BG),
    },
    
    {
     path: '/',
     name: 'WelcomePage',
     component: (WelcomePage),
    },
    {
      path: '/HistoryPage',
      name: 'HistoryPage',
      component: (HistoryPage)
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })
export default router;