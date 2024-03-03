<script setup lang="ts">
const locale = useCookie("locale", {
    sameSite: "strict",
    secure: true,
});

const englishLanguageOptionItem = {
    label: "English",
    icon: "i-circle-flags-uk",
    value: "en",
};

const croatianLanguageOptionItem = {
    label: "Hrvatski",
    icon: "i-circle-flags-hr",
    value: "hr",
};

const languages = [englishLanguageOptionItem, croatianLanguageOptionItem];

var selected = ref(languages[0]);

onMounted(() => {
    if (locale.value) {
        for (let language of languages) {
            if (locale.value == language.value) {
                selected.value = language;
            }
        }
    }
});

watch(selected, (newValue) => {
    // Update the cookie with the new language value
    locale.value = newValue.value;
});
</script>

<template>
    <USelectMenu v-model="selected" :options="languages">
        <template #leading>
            <UIcon
                v-if="selected.icon"
                :name="selected.icon as string"
                class="w-4 h-4 mx-0.5"
            />
        </template>
    </USelectMenu>
</template>
