<script setup>
definePageMeta({
    layout: "medium-layout",
    name: "Applications",
});
</script>

<template>
    <div class="main responsive page right active">
        <div>
            <div class="tabs">
                <a href="#" class="active" data-ui="#add">
                    <i>home</i>
                    <span>Add a new app</span>
                </a>
                <a href="#" data-ui="#update">
                    <i>home</i>
                    <span>Update an existing app</span>
                </a>
            </div>
            <div id="add" class="page padding active left">
                <h5>Tab 1</h5>
            </div>
            <div id="update" class="page padding right">
                <h5>Tab 2</h5>
            </div>
        </div>
    </div>
</template>
