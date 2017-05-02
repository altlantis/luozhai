
<style scoped>
	*{margin: 0;padding: 0}
	.header{
		height: .9rem;
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #fff;
		z-index: 2;
		border-bottom: 1px solid #e4e4e4;
	}
	.header img{
		width: .38rem;
		height: .5rem;
	}
	.header_con{
		width: 93%;
		height: 100%;
		margin: 0 auto;
	}

.fl{
	float: left;
}
.btn{
	width: .45rem;
	height: .5rem;
	position: absolute;
	top: 30%;
	left: 2%;
	border: none;
	background: #fff;

}
.header h1{
	margin: auto;
	font-size: .36rem;
	color: #333333;
	text-align: center;
	width: 1.6rem;
	height: 100%;
	line-height: 250%;
}
.menu_btn{
	width: 0.44rem;
	height: 0.4rem;
	position: fixed;
	top: 2%;
	right: 2%;
	background: url(../../assets/headermenu.png) no-repeat center;
	background-size: 0.44rem 0.4rem;
	border: none;
	outline: none;
}
.menu{
	width: 4.4rem;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 10;
	border: 1px solid #ccc;
	border-radius: .2rem;
	background: #fff;
}
.menu a{
	height: 0.8rem;
	padding: 0.2rem 0 0 0.2rem;
	display: block;
	color: #939393;
	font-size: 0.32rem;
}

.m_btn{
	width: 0.44rem;
	height: 0.4rem;
	position: fixed;
	top: 2%;
	right: 2%;
	border: none;
	outline: none;
}
.m_btn img{
	width: 0.44rem;
	height: 0.4rem;
}
.menu ul{
	width: 100%;
	margin-top: .9rem; 
}
.menu ul li{
	height: 1rem;
	border-bottom: 1px solid #ccc;
}
.menu ul img{
	width: .46rem;
	height: .46rem;
	display: inline-block;
}

.my_swiper{
	height: 5rem;
	width: 100%;
	margin-top: 0.9rem;
}
.my_swiper img{
	height: 5rem;
	width: 100%;
}
.content{
	width: 100%;
}
.content_address{
	width: 93%;
	height: 2.4rem;
	margin: 0.2rem auto;
	border-bottom: 1px solid #ccc;
}
.content_address p{
	color: #262626;
	font-size: 0.38rem;
	width: 100%;
}
.content_address h1{
	width: 50%;
	color: #fc5d0d;
	font-size: 0.44rem;
	float: left;
}
.content_address button{
	float: left;
}
.content_address span{
	font-size: .3rem;
	color: #262626;

}
.content_info h1{
	height: 1rem;
	line-height: 1rem;
	text-indent: 0.1rem;
	display: block;
	color: #262626;
	font-size: 0.32rem;
	border-bottom: 1px solid #ccc;
}
.content_info p{
	margin-top: 0.6rem;
	line-height: 0.5rem;
	text-indent: 7%;
	font-size: .28rem;
}
.content_info h2{
	height: 1rem;
	margin-top: 0.3rem;
	line-height: 1rem;
	text-indent: 0.4rem;
	border-bottom: 1px solid #ccc;
	border-top: 1px solid #ccc;
	font-weight: normal;
	font-size: 0.32rem;
	color: #262626;
}
.content_last{
	
}
.last_title{
	height: 1rem;
	border-bottom: 1px solid #ccc;
}
.last_title p{
	height: 100%;
	width: 33%;
	margin-left: 33%;
	line-height: 1rem;
	text-align: center;
	border-bottom: 2px solid #f25824;
	font-size: 0.34rem;
	color: #f25824;
}
.content_last ul{
	margin-top: 0.2rem;
	padding-left: 0.2rem;
}
.content_last ul li{
	height: 0.4rem;
	margin-top: 0.2rem;
}
.content_last ul li span{
	color: #999999;
}
.content_last ul li span:after{
	content: "\00A0\00A0\00A0\00A0";
}
.footer{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 1rem;
}
.footer img{
	width: 100%;
	height: 100%;
}
.fl{
	float: left;
}
.foot_btn1{
	width: 15%;
	background: #fff;
	height: 1rem;
	font-size: .2rem;
	border: none;
}
.foot_btn1 span{
	width: 45%;
	height: 0.5rem;
	margin: 0 auto;
	display: block;
}
.foot_btn2{
	width: 27%;
	background: #3bbf48;
	height: 1rem;
	font-size: .4rem;
	color: #ffffff;
	border: none;
}
.foot_btn2 span{
	display: block;
	width: 26%;
	vertical-align: middle;
	display: inline-block;
	height: 0.56rem;
	
}
.foot_btn3{
	width: 58%;
	background: #f25824;
	height: 1rem;
	border: none;
	font-size: .44rem;
	color: #ffffff;
}
.foot_btn3 span{
	display: inline-block;
	width: 13%;
	height: .6rem;
	vertical-align: middle;
	
}
</style>

<template>
	<section>
	<!-- header -->
	<div class="header">
		<div class="header_con">
			<button class="btn">
				<img src="../../assets/headerarrow.png" height="45" width="37">
			</button>
			<h1>天悦东都</h1>
			<button type="button" class="menu_btn" @click="show=!show"></button>
		</div>
	</div>

	<!-- menu -->
	<div class="menu" v-if="show">
		<button class="m_btn" @click="show=!show">
			<img src="../../assets/navicon.png" height="38" width="43">
		</button>
		<ul>
			<li>
				<router-link to='/index'>
					<img src="../../assets/foothome.png" height="44" width="45">
					&nbsp;&nbsp;&nbsp;首页
				</router-link>
			</li>
			<li>
				<router-link to='/'>
					<img src="../../assets/footsettings.png" height="44" width="45">
					&nbsp;&nbsp;&nbsp;环球新盘
				</router-link>
			</li>
			<li>
				<router-link to='/'>
					<img src="../../assets/naveiconthree.png" height="39" width="45">
					&nbsp;&nbsp;&nbsp;国内楼盘
				</router-link>
			</li>
			<li>
				<router-link to='/'>
					<img src="../../assets/naveiconhome.png" height="47" width="44">
					&nbsp;&nbsp;&nbsp;二手房产
				</router-link>
			</li>
			<li>
				<router-link to='/'>
					<img src="../../assets/deals.png" height="44" width="45">
					&nbsp;&nbsp;&nbsp;特惠房产
				</router-link>
			</li>
			<li>
				<router-link to='/'>
					<img src="../../assets/footworld.png" height="44" width="45">
					&nbsp;&nbsp;&nbsp;海外考察团
				</router-link>
			</li>
			<li>
				<router-link to='/'>
					<img src="../../assets/naveiconsystem.png" height="37" width="45">
					&nbsp;&nbsp;&nbsp;置业资讯
				</router-link>
			</li>
		</ul>
	</div>
	
		<!-- swiper -->
		<swiper class="my_swiper" :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide class="silde"><img src="../../assets/house1.png"></swiper-slide>
		    <swiper-slide class="silde"><img src="../../assets/house22222.jpg"></swiper-slide>
		    <swiper-slide class="silde"><img src="../../assets/house3333.jpg"></swiper-slide>
		    <swiper-slide class="silde"><img src="../../assets/house44444.jpg"></swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
  		</swiper>
		
		<!-- content -->
		<div class="content">
			<div class="content_address">
				<p>天悦东都</p>
				<h1>5100元/m[在售]</h1>
				<button>品牌企业</button>
				<button>豪华绿化</button>
				<button>近地铁</button><br><br>
				<span>入驻事件：2016年2月20号</span><br>
				<span>详细地址：长乐东路地铁一号长乐站</span>
			</div>
			<div class="content_info">
				<h1>楼盘概况</h1>
				<p>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;天悦东都位于城市东西主轴长乐东路，30万m2恢弘体量，占据长乐路商圈、浐河生态圈交汇之处显赫区位，周边四医大西京医院、四医大唐都医院等三级甲等医疗配套，为家人健康保驾护航;黄河、西光等重点中小学、华润万家超市一应俱全;步行可达浐河滨水河岸，奢享2.6公里生态滨河公园，毗邻生态湿地公园和雁鸣湖，独享河、林、岸、岛等都市稀缺生态资源;地铁一号线近在咫尺，三条地铁线路环伺全城，帷幄城市脉搏畅达从容生活。天悦东都以现代简约的建筑立面，庭院式醇美景观，地铁口精品商业，高端材质的精工品质，四大科技化的智能生活配套，七大品质体系，带来城市繁华之境，悦动城市人居生活之美。4大科技配套提升，刷新城东生活高度，VIP刷卡电梯，安全无忧逸境生活;新风系统，享受每一次呼吸的畅快;厨房垃圾处理系统，现代厨房的细节关怀;直饮水系统，为家人健康守护。7大悦生活品质体系，悦色，长乐中轴、浐河之畔、拥揽繁华地;悦动，地铁1、6、8号线接驳纵揽都会之心;悦知，重点名校环伺，书香门第成才之路;悦城，坐拥醇熟商圈，礼遇舒适人生;悦居，简约时尚立面，围合式庭院景观;悦享，现代精工雕著，建筑品质品质人居典范;悦逸，地铁口精品商业，精端物业管理。天悦东都项目占地80亩，总建面26万平米，共8栋楼，5栋两梯四户，3栋两梯五户。小区绿化率30%，共两期开发。
				</p>

				<h2>全部动态</h2>
				<h2>全部户型</h2>
			</div>

			<div class="content_last">
				<div class="last_title">
					<p>详情</p>
				</div>
				<ul>
					<li><span>开发商</span>陕西新阳房地产开发有限公司</li>
					<li><span>开盘时间</span>2016年02月02日</li>
					<li><span>交房时间</span>2016-12-31</li>
					<li><span>物业类型</span>住宅</li>
					<li><span>产权年限</span></li>
					<li><span>建筑类型</span></li>
					<li><span>装修情况</span></li>
					<li><span>建筑面积</span>53333m</li>
					<li><span>占地面积</span>53333m</li>
					<li><span>容积率</span>5</li>
					<li><span>绿化率</span>30%</li>
				</ul>
			</div>
		</div>

		<!-- footer -->
		<div class="footer">
			<button class="foot_btn1 fl">
				<span>
					<img src="../../assets/specialtopicon.png" height="45" width="45" alt="">
				</span>
				顶部
			</button>
			<button class="foot_btn2 fl">
				<span>
					<img src="../../assets/specialchaticon.png" height="53" width="53" alt="">
				</span>
				留言
			</button>
			<button class="foot_btn3 fl">
				<span>
					<img src="../../assets/specialcalicon.png" height="53" width="53" alt="">
				</span>
				点击致电
			</button>
		</div>
	</section>
</template>

<script type="text/javascript">
	import { swiper, swiperSlide } from 'vue-awesome-swiper'

	export default{
		name : 'detail',
		data(){
			return{
				show : 0,
		        swiperOption: {
		          autoplay: 2000,
		          initialSlide: 1,
		          loop: true,
		          pagination: '.swiper-pagination',
		        }
			}
		},
		methods : {
			test(){
				console.log(1)
			}
		},
		components: {
		    swiper,
		    swiperSlide
		  }

	}
</script>