<script setup>
const client = useSupabaseClient();

definePageMeta({
    name: "Log out",
});

async function logout() {
    try {
        const { error } = await client.auth.signOut();
        if (error) {
            console.error("Logout error!");
        } else {
            console.log("Logout successful!");
            await navigateTo("/login");
        }
    } catch (error) {
        console.error("Unexpected error:", error);
    }
}

logout();
</script>

<template>Logging out...</template>
