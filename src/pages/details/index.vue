<template>
	<view>
		<text class="title head" @tap="to">{{title}}</text>
	</view>
</template>

<script>
	export default {
		name: 'details',
		data() {
			return {
				title: 'Hello details'
			}
		},
		computed: {
		},
		onLoad (item) {
			console.log(item)
		},
		created () {
			console.log('created')
		},
		mounted () {
			console.log('mounted')
		},
		methods: {
			to () {
				uni.navigateTo({
					url: '/pages/sign-up/my-sign-up'
				});
			}
		}
	}
</script>
<style lang="scss">
	.title{
		color: $titleColor;
	}
</style>