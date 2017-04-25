<template>
  <section>
  	<!-- header -->
  	<div id="header">
  	<div class="wraper">
  		<div class="logo fl">
  			<img src="../../assets/phonelogo.png">
  		</div>
  		<div class="searchBox fl">
  			<form class="sBox">
  				<input type="text" class="sBox_txt fl" placeholder="请输入您要查询的内容" name="">
  				<button class="sBox_btn fl" type="submit"></button>
  			</form>
  		</div>
  	</div>
  </div>
  	
  	<!-- swiper -->
	<swiper class="my-swipe" :options="swiperOption" ref="mySwiper">
		<swiper-slide class="silde"><img src="../../assets/58637c9e8e928.jpg" ></swiper-slide>
		<swiper-slide class="silde"><img src="../../assets/58637cb518751.jpg" ></swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
	</swiper>
	
	<!-- nav -->
	<div class="nav">
		<ul class="nav_ul">
			<li><a href="#"><img src="../../assets/phoneroundiconone.png"></a><h1>环球新盘</h1></li>
			<li><a href="#"><img src="../../assets/phoneroundiconotwo.png"></a><h1>国内楼盘</h1></li>
			<li><a href="#"><img src="../../assets/phoneroundiconothree.png"></a><h1>特惠楼盘</h1></li>
			<li><a href="#"><img src="../../assets/phoneroundiconofour.png"></a><h1>二手房产</h1></li>
			<li><a href="#"><img src="../../assets/phoneroundiconofive.png"></a><h1>海外考察</h1></li>
			<li><a href="#"><img src="../../assets/phoneroundiconosix.png"></a><h1>置业资讯</h1></li>
		</ul>
	</div>

	<!-- rec -->
	<div class="rec">
		<div class="rec_p">好盘推荐</div>
	</div>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'index',
  data () {
    return {
      swiperOption: {
	              pagination : '.swiper-pagination',
	              autoplay: 3000
	           }
    }
  },
  components: {
		       swiper, swiperSlide
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#header{
		background: rgba(0,0,0,0.5);
		padding: 0.16rem 0;
		position: fixed;
		top: 0;
		z-index: 2;
		width: 100%;
	}
	.wraper{
		width: 93%;
		margin: 0 auto;
	}
	.fl{
		float: left;
	}
	.logo{
		width: 23%;
	}
	.logo img{
		width: 100%;
	}
	.searchBox{
		width: 67%;
		margin-left: 4%;
	}
	.sBox{
		background: #fff;
		width: 100%;
		height: 0.64rem;
		border-radius: 5px;
		border: 1px solid #a7a7a7;
	}
	.sBox_txt{
		width: 84%;
		border: none;
		text-indent: 0.24rem;
		line-height: 0.6rem;
		color: #999999;
	}
	.sBox_btn{
		background: url(../../assets/headersearch.png) no-repeat center;
		width: 0.6rem;
		height: 0.6rem;
		background-size: 100% 100%;
		border: none;
	}

	.swiper-container .swiper-pagination-bullet-active{
		background: #0dc441!important
	}
 	.my-swipe {
    height: 5.2rem;
  }
.silde{width: 100%; height: 5.2rem;}
.silde img{width: 100%;height: 100%}

.nav{
	height: 4.6rem;
	width: 100%;
	padding-top: 0.13rem
}
.nav_ul{
	width: 93%;
	margin: 0 auto;
	list-style: none;
}
.nav_ul li{
	width: 21%;
	float: left;
	display: block;
	padding: 0 6% 0.14rem 6%;
}
.nav_ul li img{
	width: 100%;
}
.nav_ul li h1{
	text-align: center;
	line-height: 0.52rem;
	color: #1a1a1a;
	font-size: 0.34rem;
}
.rec{
	height: 0.38rem;
	width: 100%;
	border-bottom: 2px solid #eaeaea;
}
.rec_p{
	width: 30%;
	color: #333333;
	font-size: 0.24rem;
	line-height: 0.54rem;
	height: 0.54rem;
	margin: 0 auto -0.02rem auto;
	text-indent: 0.6rem;
	background: url(../../assets/like.png) no-repeat top left;
}
</style>
