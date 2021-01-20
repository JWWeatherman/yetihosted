<template>
  <div>
    <div class="container" style="margin-top: 3rem;">
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Receive: Step 1</h3> 
          <p class="card-text">In the Bitcoin Core application on your <b>Primary Laptop</b> click the <b>Receive</b> button in the menu bar.</p>
        </div>
        <img class="card-img-top" src="@/assets/Receive1.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Receive: Step 2</h3> 
          <p class="card-text">Click <b>Create new receiving address</b> (outlined in red).</p>
        </div>
        <img class="card-img-top" src="@/assets/Receive2.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Receive: Finished</h3> 
          <p class="card-text">Confirm that your wallet (outlined in red) shows "yetiwalletpub". You can now send money to the wallet using the QR code or the address displayed bellow it.</p>
        </div>
        <img class="card-img-top" src="@/assets/Receive3.png" alt="Card image cap">
      </div>

      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 1</h3> 
          <p class="card-text">In the Bitcoin core application on your <b>Primary Laptop</b> open up <b>settings</b> > <b>options</b> (outlined in red).</p>
        </div>
        <img class="card-img-top" src="@/assets/CC1.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 2</h3> 
          <p class="card-text">Click on <b>Wallet</b> (outlined in red).</p>
        </div>
        <img class="card-img-top" src="@/assets/CC2.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 3</h3> 
          <p class="card-text">Make sure the "Enable Coin Control features" is checked (outlined in red). Then click "Ok" (outlined in orange).</p>
        </div>
        <img class="card-img-top" src="@/assets/CC3.png" alt="Card image cap">
      </div>

      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 4</h3> 
          <p class="card-text">Click <b>Send</b> (outlined in red).</p>
        </div>
        <img class="card-img-top" src="@/assets/Send1.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 5</h3> 
          <p class="card-text">Click <b>Inputs</b> (outlined in red).</p>
        </div>
        <img class="card-img-top" src="@/assets/CC4.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 6</h3> 
          <p class="card-text">Your UTXOs will be listed here displaying their amount (outlined in red), Select the utxos you wish to send and then click "Ok" (outlined in orange). You must send the full amount in the UTXO.</p>
        </div>
        <img class="card-img-top" src="@/assets/CC5.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 7</h3> 
          <p class="card-text">Paste in your recipient address (outlined in red). Then click on <b>Create Unsigned</b> (outlined in orange).</p>
        </div>
        <img class="card-img-top" src="@/assets/CC6.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 8</h3> 
          <p class="card-text">Review your transaction then click <b>Create Unsigned</b> (outlined in red).</p>
        </div>
        <img class="card-img-top" src="@/assets/Send3.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 9</h3> 
          <p class="card-text">Click the <b>Save</b> button (outlined in red).</p>
        </div>
        <img class="card-img-top" src="@/assets/Send4.png" alt="Card image cap">
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 10</h3> 
          <p class="card-text">Select the <b>Documents</b> Folder (outlined in red) and then click <b>Open</b> (outlined in orange).</p>
        </div>
        <img class="card-img-top" src="@/assets/Send5.png" alt="Card image cap">
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 11</h3> 
          <p class="card-text">Rename the file name (outlined in red) to "unsigned.psbt" then click <b>Save</b> (outlined in orange).</p>
        </div>
        <img class="card-img-top" src="@/assets/Send6.png" alt="Card image cap">
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 12</h3> 
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
          <h3>Send: Step 83</h3> 
          <ol>
            <li>Insert the USB drive labeled "Transfer" to your <b>Secondary Laptop</b>.</li>
            <li>Copy the file labeled "unsigned.psbt" to the "Documents" Folder. The file is located in your USB drive.</li>
            <li>Eject the USB drive.</li>
          </ol>
        </div>
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 14</h3> 
          <p class="card-text">In the Bitcoin Core application in the menu bar click <b>file</b> (outlined in red) > <b>Load PSBT from file...</b></p>
        </div>
        <img class="card-img-top" src="@/assets/Send9.png" alt="Card image cap">
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 15</h3> 
          <p class="card-text">Select the "unsigned.psbt" file (outlined in red) and then click <b>Open</b> (outlined in orange).</p>
        </div>
        <img class="card-img-top" src="@/assets/Send11.png" alt="Card image cap">
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 16</h3> 
          <p class="card-text">Click <b>Sign Tx</b> (outlined in red).</p>
        </div>
        <img class="card-img-top" src="@/assets/Send12.png" alt="Card image cap">
      </div> 
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 17</h3> 
          <p class="card-text">Click <b>Save</b> (outlined in red).</p>
        </div>
        <img class="card-img-top" src="@/assets/Send13.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 18</h3> 
          <p class="card-text">Select the "Documents" folder (outlined in red), Then rename the file to "signed.psbt" (outlined in orange), Then click <b>Save</b> (outlined in yellow).</p>
        </div>
        <img class="card-img-top" src="@/assets/Send14.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 19</h3> 
          <ol>
            <li>Insert the USB drive labeled "Transfer" to your <b>Secondary Laptop</b>.</li>
            <li>Copy the file labeled "signed.psbt" to the inserted USB drive. The file is located in your "Documents" folder.</li>
            <li>Eject the USB drive.</li>
          </ol>
        </div>
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 20</h3> 
          <ol>
            <li>Insert the USB drive labeled "Transfer" to your <b>Primary Laptop</b>.</li>
            <li>Copy the file labeled "signed.psbt" to the "Documents" Folder. The file is located in your USB drive.</li>
            <li>Eject the USB drive.</li>
          </ol>
        </div>
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 21</h3> 
          <p class="card-text">In the Bitcoin Core application in the menu bar click <b>file</b> (outlined in red) > <b>Load PSBT from file...</b></p>
        </div>
        <img class="card-img-top" src="@/assets/Send9.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 22</h3> 
          <p class="card-text">Select the "signed.psbt" file (outlined in red) located in your "Documents folder", Then click <b>Open</b> (outlined in orange).</p>
        </div>
        <img class="card-img-top" src="@/assets/Send18.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Step 23</h3> 
          <p class="card-text">Click <b>Broadcast Tx</b> (outlined in red).</p>
        </div>
        <img class="card-img-top" src="@/assets/Send19.png" alt="Card image cap">
      </div>
      <div class="card mb-3" style="width: 50%;">
        <div class="card-body">
          <h3>Send: Finished</h3> 
          <p class="card-text">You should see this page to confirm the transaction was broad casted.</p>
        </div>
        <img class="card-img-top" src="@/assets/Send20.png" alt="Card image cap">
      </div>
    </div>
  </div>
</template>