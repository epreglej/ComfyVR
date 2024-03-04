<script setup lang="ts">
const locale = useCookie("locale", {
    sameSite: "none",
    secure: true,
});

console.log("Redirecting...");

if (locale.value == croatianLanguage.code) {
    navigateTo("/hr");
} else {
    navigateTo("/en");
}
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
