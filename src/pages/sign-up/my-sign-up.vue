<template>
	<view>
		<text class="title" @tap="to">{{title}}</text>
	</view>
</template>

<script>
	export default {
		name: 'mySignUp',
		data() {
			return {
				title: 'Hello mySignUp'
			}
		},
		computed: {
		},
		created () {
		},
		methods: {
			to () {
				uni.navigateTo({
					url: '/pages/details/index'
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