<script setup>
definePageMeta({
    layout: "medium-layout",
    name: "Overview",
});

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
        size: "80%",
    },

    xAxis: {
        tickInterval: 72, // Adjusted to fit 5 labels evenly
        min: 0,
        max: 360,
        labels: {
            distance: 20,
            formatter: function () {
                const emojis = ["<i>home</i>", "👂", "🧠", "💪", "👣"];
                return emojis[this.value / 72]; // Map the value to the corresponding emoji
            },
            style: {
                fontSize: "28px", // Set the font size to 28px for emojis
                opacity: 0.7, // Set the opacity to 30%
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
        endOnTick: true,
        showLastLabel: true,
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
                "rgba(255, 99, 71, 0.8)", // Tomato with 80% opacity
                "rgba(64, 224, 208, 0.8)", // Turquoise with 80% opacity
                "rgba(255, 215, 0, 0.8)", // Gold with 80% opacity
                "rgba(70, 130, 180, 0.8)", // SteelBlue with 80% opacity
                "rgba(154, 205, 50, 0.8)", // YellowGreen with 80% opacity
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
            name: "Column 1",
            data: generateRandomData(5, 1, 4),
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

        <dialog v-if="isDialogEyesVisible" id="dialog-eyes" class="active">
            <h5>Eyes</h5>
            <div>Some text here</div>
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
</template>
