<template>
  <div class="container" style="margin-top: 3rem;">
    <h2>Step 1: Gather Required Equipment</h2>
    <p>Gather the following items and then click next.</p>
    <p style="color:red;">Yeti Warm is not avaliable yet.</p>
      <ul>
          <li>Two laptops that can run Ubuntu and Bitcoin Core. At the time of this writing almost any laptop with at least 500 GB of disk storage will work but if your laptop has an SSD type hard some steps will take a few hours instead of a few days. Laptops without SSD type drives can be purchased for less than $200 and SSD drives add roughly $50 to the cost.</li>
          <li>An external hard drive with at least 500 GB of disk storage that can connect to both laptops. This will cost less about $100.</li>
          <li>A second external hard drive with at least 10 GB of disk storage than can connect to both laptops. This will cost about $25.</li>
          <li>A printer and printer paper.</li>
      </ul>
    <input v-on:click="click" class="btn btn-primary" type="submit" id="next" value="Next">
  </div>
</template>

<script>
export default {
  methods: {
    click () {
      this.$router.push({path: '/Warm/step2'})
    }
  }
}
</script>