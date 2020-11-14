<template>
  <canvas v-bind:id="itemId"></canvas>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "Chart",
  data() {
    return {
      chartData: {
        type: "line",
        data: {
          labels: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
          ],
          datasets: [
            {
              label: "",
              data: [],
              backgroundColor: [
                "rgba(20,101,20,.4)",
                "rgba(20,101,20,.4)",
                "rgba(20,101,20,.4)",
                "rgba(20,101,20,.4)",
                "rgba(20,101,20,.4)",
                "rgba(20,101,20,.4)",
                "rgba(20,101,20,.4)",
                "rgba(20,101,20,.4)",
                "rgba(20,101,20,.4)",
                "rgba(20,101,20,.4)",
                "rgba(20,101,20,.4)",
                "rgba(20,101,20,.4)"
              ],
              borderColor: [
                "#36495d",
                "#36495d",
                "#36495d",
                "#36495d",
                "#36495d",
                "#36495d",
                "#36495d",
                "#36495d",
                "#36495d",
                "#36495d",
                "#36495d",
                "#36495d"
              ],
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        }
      },
      monthsData: []
    };
  },
  props: {
    itemId: {},
    itemData: {},
    itemLabel: {}
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
      return myChart;
    },
    changeChartData() {
      for (var key in this.itemData.months) {
        this.monthsData.push(this.itemData.months[key]);
      }
      this.chartData.data.datasets[0].data = this.monthsData;
      this.chartData.data.datasets[0].label = this.itemLabel;
    }
  },
  components: {},
  mounted() {
    this.changeChartData();
    this.createChart(this.itemId, this.chartData);
  }
};
</script>

<style></style>
