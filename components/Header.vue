<script>
export default {
    computed: {
        currentPageName() {
            return this.$route.name;
        },
    },
};
</script>

<template>
    <nav>
        <template v-if="currentPageName === 'Dashboard'">
            <NuxtLink class="transparent circle large s">
                <i>home</i>
            </NuxtLink>
        </template>
        <template v-else>
            <NuxtLink
                to="/dashboard"
                class="transparent circle large no-margin"
            >
                <i>arrow_back</i>
            </NuxtLink>
        </template>
        <h6 class="max left-align">{{ currentPageName }}</h6>
        <NuxtLink to="/logout" class="transparent circle large">
            <i>logout</i>
        </NuxtLink>
    </nav>
</template>
