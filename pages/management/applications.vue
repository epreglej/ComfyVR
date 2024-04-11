<script setup>
definePageMeta({
    layout: "medium-layout",
    name: "Applications",
});
</script>

<template>
    <div class="page right responsive active">
        <div class="horizontal-margin">
            <div id="add" class="page padding active left">
                <h5>Tab 1</h5>
            </div>
            <div id="update" class="page padding bottom">
                <h5>Tab 2</h5>
            </div>
        </div>
    </div>
    <nav class="bottom s">
        <NuxtLink data-ui="#add">
            <i>add</i>
            <span>Add</span>
        </NuxtLink>
        <NuxtLink data-ui="#update">
            <i>refresh</i>
            <span>Update</span>
        </NuxtLink>
        <a>
            <i>delete</i>
            <span>Delete</span>
        </a>
    </nav>
</template>
