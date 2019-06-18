<template>
	<view>
		<view class="home-list" v-for="(item, index) in meetingList" :key="index">
			<text class="title">{{item.title}}</text>
			<view>
				<image class="image" :src="item.image"></image>
				<view class="address-box">
					<view>
						<image class="address-icon" src="./imgs/gps.png"></image>
					</view>
					<view>
						<view class="text address-text">
							<text>{{item.city}}</text>
							|
							<text>{{item.address}}</text>
						</view>
						<view class="text">{{item.time}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {
				meetingList: [
					{
						title: '京医论坛暨2017国籍心血管疾病药物治疗高峰论坛京 医论坛暨2017国籍心血管疾病药物治疗高峰论坛',
						city: '南京',
						address: '香格里拉大酒店（江苏省南京市江苏省南京市香格里拉 南京香格香格里拉大酒店',
						time: '2018·04·31～2018·05·03',
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg'
					},
					{
						title: '京医论坛暨2017国籍心血管疾病药物治疗高峰论坛京 医论坛暨2017国籍心血管疾病药物治疗高峰论坛',
						city: '南京',
						address: '香格里拉大酒店（江苏省南京市江苏省南京市香格里拉 南京香格香格里拉大酒店',
						time: '2018·04·31～2018·05·03',
						image: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg'
					}
				]
			}
		},
		computed: {
		},
		created () {
		},
		methods: {
			
		}
	}
</script>
<style lang="scss">
	.home-list{
		padding-bottom:10px;
		margin:0 20upx;
		>.title{
			@include font($sm-size, false, $titleColor);
		}
		.image{
			@include round($hundred-percentage, flase, $five-length);
		}
		.address-box{
			@include flex(flex-start);
		}
		.text{
			@include font($xs-size, false, $secondaryColor);
		}
		.address-icon{
			@include widthHeight(16px, 16px);
			margin-right:$five-length;
		}
	}
</style>