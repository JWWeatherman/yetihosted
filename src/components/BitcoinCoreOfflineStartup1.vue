<template>
  <div>
    <navbarBCO></navbarBCO>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 1: Gather Required Equipment</h2>
      <p>Gather the following items and then click <b>Next</b>.</p>
        <ul>
            <li>Two laptops that can run Ubuntu and Bitcoin Core. At the time of this writing almost any laptop with at least 500 GB of disk storage will work but if your laptop has an SSD type hard some steps will take a few hours instead of a few days. Laptops without SSD type drives cost about $150 USD and laptops with SSD drives cost about $200 USD.</li>
            <li>An external hard drive with at least 500 GB of disk storage that can connect to both laptops. This will cost less than $100.</li>
            <li>8 small USB thumb drives. These will cost about $3 each and will be used to store your bitcoin seeds along with a paper copy.</li>
            <li>A printer and printer paper.</li>
        </ul>
      <input v-on:click="click" class="btn btn-primary" type="submit" id="next" value="Next">
    </div>
  </div>
</template>

<script>
import navbarBCO from './navbarBCO'
export default {
  methods: {
    click () {
      this.$router.push({path: '/BCO/step2'})
    }
  },
  components: {
    navbarBCO
  }
}
</script>
