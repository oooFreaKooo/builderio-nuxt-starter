<template>
    <div v-if="canShowContent">
        <Content
            :api-key="apiKey"
            :model="model"
            :content="content"
        />
    </div>
    <div v-else>
        Content not Found
    </div>
    <div>
        <NuxtLink to="/">
            Home
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { Content, fetchOneEntry, isPreviewing } from '@builder.io/sdk-vue'

const route = useRoute()

// TO DO: Add your Public API Key here
const apiKey = '6ea055df5e7943089f8644c8cc89c7f9'
const canShowContent = ref(false)
const model = 'page'

const { data: content } = await useAsyncData('builderData', () =>
    fetchOneEntry({
        model,
        apiKey,
        userAttributes: {
            urlPath: route.path,
        },
    }),
)

canShowContent.value = content.value ? true : isPreviewing(route.path)
</script>

<style scoped>
.services-page {
  overflow-x: hidden;
}
</style>
