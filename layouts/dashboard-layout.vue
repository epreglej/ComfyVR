<script setup>
let record = { applicationName: "Dashboard" };
provide("record", record);
</script>

<template>
    <body class="">
        <main class="responsive">
            <Header />
            <slot />
        </main>
    </body>
</template>
