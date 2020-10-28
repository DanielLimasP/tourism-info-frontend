<template>
<canvas v-bind:id="itemId"></canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
    name: "Chart",
    data() {
        return {
            chartData: {
                type: 'line',
                data: {
                    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
                    datasets: [{ // one line graph
                        // TODO: Programatically change data.labels, data.datasets.label and data.datasets.data
                        label: '',
                        data: [],
                        backgroundColor: [
                            'rgba(20,101,20,.4)', // Blue
                            'rgba(20,101,20,.4)',
                            'rgba(20,101,20,.4)',
                            'rgba(20,101,20,.4)',
                            'rgba(20,101,20,.4)',
                            'rgba(20,101,20,.4)',
                            'rgba(20,101,20,.4)',
                            'rgba(20,101,20,.4)',
                            'rgba(20,101,20,.4)',
                            'rgba(20,101,20,.4)',
                            'rgba(20,101,20,.4)',
                            'rgba(20,101,20,.4)'
                        ],
                        borderColor: [
                            '#36495d',
                            '#36495d',
                            '#36495d',
                            '#36495d',
                            '#36495d',
                            '#36495d',
                            '#36495d',
                            '#36495d',
                            '#36495d',
                            '#36495d',
                            '#36495d',
                            '#36495d'
                        ],
                        borderWidth: 3
                    }]
                },
                options: {
                    responsive: true,
                    lineTension: 1,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                padding: 25,
                            }
                        }]
                    }
                }
            },
            monthsData: []
        }
    },
    props: {
        itemId: {},
        itemData: {}
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
        },
        changeChartData() {
            // Programatically changes data.labels, data.datasets.label and data.datasets.data
            //console.log(this.itemData.months)

            for (var key in this.itemData.months) {
                this.monthsData.push(this.itemData.months[key])
            }
            this.chartData.data.datasets[0].data = this.monthsData
            for (var i = 0; i < this.chartData.data.datasets[0].data; i++) {
                this.chartData.data.datasets[0].data[i] = 1
                console.log(this.chartData.data.datasets[0].data[i])
            }

        }
    },
    components: {

    },
    mounted() {
        this.changeChartData()
        this.createChart(this.itemId, this.chartData)
    },
};
</script>

<style>

</style>
