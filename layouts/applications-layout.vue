<script setup>
let record = { applicationName: "Edit database" };
provide("record", record);
</script>
<template>
    <main>
        <Header />
        <slot />
        <ManagementApplicationsFooter />
    </main>
</template>
