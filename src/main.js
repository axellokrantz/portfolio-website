import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import Projects from './views/app-projects.vue';
import About from './views/app-about.vue';
import Contact from './views/app-contact.vue';
import Project1 from './views/project-1.vue';
import Project2 from './views/project-2.vue';
import Project3 from './views/project-3.vue';
import Project4 from './views/project-4.vue';
import Project5 from './views/project-5.vue';
import Project6 from './views/project-6.vue';

const routes = [
  { path: '/', component: Projects },
  { path: '/projects', component: Projects },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/project-1', component: Project1 },
  { path: '/project-2', component: Project2 },
  { path: '/project-3', component: Project3 },
  { path: '/project-4', component: Project4 },
  { path: '/project-5', component: Project5 },
  { path: '/project-6', component: Project6 },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  const app = createApp(App);
  app.use(router);
  app.mount('#app');