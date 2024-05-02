<template>
    <div class="space" />
    <div class="space" />
    <footer class="transparent">
        <nav class="bottom">
            <NuxtLink class="button transparent vertical" to="./add">
                <i>add_circle</i>
                <span>Add</span>
            </NuxtLink>
            <NuxtLink class="button transparent vertical" to="./update">
                <i>restore_page</i>
                <span>Update</span>
            </NuxtLink>
            <button class="transparent vertical" data-ui="#delete">
                <i>delete</i>
                <span>Delete</span>
            </button>
        </nav>
    </footer>
</template>
