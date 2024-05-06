<script setup>
const client = useSupabaseClient();

let records = [];

try {
    const { data, error } = await client.from("applications").select("*");

    if (error) {
        console.error("Error during insertion:", error);
    } else {
        console.log("Record successfully read:", data);
        records = data;
    }
} catch (error) {
    console.error("Error:", error);
}

for (let record of records) {
    record.applicationLink = "./ratings/" + record.id + "/comfort";
}
</script>

<template>
    <div v-for="record in records" :key="record.id">
        <NuxtLink
            class="button transparent vertical"
            :to="record.applicationLink"
        >
            <i class="extra">
                <img class="" :src="record.applicationIconLink" />
            </i>
            <span class="large-text">{{ record.applicationName }}</span>
        </NuxtLink>
    </div>
</template>
