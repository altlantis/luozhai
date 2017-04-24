<template>
  
  <section>
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
  
  		<swiper class="my-swipe" :options="swiperOption" ref="mySwiper">
  			<swiper-slide class="silde"><img src="../../assets/58637c9e8e928.jpg" ></swiper-slide>
  			<swiper-slide class="silde"><img src="../../assets/58637cb518751.jpg" ></swiper-slide>
  			<div class="swiper-pagination"  slot="pagination"></div>
  		</swiper>
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
	section{margin-top: .9rem;}
 	.my-swipe {
    height: 3.6rem;
    color: #ffffff;
    font-size: 30px;
  }
 .my-swipe	.slide{width: 100%; height: 3.6rem;}
 .my-swipe	.slide img{width: 100%;height: 100%}
</style>
