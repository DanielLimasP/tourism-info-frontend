<template>
<form action="#">
    <div class="row">
        <div class="col-md-3">
            <label for="sel1">Año:</label>
            <select class="form-control" id="sel1">
                <option>2019</option>
                <option>2020</option>
            </select>
        </div>
        <div class="col-md-3">
            <label for="sel1">Categoria:</label>
            <select class="form-control" id="sel1">
                <option>Densidad</option>
                <option>Derrama</option>
            </select>
        </div>
        <div class="col-md-3">
            <label for="sel1">Ciudad:</label>
            <select class="form-control" id="sel1">
                <option>Chihuahua</option>
                <option>Juarez</option>
            </select>
        </div>
        <div class="col-md-3">
            <label for="sel1">Region:</label>
            <select class="form-control" id="sel1">
                <option>Desierto</option>
                <option>Arqueologica</option>
            </select>
        </div>
    </div>
    <div class="row">
        <button type="submit" class="btn btn-info mt-4 mb-4 col-md-4 mx-auto">Consultar</button>
    </div>
</form>
</template>

<script>
export default {
    name: "QueryForm",
    components: {

    }
};
</script>

<style>

</style>
