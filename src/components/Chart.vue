<template>
<canvas v-bind:id="itemId"></canvas>
</template>

<script>
import Chart from 'chart.js'
import chartDataTest from './data/chart-data-test'

export default {
    name: "Chart",
    data() {
        return {
            chartDataTest
        }
    },
    props: {
        itemId: {}
    },
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
                type: chartData.type,
                data: chartData.data,
                options: chartData.options,
            });

            return myChart
        }
    },
    components: {

    },
    mounted() {
        this.createChart(this.itemId, this.chartDataTest)
    },
};
</script>

<style>

</style>
