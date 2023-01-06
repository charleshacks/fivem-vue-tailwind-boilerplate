import Home    from '../pages/Home.vue';
import Example from '../pages/Example.vue';

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/example',
        name: 'Example',
        component: Example,
    },
];
