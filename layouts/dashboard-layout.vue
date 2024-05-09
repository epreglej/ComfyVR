<script setup>
let record = { applicationName: "Dashboard" };
provide("record", record);
</script>

<template>
    <main>
        <Header />
        <slot />
    </main>
</template>
