<template>
  <div>
    <div class="container" style="margin-top: 3rem;">
      <h1>Receive</h1>
      <hr>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 1: Open the Receive Tab</h3> 
          <p class="card-text">In the Bitcoin Core application on your <b>Primary Laptop</b> click the <b>Receive</b> button in the menu bar.</p>
        </div>
        <img class="card-img-top" src="@/assets/Receive1.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 2: Create a New Address</h3> 
          <p class="card-text">Click <b>Create new receiving address</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Receive2.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 3: Send Bitcoin</h3> 
          <p class="card-text">Confirm that your wallet shows "yetiwalletpub". You can now send money to the wallet using the QR code or the address displayed below it.</p>
        </div>
        <img class="card-img-top" src="@/assets/Receive3.png" alt="Card image cap">
      </div>
      <p></p>
      <h1>Send</h1>
      <hr>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 1: Open Options</h3> 
          <p class="card-text">In the Bitcoin core application on your <b>Primary Laptop</b> click <b>settings</b> and then <b>Options</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/CC1.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 2: Open the Wallet tab</h3> 
          <p class="card-text">Click on <b>Wallet</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/CC2.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 3: Enable Coin Control</h3> 
          <p class="card-text">Check the <b>"Enable Coin Control features</b> box and the click <b>OK</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/CC3.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 4: Open the Send Tab</h3> 
          <p class="card-text">Click <b>Send</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send1.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 5: Open the Inputs page</h3> 
          <p class="card-text">Click <b>Inputs</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/CC4.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 6: Select UTXOs</h3> 
          <p class="card-text">Select the UTXO you wish to spend and then click <b>OK</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/CC5.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 7: Enter the Address and Amount</h3> 
          <p class="card-text">Paste the recipients address in the <b>Pay To</b> text box, then click <b>Create Unsigned</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/CC6.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 8: Create the PSBT</h3> 
          <p class="card-text">Review your transaction then click <b>Create Unsigned</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send3.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 9: Select Save</h3> 
          <p class="card-text">Click the <b>Save</b> button.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send4.png" alt="Card image cap">
      </div> 
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 10: Save the PSBT</h3> 
          <p class="card-text">Select the <b>Documents</b> Folder and then click <b>Open</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send5.png" alt="Card image cap">
      </div> 
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 11: Rename the PSBT</h3> 
          <p class="card-text">Rename the file to "unsigned.psbt" then click <b>Save</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send6.png" alt="Card image cap">
      </div> 
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 12: Unsigned PSBT to USB</h3> 
          <ol>
            <li>Insert the USB drive labeled "Transfer" to your <b>Primary Laptop</b>.</li>
            <li>Copy the file labeled "unsigned.psbt" to the inserted USB drive. The file is located in your "Documents" folder.</li>
            <li>Eject the USB drive.</li>
          </ol>
        </div>
      </div> 
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 13: Unsigned PSBT to Secondary Laptop</h3> 
          <ol>
            <li>Insert the USB drive labeled "Transfer" to your <b>Secondary Laptop</b>.</li>
            <li>Copy the file labeled "unsigned.psbt" to the "Documents" Folder.</li>
            <li>Eject the USB drive.</li>
          </ol>
        </div>
      </div> 
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 14: Load the PSBT</h3> 
          <p class="card-text">In Bitcoin Core click <b>file</b> and then <b>Load PSBT from file...</b></p>
        </div>
        <img class="card-img-top" src="@/assets/Send9.png" alt="Card image cap">
      </div> 
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 15: Select the PSBT</h3> 
          <p class="card-text">Select the "unsigned.psbt" file and then click <b>Open</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send11.png" alt="Card image cap">
      </div> 
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 16: Sign the PSBT</h3> 
          <p class="card-text">Click <b>Sign Tx</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send12.png" alt="Card image cap">
      </div> 
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 17: Save the PSBT</h3> 
          <p class="card-text">Click <b>Save</b> to save the newly signed PSBT.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send13.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 18: Save to Documents</h3> 
          <p class="card-text">Select the "Documents" Folder, change the name to "signed.psbt" and then click <b>Save</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send14.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 19: Signed PSBT to USB</h3> 
          <ol>
            <li>Insert the USB drive labeled "Transfer" to your <b>Secondary Laptop</b>.</li>
            <li>Copy the "signed.psbt" file from the "Documents" folder to the USB drive.</li>
            <li>Eject the USB drive.</li>
          </ol>
        </div>
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 20: Signed PSBT to Primary Laptop</h3> 
          <ol>
            <li>Insert the USB drive labeled "Transfer" to your <b>Primary Laptop</b>.</li>
            <li>Copy the file labeled "signed.psbt" to the "Documents" Folder. The file is located in your USB drive.</li>
            <li>Eject the USB drive.</li>
          </ol>
        </div>
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 21: Load Signed PSBT</h3> 
          <p class="card-text">In Bitcoin Core click <b>file</b> and then <b>Load PSBT from file...</b></p>
        </div>
        <img class="card-img-top" src="@/assets/Send9.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 22: Select Signed PSBT</h3> 
          <p class="card-text">Select the "signed.psbt" file in your "Documents" folder and then click <b>Open</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send18.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 23: Broadcast the Transaction</h3> 
          <p class="card-text">Click <b>Broadcast Tx</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send19.png" alt="Card image cap">
      </div>
      <div class="card my-5" style="width: 50%;">
        <div class="card-body">
          <h3>Step 24: Confirm Broadcast</h3> 
          <p class="card-text">Review the page and then click <b>Close</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send20.png" alt="Card image cap">
      </div>
    </div>
  </div>
</template>
