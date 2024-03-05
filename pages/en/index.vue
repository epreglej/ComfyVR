<script setup lang="ts">
const { $locally } = useNuxtApp();
onBeforeMount(() => {
    $locally.setItem("language", englishLanguage.code);
});
</script>

<template>
    <div>
        <Header></Header>
    </div>
</template>
