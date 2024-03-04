<script setup lang="ts">
const locale = useCookie("locale", {
    sameSite: "none",
    secure: true,
});
</script>

<template>
    <NuxtPage />
</template>
