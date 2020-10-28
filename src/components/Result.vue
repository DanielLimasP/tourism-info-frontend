<template>
<div class="card card-blob">
    <div class="card-header">
        {{ item.category }} : {{ item.city }} {{ item.year }}
    </div>
    <div class="card-body">
        <h6><b>Region:</b> {{ item.region }}</h6>
        <div v-if="item.data.Establishments">
            <h6>Numero de establecimientos de hospedaje en {{ item.city }}: {{ item.data.Establishments }}</h6>
        </div>
        <div v-else-if="item.data.Rooms">
            <h6>Numero de habitaciones disponibles en {{ item.city }}: {{ item.data.Rooms }}</h6>
        </div>
        <div v-else-if="item.data.months" class="card-footer">
            <h6> {{ item.data }} </h6>
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
