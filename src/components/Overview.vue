<template>
  <div>
    <nav class="form-row navbar navbar-light bg-primary">
        <img src="@/assets/logo.png" width="50" height="50" class="align-top" alt="">
        <h3 style="color:white;margin:0;">Yeti Bitcoin Wallet</h3>
    </nav>
    <div class="container" style="margin-top: 3rem;">
      <h2></h2>
      <div class="hero-unit">
          <h1>Yeti Level 3 Wallet</h1>
          <p>Level 3 is recommended for more than $50,000 USD worth of Bitcoin. It is a 3 of 7 HD Multisig setup where private keys are never on an Internet connected device.</p>
          <p>
            <input v-on:click="Cold" style="margin-bottom:50px;" class="btn btn-primary btn-large" type="submit" id="next" value="Level 3">
          </p>
      </div>
      <div class="hero-unit">
          <h1>Yeti Level 2 Wallet</h1>
          <p>Level 2 is recommended for storing between $5,000 and $50,000 USD worth of Bitcoin. It is a 3 of 7 HD Multisig setup that requires only a single laptop.</p>
          <p>
            <input v-on:click="Warm" style="margin-bottom:50px;" class="btn btn-warning btn-large" type="submit" id="next" value="Level 2">
          </p>
      </div>
      <div class="hero-unit">
          <h1>Yeti Level 1 Wallet</h1>
          <p>Level 1 is recommended for storing under $5,000 USD worth of Bitcoin. It is very easy to backup and restore and requires only a single computer to setup.</p>
          <p>
            <input v-on:click="Hot" style="margin-bottom:50px;" class="btn btn-danger btn-large" type="submit" id="next" value="Level 1">
          </p>
      </div>
      <!-- <a style="margin-top:30px;margin-bottom:30px;color:#585858;text-decoration: underline;" href="" v-on:click="Utils">Yeti Utilities</a> -->
      <p></p>
      <p style="color:light-gray;">For more information and the source code click <a href="https://github.com/JWWeatherman/yeticold">here</a> for the GitHub Repo.</p>
    </div>
  </div>
</template>

<script>
import navbarcold from './navbarcold'
export default {
  mounted () {
    let host = window.location.host.toUpperCase()
    if (host === 'THREE.YETICOLD.COM') {
      this.$router.push({path: '/Cold/step4'})
    }else if (host === 'TWO.YETICOLD.COM') {
      this.$router.push({path: '/Warm/step4'})
    }else if (host === 'ONE.YETICOLD.COM') {
      this.$router.push({path: '/Hot/step4'})
    }else if (host === 'REC.YETICOLD.COM') {
      this.$router.push({path: '/Cold/step6R'})
    }else if (host === 'DISC.YETICOLD.COM') {
      this.$router.push({path: '/Cold/step6'})
    }else if (host === 'GUIDE3.YETICOLD.COM') {
      this.$router.push({path: '/Cold/Guide/step1'})
    }else if (host === 'GUIDE2.YETICOLD.COM') {
      this.$router.push({path: '/Warm/Guide/step1'})
    }else if (host === 'GUIDE1.YETICOLD.COM') {
      this.$router.push({path: '/Hot/Guide/step1'})
    }else if (host === 'ERASE.YETICOLD.COM') {
      this.$router.push({path: '/erase'})
    }else if (host === 'CORE3.YETICOLD.COM') {
      this.$router.push({path: '/Cold/Guide/step1R'})
    }else if (host === 'CORE2.YETICOLD.COM') {
      this.$router.push({path: '/Warm/Guide/step1R'})
    }else if (host === 'CORE1.YETICOLD.COM') {
      this.$router.push({path: '/Hot/Guide/step1R'})
    }
  },
  methods: {
    Utils () {
      this.$router.push({path: '/Utils'})
    },
    Cold () {
      this.$router.push({path: '/Cold/step1'})
    },
    Warm () {
      this.$router.push({path: '/Warm/step1'})
    },
    Hot () {
      this.$router.push({path: '/Hot/step1'})
    }
  },
  components: {
    navbarcold
  }
}
</script>
