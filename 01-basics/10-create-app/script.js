import { defineComponent, createApp } from 'vue';

const App = defineComponent({
    name: 'App',
    setup () {
        const formattedDate = new Date().toLocaleDateString('en-EN', { dateStyle: 'long' })
        return {
            formattedDate,
        }
    },

    template: `<div>Сегодня {{ formattedDate }}</div>`,
})
createApp(App).mount('#app');