import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
    srcDir: 'src/',
    devtools: {
        enabled: false,
    },
    ssr: true,
    modules: [
        '@vueuse/nuxt',
        '@nuxt/image',
        '@nuxt/eslint',
        'nuxt-bootstrap-icons',
        'nuxt-vitalizer',
        '@builder.io/sdk-vue/nuxt',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/abstracts" as *;',
                },
            },
        },
        plugins: [svgLoader()],
        optimizeDeps: {
            include: [
                'vue', '@vueuse/core', 'bootstrap', '@popperjs/core',
            ],
            exclude: ['@nuxt/kit'],
        },
        vue: {
            script: {
                propsDestructure: true,
            },
        },
    },
    components: {
        dirs: [
            {
                path: '~/components',
                global: true,
                pathPrefix: false,
            },
        ],
    },

    image: {
        provider: 'ipx',
        ipx: {
            maxAge: 60 * 60 * 24 * 30, // 30 days
        },
        dir: 'assets',
        domains: ['localhost'],
        format: [
            'webp', 'jpg', 'jpeg', 'png',
        ],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
        },
        quality: 90,
    },
})
