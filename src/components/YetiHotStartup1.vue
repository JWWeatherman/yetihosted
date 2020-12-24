<template>
  <div>
    <navbarhot></navbarhot>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 1: Gather Required Equipment</h2>
      <p>Gather the following items and then click next.</p>
        <ul>
            <li>A laptop that can run Ubuntu and Bitcoin Core. Almost any laptop made to run Windows will work, but if your laptop has an SSD type hard some steps will take a few hours instead of a few days. Laptops without SSD type drives cost about $150 USD and laptops with SSD drives cost about $200 USD brand new. You can also buy a used laptop on eBay for about $60 or you can purchase and return a laptop from a store like Amazon or Walmart.</li>
            <li>1 USB thumb drive. This will cost about $3 and will be used to install Ubuntu.</li>
            <li>5 blank CD rom drives and a CD-R drive. Many laptops have a built in CR-R drive, but an external CD-R drive can be purchased for about $15 from Amazon.</li>
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
