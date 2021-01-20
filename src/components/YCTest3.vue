<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Step 34: Erase your Laptops</h2>
      <p>Erase your Laptops to ensure your bitcoin can only be spent using your seed packets.</p>
      <ol>
        <li>Power off your <b>Secondary laptop</b>.</li>
        <li>Insert the usb drive you used to install Ubuntu.</li>
        <li>Boot up your laptop and click <b>Try Ubuntu</b>.</li>
        <li>Insert the usb drive labeled "Transfer" usb and copy the "erase.txt" file to the "Documents" folder.</li>
        <li>Click on the <b>nine dots</b> in the bottom left corner and open <b>Terminal</b>.</li>
        <li>Open the "erase.txt" file stored in the "Documents" folder and copy the first command.</li>
        <li>Paste the text in the terminal and hit <b>Enter</b>.</li>
        <li>Confirm that the hard drive is "not frozen". If it's "frozen" contact support at "yeticold.slack.com".</li>
        <div class="card mb-3" style="width: 50%;">
          <img class="card-img-top" src="@/assets/terminal1.png" alt="Card image cap">
        </div>
        <li>Open the "erase.txt" file stored in the "Documents" folder and copy the second command.</li>
        <li>Paste the text in the terminal and hit <b>Enter</b>. You should see the following output:</li>
        <div class="card mb-3" style="width: 50%;">
          <img class="card-img-top" src="@/assets/terminal2.png" alt="Card image cap">
        </div>
        <li>Open the "erase.txt" file stored in the "Documents" folder and copy the third command.</li>
        <li>Paste the text in the terminal and hit <b>Enter</b>.</li>
        <li>After a few minutes you should see the following output:</li>
        <div class="card mb-3" style="width: 50%;">
          <img class="card-img-top" src="@/assets/terminal3.png" alt="Card image cap">
        </div>
        <li>Your hard drive has now been erased. If you don't want to keep your Primary laptop as a watch only repeat steps 1 to 15</li>
      </ol>
      <p>Once both laptops has been erased you completed setting up your yeti cold storage.</p>
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