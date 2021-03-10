<template>
  <div>
    <navbarhot></navbarhot>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 1: Gather Required Equipment</h2>
      <p>Gather the following items and then click <b>Next</b>.</p>
        <ul>
            <li>A laptop that can run Ubuntu and Bitcoin Core. Almost any laptop made to run Windows will work, but if your laptop has an SSD type hard drive some steps will take a few hours instead of a few days. Laptops without SSD type drives cost about $150 USD and laptops with SSD drives cost about $200 USD brand new. You can also buy a used laptop on eBay for about $60 or you can purchase and return a laptop from a store like Amazon or Walmart.</li>
            <li>An optical drive to write to the CDs. Most laptops come with one built in, but you can also    buy an external optical drive for about $15 on Amazon.</li>
            <li>5 blank CD-R disks. Label each the blank disks "Level One Seed".</li>
            <li>2 USB thumb drives. These will cost about $3 each and will be used to install Ubuntu and to erase your laptop. Label one "Ubuntu" and the other "Transfer."</li>
        </ul>
      <input v-on:click="click" class="btn btn-danger" type="submit" id="next" value="Next">
      <p></p>
      <p style="color:light-gray;"><a href="https://www.youtube.com/watch?v=sjExNFcdVmo">Video walk through</a></p>
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
