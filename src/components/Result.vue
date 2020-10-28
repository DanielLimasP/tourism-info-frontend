<template>
<div class="card card-blob">
    <div class="card-header">
        <h6> <b>Ciudad:</b> {{ item.city }} {{ item.year }} </h6>
        <h6><b>Region:</b> {{ item.region }}</h6>
    </div>
    <div class="card-body">

        <div v-if="item.data.Establishments">
            <h6>Numero de establecimientos de hospedaje en {{ item.city }}: {{ item.data.Establishments }}</h6>
        </div>
        <div v-else-if="item.data.Rooms">
            <h6>Numero de habitaciones disponibles en {{ item.city }}: {{ item.data.Rooms }}</h6>
        </div>
        <div v-else-if="item.data.months" class="card-footer">
            <h6 v-if="item.category == 'Densidad'"> Densidad por mes dada en ocupantes por habitacion </h6>
            <h6 v-if="item.category == 'Derrama economica'"> Derrama economica por mes dada en Millones de pesos </h6>
            <h6 v-if="item.category == 'Ocupacion hotelera'"> Ocupacion hotelera por mes dada en porcentaje </h6>
            <h6 v-if="item.category == 'Noches de estadia de los turistas'"> Noches promedio por mes por turista </h6>
            <Chart :itemId="item._id" :itemData="item.data" />
        </div>
    </div>
</div>
</template>

<script>
import Chart from './Chart'

export default {
    name: "Result",
    props: {
        item: {}
    },
    components: {
        Chart
    }
};
</script>

<style>

</style>
