<template>
  <div>
    <navbarwarm></navbarwarm>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 1: Gather Required Equipment</h2>
      <p>Gather the following items and then click <b>Next</b>.</p>
        <ul>
            <li>A laptop that can run Ubuntu and Bitcoin Core. Almost any laptop made for Windows will work but if your laptop has an SSD type hard drive some steps will take a few hours instead of a few days. New laptops without SSD type drives cost about $150 USD and laptops with SSD drives cost about $200 USD. You can buy a used laptop on eBay for about $60 or you can buy a laptop from a store like Walmart and return it after setup as long as you are careful to erase it.</li>
            <li>An optical drive to write to the CDs. Most laptops come with one built in, but you can also    buy an external optical drive for about $15 on Amazon.</li>
            <li>7 blank CD-R disks. Label the disks "Seed 1" "Seed 2" "Seed 3" through "Seed 7."</li>
            <li>2 USB thumb drives. These will cost about $3 each and will be used to install Ubuntu and to erase your laptop. Label one "Ubuntu" and the other "Transfer."</li>
        </ul>
      <input v-on:click="click" class="btn btn-warning" type="submit" id="next" value="Next">
      <p></p>
      <p style="color:light-gray;"><a href="https://www.youtube.com/watch?v=y3yXo0zhqL0">Video walk through</a></p>
    </div>
  </div>
</template>

<script>
import navbarwarm from './navbarwarm'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Warm/step2'})
    }
  },
  components: {
    navbarwarm
  }
}
</script>
