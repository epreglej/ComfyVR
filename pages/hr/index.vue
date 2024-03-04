<script setup lang="ts">
const locale = useCookie("locale", {
    sameSite: "strict",
    secure: true,
});
locale.value = croatianLanguage.code;
</script>

<template>
    <div>
        <Header></Header>
    </div>
</template>
