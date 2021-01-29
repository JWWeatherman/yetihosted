<template>
    <nav class="form-row navbar navbar-light" style="background-color:rgb(53,54,58);">
        <img style="cursor:pointer;" src="@/assets/logo.png" width="50" height="50" class="align-top" alt="">
        <h3 style="color:white;margin:0;">Yeti Bitcoin Wallet</h3>
    </nav>
</template>
<script>
export default {
  methods: {
    home () {
      this.$router.push({path: '/'})
    }
  }
}
</script>

