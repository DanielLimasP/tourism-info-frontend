<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="row container-fluid">
            <div class="col-md-2 ml-1 mr-1">
                <button type="button" id="sidebarCollapse" class="btn btn-info">
                    <i class="fas fa-bars"></i> Ocultar
                </button>
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-align-justify"></i>
                </button>
            </div>
            <div class="container col-md-8">
                <div class="d-flex justify-content-center">
                    <div class="searchbar">
                        <input v-model="query" @keyup="searchBarQuery" class="search_input" type="text" name="" placeholder="Busqueda por ciudad o region">
                        <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
                    </div>
                </div>
            </div>
            <div class="collapse navbar-collapse col-md-2" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/DanielLimasP/tourism-info-frontend"><i class="fa fa-github fa-3x"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="card">
        <form action="#">
            <div class="row m-2">
                <div class="col-md-3">
                    <label for="sel1">Año:</label>
                    <select class="form-control" id="sel1">
                        <option>2019</option>
                        <option>2020</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="sel2">Categoria:</label>
                    <select class="form-control" id="sel2">
                        <option>Densidad</option>
                        <option>Derrama</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="sel3">Ciudad:</label>
                    <select class="form-control" id="sel3">
                        <option>Chihuahua</option>
                        <option>Juarez</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="sel4">Region:</label>
                    <select class="form-control" id="sel4">
                        <option>Desierto</option>
                        <option>Arqueologica</option>
                    </select>
                </div>
            </div>
            <div class="row mt-2">
                <button type="submit" class="btn btn-info mt-4 mb-4 col-md-3 mx-auto">Consultar</button>
            </div>
        </form>
    </div>
    <!-- Here we render the result of the queries -->
    <div id="array-rendering">
        <div v-for="item in query_result_array" :key="item">
            <Result :item="item" />
        </div>
    </div>
</div>
</template>

<script>
import Result from './Result'

export default {
    // Content component contains both the nav and the query form
    // in order to generate the website content (charts or tables)
    // based on the results of the queries
    name: "Content",
    components: {
        Result
    },
    data() {
        return {
            query: '',
            query_result_array: []
        }
    },
    methods: {
        async searchBarQuery() {
            //console.log(this.query)
            let query_string = this.query.toString()
            // Query Params
            // ?year=2020&city=Juarez
            let fetch_url = "http://localhost:420/info/query/?year=2020&wildcard=" + query_string

            let query_result = await fetch(fetch_url, {
                method: 'GET'
            }).then(rawResponse => {
                return rawResponse.json();
            }).then(jsonResponse => {
                //console.log(jsonResponse);
                return jsonResponse
            });
            //console.log(query_result)
            this.query_result_array = query_result.result
            //console.log(this.query_result_array)
        }
    }
};
</script>

<style>
i.fa-github {
    color: #32703d;
}

i.fa-github:hover {
    animation: vertical 5s infinite;
}
</style>
