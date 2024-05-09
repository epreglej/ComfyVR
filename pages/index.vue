<script setup>
definePageMeta({
    layout: "index-layout",
});

const search = (query) => {
    return records.filter((record) =>
        record.applicationName.toLowerCase().includes(query.toLowerCase()),
    );
};

const client = useSupabaseClient();
const searchQuery = ref();
const filteredRecords = ref();

let records = [];
try {
    const { data, error } = await client.from("applications").select("*");

    if (error) {
        console.error("Error during insertion:", error);
    } else {
        records = data;
    }
} catch (error) {
    console.error("Error:", error);
}

for (let record of records) {
    record.applicationLink = "./ratings/" + record.id;
}

// Watch for changes in searchQuery and update filteredRecords
watch(searchQuery, (newSearchQuery) => {
    filteredRecords.value = search(newSearchQuery);
    console.log(filteredRecords.value);
});
</script>

<template>
    <div class="center-align">
        <article
            class="top-margin medium-elevate medium-width center center-align middle-align surface"
        >
            <h1 class="freeman-regular">comfy.vr</h1>
        </article>

        <article
            class="medium top-margin medium-elevate medium-width center surface"
        >
            <div
                class="field large prefix round fill small-elevate vertical-margin medium-margin"
            >
                <i class="front">search</i>
                <input
                    v-model="searchQuery"
                    class="primary-hover"
                    type="text"
                    placeholder="Search..."
                />
            </div>

            <div class="small-divider" />

            <div
                v-if="!filteredRecords"
                v-for="record in records"
                class="bottom-margin small-margin"
                :key="record.id"
            >
                <a
                    class="full-width vertical-padding small-padding primary-hover"
                    :href="record.applicationLink"
                >
                    <i class="extra">
                        <img class="" :src="record.applicationIconLink" />
                    </i>
                    <span class="large-text left-margin small-margin">{{
                        record.applicationName
                    }}</span>
                </a>
            </div>

            <div
                v-else
                v-for="record in filteredRecords"
                class="bottom-margin small-margin"
                :key="record.id"
            >
                <a
                    class="full-width vertical-padding small-padding primary-hover"
                    :href="record.applicationLink"
                >
                    <i class="extra">
                        <img class="" :src="record.applicationIconLink" />
                    </i>
                    <span class="large-text left-margin small-margin">{{
                        record.applicationName
                    }}</span>
                </a>
            </div>
        </article>

        <div class="center top-margin">
            <a href="./login" class="small-text primary-text primary-hover"
                >administrator login</a
            >
        </div>
    </div>
</template>
