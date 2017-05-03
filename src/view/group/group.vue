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

.nav{
	width: 100%;
	height: .5rem;
	list-style: none;
	margin-top: .9rem;
	padding-top: .3rem;
}
.nav li{
	height: .4rem;
	width: 32.3%;
	float: left;
	text-align: center;
	font-size: 0.26rem;
}
.tel{
	width: 100%;
}
.tel_con{
	width: 93%;
	margin: 0 auto;
}

.tel_con img{
	width: 100%;
	height: 9rem;
}

.tel form{
	height: .8rem;
	width: 100%;
}
.tel input{
	height: 100%;
	width: 63%;
	background: #f0f0f0;
	border: none; 
	float: left;
}
.tel button{
	height: 100%;
	width: 30%;
	background: #fc5d0d;
	text-align: center;
	float: left;
	color: white;
	margin-left: 5%;
	border-radius: 10%;
}
.mg{
	margin-top: .5rem;
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
				<h1>特惠房产</h1>
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

		<!-- nav -->
		<ul class="nav">
			<li style="color:#fc5d0d; border-right:1px solid #ccc">本月发布</li>
			<li style="border-right:1px solid #ccc">即将发布</li>
			<li>往期回顾</li>
		</ul>

		<!-- cantuan -->
		<div class="tel mg">
			<div class="tel_con">
				<img src="../../assets/cantuan111.jpg" height="444" width="383"><br>
				<form>
					<input type="text" placeholder="请输入手机号" name="">
					<button>马上参团</button>
				</form>
			</div>
		</div>

		<div class="tel mg">
			<div class="tel_con">
				<img src="../../assets/cantuan2222.jpg" height="444" width="382"><br>
				<form>
					<input type="text" placeholder="请输入手机号" name="">
					<button>马上参团</button>
				</form>
			</div>
		</div>

		<div class="tel mg">
			<div class="tel_con">
				<img src="../../assets/cantuan3333.jpg" height="444" width="383"><br>
				<form>
					<input type="text" placeholder="请输入手机号" name="">
					<button>马上参团</button>
				</form>
			</div>
		</div>

	<foot></foot>
	
	</section>
</template>

<script type="text/javascript">
	import foot from '../../components/foot.vue'
	export default{
		name : "group",
		data(){
			return{
				show : 0
			}
		},
		components :{
			foot
		}
	}
</script>