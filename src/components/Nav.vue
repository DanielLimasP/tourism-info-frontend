<template>
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
                    <a class="nav-link" href="#"><i class="fa fa-github fa-3x"></i></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return {
            query: ''
        }
    },
    methods: {
        async searchBarQuery() {
            console.log(this.query)
            let query_string = this.query.toString()
            // Query Params
            // ?year=2020&city=Juarez
            let fetch_url = "https://8e11265de0cf.ngrok.io/info/query/?year=2020&wildcard=" + query_string

            await fetch(fetch_url, {
                method: 'GET'
            }).then(rawResponse => {
                return rawResponse.json();
            }).then(jsonResponse => {
                console.log(jsonResponse);
            });
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
