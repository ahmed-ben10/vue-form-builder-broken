import {RouteRecordRaw} from 'vue-router';
import TemplateEditor from './views/TemplateEditor.vue'

export const routes: RouteRecordRaw[] = [
    {
        name: 'home',
        path: '/app',
        component: TemplateEditor,
    },
];