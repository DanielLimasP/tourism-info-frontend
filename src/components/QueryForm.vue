<template>
<form action="#">
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text">@</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" id="usr" name="username">
    </div>

    <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Your Email" id="mail" name="email">
        <div class="input-group-append">
            <span class="input-group-text">@example.com</span>
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
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
