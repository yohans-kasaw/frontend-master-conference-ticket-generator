import { createRouter, createWebHistory } from 'vue-router'
import TicketConfirmationView from '@src/views/TicketConfirmationView.vue'
import TicketGenView from '@src/views/TicketGenView.vue'
import { useUserInfoStore } from '@src/store/store.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: TicketGenView,
            name: 'TicketRegister',
        },
        {
            path: '/confirm',
            name: 'TicketConfirm',
            component: TicketConfirmationView,
        },
    ],
})

router.beforeEach((to, from, next) => {
    if (
        from.name != 'TicketConfirm' &&
        to.name == 'TicketRegister' &&
        checkRegistered()
    ) {
        next({ name: 'TicketConfirm' })
    } else {
        next()
    }
})

function checkRegistered() {
    return useUserInfoStore().userInfo.isRegistered
}

export default router
