<script setup>
definePageMeta({
    layout: "ratings-layout",
    name: "Comfort",
});

function generateRandomData(length, min, max) {
    const data = [];
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}

const route = useRoute();
const client = useSupabaseClient();

let record = null;

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

//calculateComfortRating();

const chartOptions = {
    chart: {
        type: "column",
    },
    title: {
        text: "Comfort",
    },
    xAxis: {
        categories: ["Comfort", "Accessibility", "Safety"],
    },
    yAxis: {
        min: 0,
        title: {
            text: "Rating",
        },
    },
    series: [
        {
            name: "Rating",
            data: [3, 2, 4],
        },
    ],
};
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
                    <NuxtLink
                        to="#"
                        class="head"
                        data-ui="#head-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="leftear"
                        data-ui="#ears-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="rightear"
                        data-ui="#ears-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="lefteye"
                        data-ui="#eyes-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="righteye"
                        data-ui="#eyes-dialog"
                    ></NuxtLink>
                    <NuxtLink to="" class="mouth"></NuxtLink>
                    <NuxtLink to="" class="neck"></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="stomach"
                        data-ui="#stomach-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="leftarm"
                        data-ui="#arms-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="rightarm"
                        data-ui="#arms-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="leftleg"
                        data-ui="#legs-dialog"
                    ></NuxtLink>
                    <NuxtLink
                        to="#"
                        class="rightleg"
                        data-ui="#legs-dialog"
                    ></NuxtLink>
                </div>
            </div>
        </article>

        <table class="center-align large-width center">
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

        <div class="top-margin large-margin">
            <div class="circle medium-width center">
                <highchart
                    :modules="['accessibility']"
                    :options="chartOptions"
                    :more="true"
                />
            </div>
        </div>

        <div class="overlay blur"></div>
        <dialog id="head-dialog" class="left-align">
            <h5 class="bold">Comfort</h5>

            <ul class="margin">
                <li v-if="record.cameraMovementChoppy">
                    Camera may look choppy and induce
                    <span class="bold"> headaches </span>
                </li>
            </ul>

            <nav class="center-align no-space">
                <button class="transparent link" data-ui="#head-dialog">
                    Close
                </button>
            </nav>
        </dialog>

        <div class="overlay blur"></div>
        <dialog id="ears-dialog" class="left-align">
            <h5 class="bold">Comfort</h5>

            <h5 class="bold">Accessibility</h5>
            <nav class="center-align no-space">
                <button class="transparent link" data-ui="#ears-dialog">
                    Close
                </button>
            </nav>
        </dialog>

        <div class="overlay blur"></div>
        <dialog id="eyes-dialog" class="left-align">
            <h5 class="bold">Comfort</h5>

            <h5 class="bold">Accessibility</h5>
            <nav class="center-align no-space">
                <button class="transparent link" data-ui="#eyes-dialog">
                    Close
                </button>
            </nav>
        </dialog>

        <div class="overlay blur"></div>
        <dialog id="stomach-dialog" class="left-align">
            <h5 class="bold">Comfort</h5>

            <ul class="margin">
                <li v-if="record.cameraMovementChoppy">
                    Camera may look choppy and induce
                    <span class="bold"> feeling of sickness </span>
                </li>
            </ul>

            <h5 class="bold">Accessibility</h5>
            <nav class="center-align no-space">
                <button class="transparent link" data-ui="#stomach-dialog">
                    Close
                </button>
            </nav>
        </dialog>

        <div class="overlay blur"></div>
        <dialog id="arms-dialog" class="left-align">
            <h5 class="bold">Comfort</h5>

            <h5 class="bold">Accessibility</h5>
            <nav class="center-align no-space">
                <button class="transparent link" data-ui="#arms-dialog">
                    Close
                </button>
            </nav>
        </dialog>

        <div class="overlay blur"></div>
        <dialog id="legs-dialog" class="left-align">
            <h5 class="bold">Comfort</h5>

            <h5 class="bold">Accessibility</h5>
            <nav class="center-align no-space">
                <button class="transparent link" data-ui="#legs-dialog">
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
