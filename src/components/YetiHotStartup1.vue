<template>
  <div class="container" style="margin-top: 3rem;">
    <h2>Step 1: Gather Required Equipment</h2>
    <p>Gather the following items and then click next.</p>
      <ul>
          <li>A laptop that can run Ubuntu and Bitcoin Core. At the time of this writing almost any laptop with at least 500 GB of disk storage will work but if your laptop has an SSD type hard some steps will take a few hours instead of a few days. Laptops without SSD type drives can be purchased for about $150 USD and SSD drives add roughly $50 to the cost.</li>
          <li>4 small thumb drives. This will cost about $10.</li>
          <li>A printer and printer paper.</li>
      </ul>
    <input v-on:click="click" class="btn btn-danger" type="submit" id="next" value="Next">
  </div>
</template>

<script>
export default {
  methods: {
    click () {
      this.$router.push({path: '/Hot/step2'})
    }
  }
}
</script>
