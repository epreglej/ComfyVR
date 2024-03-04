<script setup lang="ts">
const locale = useCookie("locale");
locale.value = englishLanguage.code;
</script>

<template>
    <div>
        <Header></Header>
    </div>
</template>
