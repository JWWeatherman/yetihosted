<template>
    <nav class="form-row navbar navbar-light" style="cursor: pointer;background-color: rgb(112,196,245)!important;">
        <img v-on:click="Home" src="@/assets/logo.png" width="50" height="50" class="align-top" alt="">
        <h3 style="color:white;margin:0;">Yeti Bitcoin Cold Storage</h3>
    </nav>
</template>

<script>
export default {
  methods: {
    Home () {
      this.$router.push({path: '/'})
    }
  }
}
</script>
