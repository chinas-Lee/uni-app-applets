<template>
	<view>
		<text>{{title}}</text>
		<top-header ></top-header>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'index',
		data() {
			return {
				title: 'Hello World'
			}
		},
		computed: {
			...mapGetters(['loginStatus'])
		},
		async created () {
			try {
				let result = await this.$asyncAjax.getMyHospital()
				console.log(result)
			} catch (e) {
				console.log(e)
			}
		},
		methods: {

		}
	}
</script>
<style>
	
</style>