import { createRouter, createWebHistory} from 'vue-router'
import TicketConfirmationView from '@src/views/TicketConfirmationView.vue'
import TicketGenView from '@src/views/TicketGenView.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: TicketGenView,
        },
        {
            path: '/confirm',
            name: 'TicketConfirm',
            component: TicketConfirmationView,
        },
    ],
})
