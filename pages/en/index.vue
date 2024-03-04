<script setup lang="ts">
const locale = useCookie("locale", {
    sameSite: "strict",
    secure: true,
});
locale.value = englishLanguage.code;
</script>

<template>
    <div>
        <Header></Header>
    </div>
</template>
