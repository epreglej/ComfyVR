<script setup lang="ts">
definePageMeta({
    middleware: ["redirect-to-locale"],
});

const locale = useCookie("locale", {
    sameSite: "none",
    secure: true,
});
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
