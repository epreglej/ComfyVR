<script setup>
const route = useRoute();
const client = useSupabaseClient();

let record;

try {
    const { data, error } = await client
        .from("applications")
        .select("*")
        .eq("id", route.params.id);

    if (error) {
        console.error("Error during insertion:", error);
    } else {
        console.log("Record successfully read:", data);
        record = data[0];
    }
} catch (error) {
    console.error("Error:", error);
}

provide("record", record);
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
