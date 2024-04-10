<script setup>
definePageMeta({
    layout: "medium-layout",
    name: "Dashboard",
});

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
    },

    xAxis: {
        tickInterval: 72, // Adjusted to fit 5 labels evenly
        min: 0,
        max: 360,
        labels: {
            formatter: function () {
                const emojis = ["👁️", "👂", "🧠", "💪", "👣"];
                return emojis[this.value / 72]; // Map the value to the corresponding emoji
            },
            style: {
                fontSize: "28px", // Set the font size to 28px for emojis
            },
        },
    },

    yAxis: {
        min: 0,
        max: 4, // Set the maximum value for the yAxis to 4
        visible: 0,
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
            data: [1, 2, 3, 4, 5], // Example data for the first column, now including legs
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
    </div>
</template>
