<template>
<div class="card card-blob">
    <div class="card-header">
        {{ item.category }} : {{ item.city }} {{ item.year }}
    </div>
    <div class="card-body">
        <h7><b>Region:</b> {{ item.region }}</h7>
    </div>
    <div class="card-footer">
        <h6> {{ item.data }} </h6>
    </div>
</div>
</template>

<script>
export default {
    name: "Result",
    props: {
        item: {}
    }
};
</script>

<style>

</style>
