<template>
    <div class="hello-world">
        <div class="text">
            Hello {{ text }}!
        </div>
        <slot />
    </div>
</template>

<script lang="ts" setup>
defineProps({
    text: {
        type: String,
        required: true,
    },
})
</script>

<style scoped>
.hello-world {
  display: flex;
  flex-direction: column;
}
.text {
  padding: 50px;
}
</style>
