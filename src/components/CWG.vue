<template>
  <div>
    <div class="container" style="margin-top: 3rem;">
      <h1>Receive</h1>
      <hr>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 1: Open the Receive Tab</h3> 
          <p class="card-text">In the Bitcoin Core application on your <b>Primary Laptop</b> click the <b>Receive</b> button in the menu bar.</p>
        </div>
        <img class="card-img-top" src="@/assets/Receive1.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 2: Create a new address</h3> 
          <p class="card-text">Click <b>Create new receiving address</b> ().</p>
        </div>
        <img class="card-img-top" src="@/assets/Receive2.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 3: Send to address</h3> 
          <p class="card-text">Confirm that your wallet shows "yetiwalletpub". You can now send money to the wallet using the QR code or the address displayed bellow it.</p>
        </div>
        <img class="card-img-top" src="@/assets/Receive3.png" alt="Card image cap">
      </div>
      <p></p>
      <h1>Send</h1>
      <hr>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 1: Open the options page</h3> 
          <p class="card-text">In the Bitcoin core application on your <b>Primary Laptop</b> open up <b>settings</b> > <b>options</b> ().</p>
        </div>
        <img class="card-img-top" src="@/assets/CC1.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 2: Open the Wallet tab</h3> 
          <p class="card-text">Click on <b>Wallet</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/CC2.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 3: Enable Coin Control</h3> 
          <p class="card-text">Make sure the "Enable Coin Control features" is checked (). Then click "Ok".</p>
        </div>
        <img class="card-img-top" src="@/assets/CC3.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 4: Open the Send Tab</h3> 
          <p class="card-text">Click <b>Send</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send1.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 5: Open the Inputs page</h3> 
          <p class="card-text">Click <b>Inputs</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/CC4.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 6: Select the UTXOs you wish to send</h3> 
          <p class="card-text">Your UTXOs will be listed here displaying their amount, Select the utxos you wish to send and then click "OK". You must send the full amount in the UTXO.</p>
        </div>
        <img class="card-img-top" src="@/assets/CC5.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 7: Enter the recipient address</h3> 
          <p class="card-text">Paste in your recipient address in the the <b>Pay To</b> text box. Then click on <b>Create Unsigned</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/CC6.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 8: Create the PSBT</h3> 
          <p class="card-text">Review your transaction then click <b>Create Unsigned</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send3.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 9: Open the Save To page</h3> 
          <p class="card-text">Click the <b>Save</b> button.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send4.png" alt="Card image cap">
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 10: Save the PSBT to the Documents Folder</h3> 
          <p class="card-text">Select the <b>Documents</b> Folder and then click <b>Open</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send5.png" alt="Card image cap">
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 11: Rename the PSBT</h3> 
          <p class="card-text">Rename the file to "unsigned.psbt" then click <b>Save</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send6.png" alt="Card image cap">
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 12: Copy the PSBT to your USB drive</h3> 
          <ol>
            <li>Insert the USB drive labeled "Transfer" to your <b>Primary Laptop</b>.</li>
            <li>Delete all ".psbt" files if they exist.</li>
            <li>Copy the file labeled "unsigned.psbt" to the inserted USB drive. The file is located in your "Documents" folder.</li>
            <li>Eject the USB drive.</li>
          </ol>
        </div>
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 13: Copy the PSBT to your <b>Secondary Laptop</b></h3> 
          <ol>
            <li>Insert the USB drive labeled "Transfer" to your <b>Secondary Laptop</b>.</li>
            <li>Copy the file labeled "unsigned.psbt" to the "Documents" Folder. The file is located in your USB drive.</li>
            <li>Eject the USB drive.</li>
          </ol>
        </div>
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 14: Load the PSBT into Bitcoin Core</h3> 
          <p class="card-text">In the Bitcoin Core application in the menu bar click <b>file</b> > <b>Load PSBT from file...</b></p>
        </div>
        <img class="card-img-top" src="@/assets/Send9.png" alt="Card image cap">
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 15: Open the PSBT</h3> 
          <p class="card-text">Select the "unsigned.psbt" file and then click <b>Open</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send11.png" alt="Card image cap">
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 16: Sign the PSBT</h3> 
          <p class="card-text">Click <b>Sign Tx</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send12.png" alt="Card image cap">
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 17: Open the Save To page</h3> 
          <p class="card-text">Click <b>Save</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send13.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 18: Save the PSBT to your Documents Folder</h3> 
          <p class="card-text">Select the "Documents" Folder, Then rename the file to "signed.psbt", Then click <b>Save</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send14.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 19: Copy the Signed PSBT to your USB drive</h3> 
          <ol>
            <li>Insert the USB drive labeled "Transfer" to your <b>Secondary Laptop</b>.</li>
            <li>Copy the file labeled "signed.psbt" to the inserted USB drive. The file is located in your "Documents" folder.</li>
            <li>Eject the USB drive.</li>
          </ol>
        </div>
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 20: Copy the Signed PSBT to your Documents Folder</h3> 
          <ol>
            <li>Insert the USB drive labeled "Transfer" to your <b>Primary Laptop</b>.</li>
            <li>Copy the file labeled "signed.psbt" to the "Documents" Folder. The file is located in your USB drive.</li>
            <li>Eject the USB drive.</li>
          </ol>
        </div>
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 21: Open the Load PSBT page</h3> 
          <p class="card-text">In the Bitcoin Core application in the menu bar click <b>file</b> () > <b>Load PSBT from file...</b></p>
        </div>
        <img class="card-img-top" src="@/assets/Send9.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 22: Load the PSBT into Bitcoin Core</h3> 
          <p class="card-text">Select the "signed.psbt" file located in your "Documents folder", Then click <b>Open</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send18.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 23: Broadcast the Transaction</h3> 
          <p class="card-text">Click <b>Broadcast Tx</b>.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send19.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Step 24: Confirm it was successfully sent</h3> 
          <p class="card-text">You should see this page to confirm the transaction was broadcasted successfully.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send20.png" alt="Card image cap">
      </div>
    </div>
  </div>
</template>