<template>
  <div>
    <navbarhot></navbarhot>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 17: Store Seed Packets and Deposit Funds</h2>
      <p>Store your seed packets in safe locations and then deposit the funds you wish to store in your Yeti Wallet.</p>
      <ol>
        <li>Label 5 envelopes something like "Do Not Open. Last Will and Testament of Steve Jones. Deliver to next of kin." If anyone discovers the envelopes they should know it is important, but inappropriate and uninteresting to open them. Do not give any indication these envelopes are related to bitcoin.</li>
        <li>In each envelope place a seed CD.</li>
        <li>Store the envelopes in places such as home and office safes, lawyers offices, accountant offices, safety deposit boxes and trusted friends or family members.</li>
        <li>Lawyers and Accountants regularly store important documents for customers without charging a fee. Even if you need to pay for an unnecessary review of your books or your existing will to create a new relationship with a lawyer or accountant the annual cost to have these documents safely stored and handed over to your loved ones if you die is very cheap.</li>
        <li>Ensure that you distribute your seed packets geographically so that you will be able to recover at least 1 after a major natural disaster.</li>
        <li>Do not tell anyone storing these envelopes that they are bitcoin related. Anyone storing these documents should believe they are important, but do not offer a thief financial rewards.</li>
        <li>Consider that someone needs to have only one seed packets to spend your bitcoin.</li>
        <li><b>After</b> you have secured your seed packets <b>offsite</b> deposit the funds you wish to secure in your Yeti Wallet and then click <b>Next</b> to continue.</li>
      </ol>
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-primary" type="submit" id="next" value="Next">
    </div>
  </div>
</template>

<script>
import navbarhot from './navbarhot'
import hwg from './HWG'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Hot/Guide/step4'})
    }
  },
  components: {
    navbarhot
  }
}
</script>
