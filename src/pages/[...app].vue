<template>
    <div id="home">
        <div>Hello world from your Vue project. Below is Builder Content:</div>

        <div v-if="content || isPreviewing()">
            <div>
                page title:
                {{ content?.data?.title || 'Unpublished' }}
            </div>
            <Content
                model="page"
                :content="content"
                :api-key="BUILDER_PUBLIC_API_KEY"
                :custom-components="REGISTERED_COMPONENTS"
            />
        </div>
        <div v-else>
            Content not Found
        </div>
    </div>
</template>

<script setup>
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue'
import HelloTest from '@/components/HelloTest.vue'

const REGISTERED_COMPONENTS = [
    {
        component: HelloTest,
        name: 'MyFunComponent',
        canHaveChildren: true,
        inputs: [
            {
                name: 'text',
                type: 'string',
                defaultValue: 'World',
            },
        ],
    },
]

const BUILDER_PUBLIC_API_KEY = '6ea055df5e7943089f8644c8cc89c7f9'

const route = useRoute()

// fetch builder content data
const { data: content } = await useAsyncData(`builderData-page-${route.path}`, () =>
    fetchOneEntry({
        model: 'page',
        apiKey: BUILDER_PUBLIC_API_KEY,
        userAttributes: {
            urlPath: route.path,
        },
    }),
)
</script>
