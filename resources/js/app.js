import './bootstrap'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
    resolve: async name => {
        // const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        // return pages[`./Pages/${name}.vue`]
        // ajustando o caminho para encontrar as paginas vue no diretorio: /resources/Pages/
        const pages = import.meta.glob('./pages/**/*.vue', { eager: true })
        return pages[`./pages/${name}.vue`]
    },
        setup({ el, App, props, plugin }) {
                createApp({ render: () => h(App, props) })
                    .use(plugin)
                    .mount(el)
            },
})
