<script setup>
let record = inject("record");
const headerTitle = ref();
headerTitle.value = record.applicationName;
</script>

<template>
    <nav>
        <template v-if="headerTitle === 'Dashboard'">
            <NuxtLink class="transparent circle large">
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
        <h6 class="max left-align">{{ headerTitle }}</h6>
        <NuxtLink to="/logout" class="transparent circle large">
            <i>logout</i>
        </NuxtLink>
    </nav>
</template>
