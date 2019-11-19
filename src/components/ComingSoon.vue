<template>
    <div class="container" style="margin-top: 3rem;">
    <h2>Coming Soon...</h2>
    <input v-on:click="click" class="btn btn-primary" type="submit" id="next" value="Next">
  </div>
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