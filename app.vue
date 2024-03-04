<script setup lang="ts">
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
