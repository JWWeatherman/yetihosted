<template>
  <div>
    <navbarcold></navbarcold>
    <div class="container" style="margin-top: 3rem;">
      <h2>Cold Wallet Guide</h2>
      <p>These slides will walk you through <b>Sending</b> and <b>Reciving</b>.</p>
       <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="0"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;width:50%;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Receive1.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Receive: Step 1</h2> 
          <p style="color:black;">
            In the bitcoin core application on your Online Laptop click the Receive button in the menu bar.
          </p>
        </b-carousel-slide>

        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Receive2.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Receive: Step 2</h2> 
          <p style="color:black;">
            Click the "Create new receiving address" button outlined in red.
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Receive3.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Receive: Step 3</h2> 
          <p style="color:black;margin-bottom:5em;">
            Confirm that your wallet (outlined in red) shows "yetiwalletpriv"(offline laptop) or "yetiwalletpub"(online laptop).
          </p>
        </b-carousel-slide>
      </b-carousel>
      <b-carousel
        id="carousel-2"
        v-model="slide2"
        :interval="0"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;width:50%;margin-top:5em;margin-bottom:5em;"
        @sliding-start="onSlideStart2"
        @sliding-end="onSlideEnd2"
      >
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send1.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 1</h2> 
          <p style="color:black;">
           In the bitcoin core application on your Online Laptop click on the Send button (outlined in red).
          </p>
        </b-carousel-slide>

        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send2.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 2</h2> 
          <p style="color:black;">
            Fill out this page including at least a recipent and an amount. Then click on "Create Unsigned" (outlined in red).
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send3.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:white;">Send: Step 3</h2> 
          <p style="color:white;margin-bottom:10em;">
            Review your transaction then click "Create Unsigned" (outlined in red).
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send4.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:white;">Send: Step 4</h2> 
          <p style="color:white;margin-bottom:10em;">
            Click the "Save" button (outlined in red).
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send5.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 5</h2> 
          <p style="color:black;margin-bottom:3em;">
            Select the "Documents" Folder (outlined in red) and then click "Open" (outlined in orange).
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send6.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 6</h2> 
          <p style="color:black;margin-bottom:3em;">
            Rename the file name(outlined in red) to "unsigned.psbt" then click "Save"(outlined in orange).
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send7.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 7</h2> 
          <p style="color:white;margin-bottom:2em;">
            <ol>
                <li>Insert the usb drive labled "Transfer" to laptop.</li>
                <li>Delete all visable files in the USB drive.</li>
                <li>Copy the file labled <b>unsigned.psbt</b> to the inserted USB drive. The file is located in your <b>Documents</b> folder.</li>
                <li>Eject the USB drive.</li>
              <p></p>
            </ol>
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send7.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 8</h2> 
          <p style="color:white;margin-bottom:1em;">
            <ol>
                <li>Switch to your Offline laptop</li>
                <li>Insert the usb drive labled "Transfer" to laptop.</li>
                <li>Delete all visable files in the USB drive.</li>
                <li>Copy the file labled <b>unsigned.psbt</b> to the "Documents" Folder. The file is located in your usb drive.</li>
                <li>Eject the USB drive.</li>
              <p></p>
            </ol>
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send9.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 9</h2> 
          <p style="color:black;margin-bottom:2em;">
            In the bitcoin core application in the menu bar click file(outlined in red) > "Load PSBT from file..."
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send11.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 10</h2> 
          <p style="color:black;margin-bottom:3em;">
            Select the "unsigned.psbt" file (outlined in red) and then click "Open"(outlined in orange).
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send12.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 11</h2> 
          <p style="color:black;margin-bottom:2em;">
            Click on "Sign tx"(outlined in red).
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send13.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 12</h2> 
          <p style="color:black;margin-bottom:2em;">
            Click on "Save" (outlined in red).
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send14.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 13</h2> 
          <p style="color:black;margin-bottom:2em;">
            Select the "Documents" folder (outlined in red), Then rename the file to "signed.psbt" (outlined in orange), Then click "Save" (outlined in yellow).
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send7.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 14</h2> 
          <p style="color:white;margin-bottom:2em;">
            <ol>
                <li>Insert the usb drive labled "Transfer" to laptop.</li>
                <li>Delete all visable files in the USB drive.</li>
                <li>Copy the file labled <b>signed.psbt</b> to the inserted USB drive. The file is located in your <b>Documents</b> folder.</li>
                <li>Eject the USB drive.</li>
              <p></p>
            </ol>
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send7.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 15</h2> 
          <p style="color:white;margin-bottom:1em;">
            <ol>
                <li>Switch to your Online laptop</li>
                <li>Insert the usb drive labled "Transfer" to laptop.</li>
                <li>Delete all visable files in the USB drive.</li>
                <li>Copy the file labled <b>signed.psbt</b> to the "Documents" Folder. The file is located in your usb drive.</li>
                <li>Eject the USB drive.</li>
              <p></p>
            </ol>
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send9.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 16</h2> 
          <p style="color:black;margin-bottom:2em;">
            In the bitcoin core application in the menu bar click file(outlined in red) > "Load PSBT from file..."
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send18.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 17</h2> 
          <p style="color:black;margin-bottom:2em;">
            Select the "signed.psbt" file (outlined in red) located in your "Documents folder", Then click "Open" (outlined in orange).
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send19.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Send: Step 18</h2> 
          <p style="color:black;margin-bottom:2em;">
            Click on the "Broadcast Tx" button (outlined in red).
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/Send20.png"
              alt="image slot"
            >
          </template>
          <h2 style="color:black;">Finished</h2> 
          <p style="color:black;margin-bottom:0em;">
            You should see this page to confirm the transaction was broadcasted.
          </p>
        </b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
  import navbarcold from './navbarcold'
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        slide2: 0,
        sliding2: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      onSlideStart2(slide2) {
        this.sliding2 = true
      },
      onSlideEnd2(slide2) {
        this.sliding2 = false
      }
    },
  components: {
    navbarcold
  }
  }
</script>
