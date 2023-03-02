<script>
import HelloWorld from './components/HelloWorld.vue'
import CardComponent from './components/CardComponent.vue'

export default{
	components: {
		HelloWorld,
		CardComponent,
	}
}
</script>

<template>
  <router-view/>
</template>

<style lang="scss">
@import "./assets/all";
</style>


