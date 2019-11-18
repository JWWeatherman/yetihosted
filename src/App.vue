<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
  </div>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'App',
  mounted () {
  	let host = window.location.host.toUpperCase()
	if (host = 'COLD.YETICOLD.COM') {
	  console.log("repushing")
	  this.$router.push({path: '/Cold/step5'})
	}
	console.log(host)
	console.log("host above")
  },
  components: {
    navbar
  }
}
</script>

<style>@import "./styles/global-styles";</style>