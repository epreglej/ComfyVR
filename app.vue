<script setup lang="ts">
const locale = useCookie("locale", {
    sameSite: "strict",
    secure: true,
});
</script>

<template>
    <NuxtPage />
</template>
