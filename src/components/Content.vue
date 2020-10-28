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
                    <select v-model="selected_year" class="form-control" id="sel1">
                        <option> </option>
                        <option>2019</option>
                        <option>2020</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="sel2">Categoria:</label>
                    <select v-model="selected_category" class="form-control" id="sel2">
                        <option> </option>
                        <option>Densidad</option>
                        <option>Derrama economica</option>
                        <option>Establecimientos de hospedaje</option>
                        <option>Habitaciones</option>
                        <option>Ocupacion hotelera</option>
                        <option>Llegada de turistas</option>
                        <option>Noches de estadia de los turistas</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="sel3">Ciudad:</label>
                    <select v-model="selected_city" class="form-control" id="sel3">
                        <option> </option>
                        <option>Ahumada</option>
                        <option>Aldama</option>
                        <option>Allende</option>
                        <option>Ascencion</option>
                        <option>Ascension</option>
                        <option>Bachiniva</option>
                        <option>Balleza</option>
                        <option>Batopilas</option>
                        <option>Bocoyna</option>
                        <option>Buenaventura</option>
                        <option>Camargo</option>
                        <option>Carichi</option>
                        <option>Casas Grandes</option>
                        <option>Chihuahua</option>
                        <option>Chinipas</option>
                        <option>Coyame del Sotol</option>
                        <option>Cuauhtemoc</option>
                        <option>Delicias</option>
                        <option>Estatal</option>
                        <option>G. y Calvo</option>
                        <option>Gomez Farias</option>
                        <option>Guachochi</option>
                        <option>Guazapares</option>
                        <option>Guerrero</option>
                        <option>H. del Parral</option>
                        <option>Janos</option>
                        <option>Jimenez</option>
                        <option>Juarez</option>
                        <option>Julimes</option>
                        <option>Lopez</option>
                        <option>Madera</option>
                        <option>Maguarichi</option>
                        <option>Manuel Benavides</option>
                        <option>Matacha</option>
                        <option>Matachi</option>
                        <option>Meoqui</option>
                        <option>Moris</option>
                        <option>Namiquipa</option>
                        <option>Nuevo Casas Grandes</option>
                        <option>Ocampo</option>
                        <option>Ojinaga</option>
                        <option>Riva Palacio</option>
                        <option>Rosales</option>
                        <option>Santa Barbara</option>
                        <option>Saucillo</option>
                        <option>Sn Fco. Borja</option>
                        <option>Sn Fco. Conchos</option>
                        <option>Temosachi</option>
                        <option>Urique</option>
                        <option>Uruachi</option>
                        <option>Valle de Zaragoza</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="sel4">Region:</label>
                    <select v-model="selected_region" class="form-control" id="sel4">
                        <option> </option>
                        <option>Arqueologica</option>
                        <option>Barrancas del Cobre</option>
                        <option>Chihuahua</option>
                        <option>Desierto</option>
                        <option>Juarez</option>
                        <option>Perla de Conchos</option>
                        <option>Ruta de Villa</option>
                    </select>
                </div>
            </div>
            <div class="row mt-2">
                <button type="submit" @click="createQuery" class="btn btn-info mt-4 mb-4 col-md-3 mx-auto">Consultar</button>
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
            selected_year: '',
            selected_category: '',
            selected_city: '',
            selected_region: '',
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
        },
        async createQuery() {

            let query_year = this.selected_year.toString()
            let query_category = this.selected_category.toString()
            let query_city = this.selected_city.toString()
            let query_region = this.selected_region.toString()

            let fetch_url = ""

            console.log(query_year, query_category, query_city, query_region)

            if (query_year == "") console.log("Empty")

            // Year - Category
            if (query_year != "" && query_category != "" && query_city == "" && query_region == "") {
                fetch_url = "http://localhost:420/info/query/?year=" + query_year + "&category=" + query_category
            }
            // Year - Category - City
            else if (query_year != "" && query_category != "" && query_city != "" && query_region == "") {
                fetch_url = "http://localhost:420/info/query/?year=" + query_year + "&category=" + query_category + "&city=" + query_city
            }
            // Year - Category - Region
            else if (query_year != "" && query_category != "" && query_city == "" && query_region != "") {
                fetch_url = "http://localhost:420/info/query/?year=" + query_year + "&category=" + query_category + "&region=" + query_region
            }
            // Year - City
            else if (query_year != "" && query_category == "" && query_city != "" && query_region == "") {
                fetch_url = "http://localhost:420/info/query/?year=" + query_year + "&city=" + query_city
            }
            // Year - Region
            else if (query_year != "" && query_category == "" && query_city == "" && query_region != "") {
                fetch_url = "http://localhost:420/info/query/?year=" + query_year + "&region=" + query_region
            }
            console.log(fetch_url)
            let query_result = await fetch(fetch_url, {
                method: 'GET'
            }).then(rawResponse => {
                return rawResponse.json();
            }).then(jsonResponse => {
                console.log(jsonResponse);
                return jsonResponse
            });
            //console.log(query_result)
            this.query_result_array = query_result.result

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
