<template>
	<div class="list">
		<div class="loop">
			<div class="loop_wrap">
				<div class="loop_con">
					<div class="loop_img fl">
						<a href="#">
							<img src="../assets/20160404034705769.jpg" height="319" width="400">
						</a>
					</div>

					<div class="loop_txt fl">
						<h1>The Base Height Phuket普吉岛高层公寓</h1>
						<h2>均价:&nbsp;<span>20000元/m</span></h2>
						<h2>开盘时间：已开盘</h2>
						<h2>楼盘特色：水景住宅</h2>
						<h2>装修情况：精装</h2>
						<div class="location">泰国</div>
					</div>
				</div>
			</div>
		</div>

		<div class="loop">
			<div class="loop_wrap">
				<div class="loop_con">
					<div class="loop_img fl">
						<a href="#">
							<img src="../assets/20161110024538900.jpg" height="800" width="632">
						</a>
					</div>

					<div class="loop_txt fl">
						<h1>The Deck Patong甲板巴东公寓</h1>
						<h2>均价:&nbsp;<span>20000元/m</span></h2>
						<h2>开盘时间：已开盘</h2>
						<h2>楼盘特色：水景住宅</h2>
						<h2>装修情况：精装</h2>
						<div class="location">泰国</div>
					</div>
				</div>
			</div>
		</div>

		<div class="loop">
			<div class="loop_wrap">
				<div class="loop_con">
					<div class="loop_img fl">
						<a href="#">
							<img src="../assets/20161110014838248.jpg" height="542" width="800">
						</a>
					</div>

					<div class="loop_txt fl">
						<h1>富力公主湾</h1>
						<h2>均价:&nbsp;<span>18000元/m</span></h2>
						<h2>开盘时间：已开盘</h2>
						<h2>楼盘特色：水景住宅</h2>
						<h2>装修情况：精装</h2>
						<div class="location">新山</div>
					</div>
				</div>
			</div>
		</div>



		<div class="loop">
			<div class="loop_wrap">
				<div class="loop_con">
					<div class="loop_img fl">
						<a href="#">
							<img src="../assets/20160404034705769.jpg" height="319" width="400">
						</a>
					</div>

					<div class="loop_txt fl">
						<h1>The Base Height Phuket普吉岛高层公寓</h1>
						<h2>均价:&nbsp;<span>20000元/m</span></h2>
						<h2>开盘时间：已开盘</h2>
						<h2>楼盘特色：水景住宅</h2>
						<h2>装修情况：精装</h2>
						<div class="location">泰国</div>
					</div>
				</div>
			</div>
		</div>

		<div class="loop">
			<div class="loop_wrap">
				<div class="loop_con">
					<div class="loop_img fl">
						<a href="#">
							<img src="../assets/20161110024538900.jpg" height="800" width="632">
						</a>
					</div>

					<div class="loop_txt fl">
						<h1>The Deck Patong甲板巴东公寓</h1>
						<h2>均价:&nbsp;<span>20000元/m</span></h2>
						<h2>开盘时间：已开盘</h2>
						<h2>楼盘特色：水景住宅</h2>
						<h2>装修情况：精装</h2>
						<div class="location">泰国</div>
					</div>
				</div>
			</div>
		</div>

		<div class="loop">
			<div class="loop_wrap">
				<div class="loop_con">
					<div class="loop_img fl">
						<a href="#">
							<img src="../assets/20161110014838248.jpg" height="542" width="800">
						</a>
					</div>

					<div class="loop_txt fl">
						<h1>富力公主湾</h1>
						<h2>均价:&nbsp;<span>18000元/m</span></h2>
						<h2>开盘时间：已开盘</h2>
						<h2>楼盘特色：水景住宅</h2>
						<h2>装修情况：精装</h2>
						<div class="location">新山</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'list'
}
</script>
<style scoped>
	.loop{
		border-bottom: 2px solid #ccc;
		padding: 0.24rem 0;
		height: 3.2rem;
	}
	.loop_wrap{
		width: 93%;
		height: 100%;
		margin: 0 auto;
	}
	.loop_con{
		height: 100%;
	}
	.fl{
		float: left;
	}
	.loop_img{
		width: 50%;
	}
	.loop_img img{
		width: 100%;
		max-height: 140px;
	}
	.loop_txt{
		width: 45%;
		height: 100%;
		margin-left: 5%;
		position: relative;
		right: 0;
	}
	.loop_txt h1{
		color: #000000;
		font-size: 0.32rem;
	}
	.loop_txt h2{
		font-size: 0.24rem;
		margin-top: 0.01rem;
	}
	.loop_txt h2 span{
		color: red;
	}
	.location{
		width: 100%;
		text-align: right;
		color: #666666;
		font-size: 0.02rem;
		background: url(../assets/liver.png) no-repeat 75% 100%;
		position: absolute;
		bottom: 0;
	}
</style>