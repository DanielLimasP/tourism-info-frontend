<template>
<div class="card card-blob">
    <div class="card-header">
        {{ item.category }} : {{ item.city }} {{ item.year }}
    </div>
    <div class="card-body">
        <h6><b>Region:</b> {{ item.region }}</h6>
    </div>
    <div class="card-footer">
        <h6> {{ item.data }} </h6>
        <canvas v-bind:id="item._id"></canvas>
    </div>
</div>
</template>

<script>
import Chart from 'chart.js'
import chartDataTest from './data/chart-data-test'

export default {
    name: "Result",
    props: {
        item: {}
    },
    data() {
        return {
            chartDataTest
        }
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
        this.createChart(this.item._id, this.chartDataTest)
    },
};
</script>

<style>

</style>
