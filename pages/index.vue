<script setup lang="ts">
const { $locally } = useNuxtApp();

onBeforeMount(() => {
    if ($locally.getItem("language") == croatianLanguage.code) {
        navigateTo({ path: "/hr" }, { external: true });
    } else {
        navigateTo({ path: "/en" }, { external: true });
    }
});
</script>

<template>
    <div>
        <Header />
    </div>
</template>
