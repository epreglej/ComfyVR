<script setup lang="ts">
const { $locally } = useNuxtApp();
const route = useRoute();

console.log($locally.getItem("language") == croatianLanguage.code);
console.log(route.path);
if ($locally.getItem("language") == croatianLanguage.code) {
    console.log("Redirecting to croatian page!");
    await navigateTo("/hr");
}
</script>

<template>
    <div>
        <Header />
    </div>
</template>
