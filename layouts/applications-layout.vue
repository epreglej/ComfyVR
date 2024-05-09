<script setup>
let record = { applicationName: "Edit database" };
provide("record", record);
</script>
<template>
    <main class="responsive">
        <Header />
        <slot />
        <ManagementApplicationsFooter />
    </main>
</template>
