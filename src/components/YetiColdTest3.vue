<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2 style="margin-bottom:35px;">Step 3: Encrypt and Erase your hard drive</h2>
      <p>Now we are going to encrypt and erase the hard drive that stores your private keys on your <b>Secondary</b> laptop.</p>
      <ol>
        <li>Power off your <b>Secondary laptop</b>.</li>
        <li>Insert the usb drive you used to install ubuntu.</li>
        <li>Boot up your laptop and click <b>Try ubuntu</b>.</li>
        <li>Insert your "Transfer" usb and copy the erase.txt file to the "Documents" folder.</li>
        <li>Click on the <b>nine dots</b> in the bottom left corner and open "Terminal".</li>
        <li>Open the erase.txt file stored in the "Documents" folder and copy the first command.</li>
        <li>Paste the text in the "Terminal" and hit <b>Enter</b>.</li>
        <li>Confirm that the hard drive is "not frozen" See image below. If it's "frozen" contatct support at "yeticold.slack.com".</li>
        <div class="card mb-3" style="width: 50%;">
          <img class="card-img-top" src="@/assets/terminal1.png" alt="Card image cap">
        </div>
        <li>Open the erase.txt file stored in the "Documents" folder and copy the second command.</li>
        <li>Paste the text in the "Terminal" and hit <b>Enter</b>.</li>
        <li>You should see an output like below.</li>
        <div class="card mb-3" style="width: 50%;">
          <img class="card-img-top" src="@/assets/terminal2.png" alt="Card image cap">
        </div>
        <li>Open the erase.txt file stored in the "Documents" folder and copy the third command.</li>
        <li>Paste the text in the "Terminal" and hit <b>Enter</b>.</li>
        <li>After a few minutes you should see an output like below.</li>
        <div class="card mb-3" style="width: 50%;">
          <img class="card-img-top" src="@/assets/terminal3.png" alt="Card image cap">
        </div>
        <li>Your hard drive has now been erased. On the desktop click the desktop shortcut to install ubuntu.</li>
        <li>Once your laptop has been reinstalled with ubuntu click <b>Next</b>.</li>
      </ol>
      <input v-on:click="click" style="margin-top:35px;" class="btn btn-primary" type="submit" id="next" value="Next">
    </div>
  </div>
</template>

<script>
import navbarcold from './navbarcold'
import cwg from './ColdWalletGuide'
export default {
  methods: {
    click () {
      this.$router.push({path: '/Cold/Test/step3'})
    }
  },
  components: {
    navbarcold,
    cwg
  }
}
</script>