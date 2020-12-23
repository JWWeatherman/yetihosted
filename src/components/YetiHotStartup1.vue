<template>
  <div>
    <navbarhot></navbarhot>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 1: Gather Required Equipment</h2>
      <p>Gather the following items and then click next.</p>
        <ul>
            <li>A laptops that can run Ubuntu and Bitcoin Core. At the time of this writing almost any laptop will work but if your laptop has an SSD type hard some steps will take a few hours instead of a few days. Laptops without SSD type drives cost about $150 USD and laptops with SSD drives cost about $200 USD.</li>
            <li>6 USB thumb drives. These will cost about $3 each and will be used to store your Bitcoin seeds along with a paper copy.</li>
            <li>A printer and printer paper.</li>
        </ul>
      <input v-on:click="click" class="btn btn-danger" type="submit" id="next" value="Next">
    </div>
  </div>
</template>

<script>
import navbarhot from './navbarhot'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Hot/step2'})
    }
  },
  components: {
    navbarhot
  }
}
</script>
