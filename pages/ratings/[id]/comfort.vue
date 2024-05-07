<script setup>
definePageMeta({
    layout: "ratings-layout",
    name: "Comfort",
});

const route = useRoute();
const client = useSupabaseClient();

const isDialogEyesVisible = ref(false);
const isDialogArmsVisible = ref(false);

let record = null;

// try {
//     const { data, error } = await client
//         .from("applications")
//         .select("*")
//         .eq("id", route.params.id);

//     if (error) {
//         console.error("Error during insertion:", error);
//     } else {
//         console.log("Record successfully read:", data);
//         record = data[0];
//     }
// } catch (error) {
//     console.error("Error:", error);
// }

//calculateComfortRating();

function toggleDialog(dialogRef) {
    dialogRef.value = !dialogRef.value;
}

function closeAllDialogs() {
    isDialogEyesVisible.value = false;
    isDialogArmsVisible.value = false;
}

/*
function calculateComfortRating() {
    // eyes, ears, head, arms, legs
    const rating = [4, 4, 4, 4, 4];

    Object.entries(record).forEach(([key, value]) => {
        if (
            key === "id" ||
            key === "applicationName" ||
            key === "applicationIconLink"
        ) {
        } else if (key === "cameraMovement") {
        } else if (key === "cameraMovementChoppy") {
            if (value === "yes") {
                rating[0] = rating[0] - 1;
                rating[1] = rating[1] - 1;
            }
        } else if (key === "cameraMovementNoAlternativeMethods") {
            if (value === "yes") {
                rating[0] = rating[0] - 1;
            }
        } else if (key === "cameraMovementUnpredictable") {
            rating[0] = rating[0] - 1;
            rating[1] = rating[1] - 1;
        }
    });
}*/

function generateRandomData(length, min, max) {
    const data = [];
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}
</script>

<template>
    <div class="main responsive right page active center-align">
        <!-- <i class="extra">
            <img class="" :src="record.applicationIconLink" />
        </i>
        <span class="large-text">{{ record.applicationName }}</span> -->
        <span>Minecraft</span>

        <article class="medium no-elevate surface">
            <div class="absolute center">
                <div class="stickman-wrapper">
                    <NuxtLink class="head" to="./head"></NuxtLink>
                    <NuxtLink class="torso" to="./stomach"></NuxtLink>
                    <NuxtLink
                        href="#"
                        class="leftarm"
                        data-ui="#leftarm-dialog"
                    ></NuxtLink>
                    <div class="rightarm"></div>
                    <div class="leftleg"></div>
                    <NuxtLink
                        href="#"
                        class="rightleg"
                        data-ui="#rightleg-dialog"
                    ></NuxtLink>
                </div>
            </div>
        </article>

        <table class="top-margin large-margin center-align large-width center">
            <tbody>
                <tr>
                    <td class="large-text bold">Comfort</td>
                    <td class="large-text bold">Accessibility</td>
                    <td class="large-text bold">Safety</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>2</td>
                    <td>4</td>
                </tr>
            </tbody>
        </table>

        <div class="overlay blur"></div>

        <dialog id="leftarm-dialog">
            <h5>Custom overlay</h5>
            <div>Some text here</div>
            <nav class="right-align no-space">
                <button class="transparent link" data-ui="#leftarm-dialog">
                    Close
                </button>
            </nav>
        </dialog>

        <!-- <div
            v-if="isDialogEyesVisible || isDialogArmsVisible"
            id="overlay-blur"
            class="overlay blur active"
        ></div>

        <dialog
            v-if="isDialogEyesVisible"
            id="dialog-eyes"
            class="active center middle small-width"
        >
            <h6 class="center-align bottom-margin">Detailed information</h6>
            <div class="vertical-margin horizontal-margin horizontal-padding">
                <p>Must use eyes</p>
                <p>Color go bright, eye hurt, ouch</p>
                <p>Must use eyes</p>
                <p>Color go bright, eye hurt, ouch</p>
                <p>Must use eyes</p>
                <p>Color go bright, eye hurt, ouch</p>
            </div>
            <nav class="middle-align no-space">
                <button class="transparent link" @click="closeAllDialogs()">
                    Close
                </button>
            </nav>
        </dialog>

        <dialog v-if="isDialogArmsVisible" id="dialog-arms" class="active">
            <h5>Arms</h5>
            <div>Some text here</div>
            <nav class="right-align no-space">
                <button class="transparent link">Cancel</button>
                <button class="transparent link">Confirm</button>
            </nav>
        </dialog> -->
    </div>
</template>
