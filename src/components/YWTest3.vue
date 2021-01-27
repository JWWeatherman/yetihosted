<template>
  <div>
    <navbarwarm></navbarwarm>
    <div class="container" style="margin-top: 3rem;">
      <h2 style="margin-bottom:35px;">Step 17: Erase your Laptop</h2>
      <p>Erase your Laptop to ensure your Bitcoin can only be spent using your seed packets.</p>
       <ol>
          <li>Power off your Ubuntu laptop</b>.</li>
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
          <li>Paste the text in the terminal and hit <b>Enter</b>. After a few minutes you should see           the        following output:</li>
          <div class="card mb-3" style="width: 50%;">
            <img class="card-img-top" src="@/assets/terminal3.png" alt="Card image cap">
          </div>
          <li>Your laptop has now been erased and you have completed setup of Yeti Level Two.</li>
       </ol>
    </div>
  </div>
</template>

<script>
import navbarwarm from './navbarwarm'
import wwg from './WWG'
export default {
  components: {
    navbarwarm,
    wwg 
  }
}
</script>
