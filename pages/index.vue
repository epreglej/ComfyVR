<script setup>
definePageMeta({
    layout: "medium-layout",
    name: "Overview",
});

const activeSeries = ref("comfort");

const isDialogEyesVisible = ref(false);
const isDialogArmsVisible = ref(false);

function toggleDialog(dialogRef) {
    dialogRef.value = !dialogRef.value;
}

function closeAllDialogs() {
    isDialogEyesVisible.value = false;
    isDialogArmsVisible.value = false;
}

function generateRandomData(length, min, max) {
    const data = [];
    for (let i = 0; i < length; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return data;
}

const chartOptions = computed(() => ({
    chart: {
        polar: true,
        backgroundColor: "transparent", // Make the chart's background transparent
    },

    title: {
        text: null, // This will hide the title
    },

    legend: {
        enabled: false, // This will hide the legend
    },

    tooltip: {
        enabled: false, // This will disable the tooltip
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        size: "75%",
    },

    xAxis: {
        tickInterval: 72, // Adjusted to fit 5 labels evenly
        min: 0,
        max: 360,
        labels: {
            distance: 20,
            formatter: function () {
                const emojis = [
                    "<i class='large-icon blue-text'>visibility</i>",
                    "<i class='large-icon amber-text'>brand_awareness</i>",
                    "<i class='large-icon green-text'>psychology</i>",
                    "<i class='large-icon purple-text '>front_hand</i>",
                    "<i class=' large-icon red-text'>barefoot</i>",
                ];
                return emojis[this.value / 72]; // Map the value to the corresponding emoji
            },
            style: {
                fontSize: "32px",
            },
            useHTML: true,
            allowOverlap: true,
        },
    },

    yAxis: {
        min: 0,
        max: 4, // Set the maximum value for the yAxis to 4
        visible: 1,
        tickInterval: 1,
        labels: {
            enabled: false, // Hide labels
        },
    },

    plotOptions: {
        series: {
            pointStart: 0,
            pointInterval: 72, // Adjusted to fit 5 labels evenly
            colorByPoint: true, // Assign a unique color to each point
            colors: [
                "rgba(0, 191, 255, 0.8)",
                "rgba(255, 195, 0, 0.8)",
                "rgba(34, 160, 34, 0.8)",
                "rgba(138,43,226, 0.8)",
                "rgba(255, 0, 0, 0.8)",
            ],
            dataLabels: {
                enabled: true, // Enable data labels
                format: "{point.y}", // Format of the data label
                color: "#ffffff", // Color of the data label text
                align: "center",
                verticalAlign: "middle",
                style: {
                    fontSize: "18px", // Font size of the data label text
                },
                inside: true,
                useHTML: true,
                zIndex: 9999,
                allowOverlap: true,
            },
            borderWidth: 3,
            borderColor: "#FFFFFF",

            point: {
                events: {
                    click: function () {
                        const emojiIndex = this.index;
                        if (emojiIndex === 0) {
                            toggleDialog(isDialogEyesVisible);
                        }
                    },
                },
            },
        },
        column: {
            pointPadding: 0,
            groupPadding: 0,
        },
    },

    series: [
        {
            type: "column",
            name: "Comfort",
            data: generateRandomData(5, 1, 4),
            visible: activeSeries.value === "comfort",
        },
        {
            type: "column",
            name: "Accessibility",
            data: generateRandomData(5, 1, 4),
            visible: activeSeries.value === "accessibility",
        },
        {
            type: "column",
            name: "Safety",
            data: generateRandomData(5, 1, 4),
            visible: activeSeries.value === "safety",
        },
    ],
}));
</script>

<template>
    <div class="main responsive right page active">
        <div class="horizontal-margin">
            <div class="space"></div>
            <div class="circle medium-width medium-height center">
                <highchart
                    :modules="['accessibility']"
                    :options="chartOptions"
                    :more="true"
                />
            </div>
        </div>

        <div
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
        </dialog>
    </div>

    <nav class="bottom s tertiary-container">
        <button class="transparent vertical" @click="activeSeries = 'comfort'">
            <i>chair</i>
            <span>Comfort</span>
        </button>
        <button
            class="transparent vertical"
            @click="activeSeries = 'accessibility'"
        >
            <i>person</i>
            <span>Accessibility</span>
        </button>
        <button class="transparent vertical" @click="activeSeries = 'safety'">
            <i>health_and_safety</i>
            <span>Safety</span>
        </button>
    </nav>
</template>
