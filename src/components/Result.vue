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
        <Chart :itemId="item._id" />
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
