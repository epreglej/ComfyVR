<script setup lang="ts">
const locale = useCookie("locale");
locale.value = croatianLanguage.code;
</script>

<template>
    <div>
        <Header></Header>
    </div>
</template>
