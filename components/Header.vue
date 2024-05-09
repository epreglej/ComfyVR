<script setup>
const user = useSupabaseUser();

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
            <NuxtLink to="/" class="transparent circle large no-margin">
                <i>arrow_back</i>
            </NuxtLink>
        </template>

        <i v-if="record.applicationIconLink" class="extra">
            <img :src="record.applicationIconLink" />
        </i>
        <h6 class="max left-align">{{ headerTitle }}</h6>

        <NuxtLink v-if="user" to="/logout" class="transparent circle large">
            <i>logout</i>
        </NuxtLink>
        <NuxtLink v-else to="/login" class="transparent circle large">
            <i>login</i>
        </NuxtLink>
    </nav>
</template>
