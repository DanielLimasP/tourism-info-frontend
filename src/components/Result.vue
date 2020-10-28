<template>
<div class="card card-blob">
    <div class="card-header">
        <h6> <b>Ciudad:</b> {{ item.city }} {{ item.year }} </h6>
        <h6><b>Region:</b> {{ item.region }}</h6>
        <h6><b>Indicador:</b> {{ item.category }}</h6>
    </div>
    <div class="card-body">

        <div v-if="item.data.Establishments">
            <h6>Numero de establecimientos de hospedaje en {{ item.city }}: {{ item.data.Establishments }}</h6>
        </div>
        <div v-else-if="item.data.Rooms">
            <h6>Numero de habitaciones disponibles en {{ item.city }}: {{ item.data.Rooms }}</h6>
        </div>
        <div v-else-if="item.data.months" class="card-footer">
            <div v-if="item.category == 'Densidad'">
                <Chart :itemId="item._id" :itemData="item.data" itemLabel="Densidad por mes dada en ocupantes por habitacion" />
            </div>
            <div v-if="item.category == 'Derrama economica'">
                <Chart :itemId="item._id" :itemData="item.data" itemLabel="Derrama economica por mes dada en Millones de pesos" />
            </div>
            <div v-if="item.category == 'Ocupacion hotelera'">
                <Chart :itemId="item._id" :itemData="item.data" itemLabel="Ocupacion hotelera por mes dada en porcentaje" />
            </div>
            <div v-if="item.category == 'Noches de estadia de los turistas'">
                <Chart :itemId="item._id" :itemData="item.data" itemLabel=" Noches promedio por mes por turista" />
            </div>
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
