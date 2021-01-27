<template>
    <nav class="form-row navbar navbar-light bg-secondary">
        <img style="cursor:pointer;" src="@/assets/logo.png" width="50" height="50" class="align-top" alt="">
        <h3 style="color:black;margin:0;">Yeti Cold Utilities</h3>
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