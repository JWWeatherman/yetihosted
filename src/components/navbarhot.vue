<template>
    <nav class="form-row navbar navbar-light bg-danger">
        <img style="cursor:pointer;" src="@/assets/logo.png" width="50" height="50" class="align-top" alt="">
        <h3 style="color:white;margin:0;">Yeti Level 1 Wallet</h3>
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