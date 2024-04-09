<script>
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { PolarArea } from "vue-chartjs";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip);

export default {
    name: "App",
    components: {
        PolarArea,
    },
    data() {
        // Function to generate an array of random numbers
        const generateRandomData = (count, min, max) => {
            const data = [];
            for (let i = 0; i < count; i++) {
                data.push(Math.floor(Math.random() * (max - min + 1)) + min);
            }
            return data;
        };

        return {
            chartData: {
                labels: ["Eyes", "Ears", "Brain", "Arms", "Legs"],
                datasets: [
                    {
                        label: "My First dataset",
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.8)", // Red
                            "rgba(54, 162, 235, 0.8)", // Blue
                            "rgba(255, 206, 86, 0.8)", // Yellow
                            "rgba(75, 192, 192, 0.8)", // Green
                            "rgba(153, 102, 255, 0.8)", // Purple
                        ],
                        pointBackgroundColor: "rgba(179,181,198,1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(179,181,198,1)",
                        // Generate random data for each label
                        data: generateRandomData(5, 1, 5), // Example: Generate 5 random numbers between 1 and 10
                    },
                ],
            },

            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        display: true, //
                        min: 0, // Start the scale at 0
                        max: 5, // Set the maximum value of the scale to 5
                        pointLabels: {
                            display: true,
                            centerPointLabels: true,
                            font: {
                                size: 18,
                            },
                        },
                        ticks: {
                            backdropColor: "transparent", // Set the backdrop color to fully transparent
                        },
                    },
                },
            },
        };
    },
};
</script>

<template>
    <div>
        <PolarArea :data="chartData" :options="chartOptions" />
    </div>
</template>
