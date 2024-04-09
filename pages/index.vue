<script>
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";
import { PolarArea } from "vue-chartjs";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default {
    name: "App",
    components: {
        PolarArea,
    },
    data() {
        return {
            chartData: {
                labels: [
                    "Eating",
                    "Drinking",
                    "Sleeping",
                    "Designing",
                    "Coding",
                    "Cycling",
                    "Running",
                ],
                datasets: [
                    {
                        label: "My First dataset",
                        backgroundColor: "rgba(179,181,198,0.2)",
                        pointBackgroundColor: "rgba(179,181,198,1)",
                        pointBorderColor: "#fff",
                        pointHoverBackgroundColor: "#fff",
                        pointHoverBorderColor: "rgba(179,181,198,1)",
                        data: [5, 4, 2, 1, 2, 5, 4],
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
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
