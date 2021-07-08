<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 1: Gather and Label Required Equipment</h2>
      <p>Gather the following items and then click <b>Next</b>.</p>
        <ul>
            <li>2 laptops that can run Ubuntu and Bitcoin Core. Almost any laptop made for Windows will work, but if your laptops have an SSD type hard drive some steps will take a few hours instead of a few days. Laptops without SSD type drives cost about $150 USD and laptops with SSD drives cost about $200 USD. You can also buy a new laptop from a store like Amazon or Walmart and return it when you are finished with setup because your bitcoin will be stored on paper and CD-ROM disks. Label one laptop "Primary" and the other "Secondary."</li>
            <li>An optical drive to write to the CDs. Most laptops come with one built in, but you can also buy an external optical drive for about $15 on Amazon.</li>
            <li>14 blank CD-R disks. Label 7 of the blank disks "Descriptor" and the other 7 "Seed 1" "Seed 2" "Seed 3" through "Seed 7."</li>
            <li>A printer and printer paper.</li>
            <li>2 USB thumb drives. These will cost about $3 each and will be used to install Ubuntu and to transfer transactions between your laptops. Label one "Ubuntu" and the other "Transfer."</li>
            <li>7 full page size envelopes. Label them "Do not open. Last Will and Testament. Hand deliver ONLY to 'Your Name' or executor." Also place the number 1 through 7 on each envelope to help you keep track in future steps.</li>
        </ul>
      <input v-on:click="click" class="btn btn-primary" type="submit" id="next" value="Next">
      <p></p>
      <p style="color:light-gray;"><a href="https://youtu.be/xCwSeYLrUb8">Video walk through</a></p>
    </div>
  </div>
</template>

<script>
import navbarcold from './navbarcold'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Cold/step2'})
    }
  },
  components: {
    navbarcold
  }
}
</script>
