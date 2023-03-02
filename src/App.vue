<script >// 有setup 代表他是Composition API
import HelloWorld from './components/HelloWorld.vue'
import CardComponent from './components/CardComponent.vue'

// 改成 option API
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


