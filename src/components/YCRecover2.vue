<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Erase your Laptops</h2>
      <p>Erase your laptops to ensure that you can only spend with access to your seed packets.</p>
      <ol>
        <li>Power off your <b>Secondary laptop</b>.</li>
        <li>Insert the usb drive you used to install Ubuntu.</li>
        <li>Boot up your laptop and click <b>Try Ubuntu</b>.</li>
        <li>Insert your "Transfer" usb and copy the "erase.txt" file to the "Documents" folder.</li>
        <li>Click on the <b>nine dots</b> in the bottom left corner and open "Terminal".</li>
        <li>Open the "erase.txt" file stored in the "Documents" folder and copy the first command.</li>
        <li>Paste the text in the "Terminal" and hit <b>Enter</b>.</li>
        <li>Confirm that the hard drive is "not frozen" See image below. If it's "frozen" contact support at "yeticold.slack.com".</li>
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
        <li>Your laptop has been erased. If you don't want to keep your Primary laptop as a watch only repeat steps 1 to 15 using your Primary laptop.</li>
        <li>When both laptops have been erased you have completed Yeti Level 3 setup.</li>
      </ol>
    </div>
  </div>
</template>

<script>
import navbarcold from './navbarcold'
export default {
  components: {
    navbarcold
  }
}
</script>
