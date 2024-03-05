<script setup lang="ts">
const { $locally } = useNuxtApp();
onBeforeMount(() => {
    $locally.setItem("language", croatianLanguage.code);
});
</script>

<template>
    <div>
        <Header></Header>
    </div>
</template>
