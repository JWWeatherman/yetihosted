<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2 style="margin-bottom:50px;">Step 5: Choose Setup or Recovery</h2>
      <div class="hero-unit">
          <h1>Setup Yeti Cold Storage</h1>
          <p>Select this option if you want to create a new place to store bitcoin.</p>
          <p>
            <input v-on:click="start" style="margin-bottom:50px;" class="btn btn-primary btn-large" type="submit" id="next" value="Setup">
          </p>
      </div>
      <div class="hero-unit">
          <h1>Recover Bitcoin from Yeti Cold Storage</h1>
          <p>Select this option if you want to spend bitcoin out of your existing Yeti Cold Storage location and you have 3 of your 7 seed packets.</p>
          <p>
            <input v-on:click="recover" style="margin-bottom:50px;" class="btn btn-primary btn-large" type="submit" id="next" value="Recover">
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbarcold'
export default {
  methods: {
    start () {
      this.$router.push({path: '/Cold/step6'})
    },
    recover () {
      this.$router.push({path: '/Cold/Recovery/step6'})
    }
  },
  components: {
    navbarcold
  }
}
</script>
