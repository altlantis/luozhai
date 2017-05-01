<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
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
.header_ser{
	width: 80%;
	height: .9rem;
	position: absolute;
	left: 10%;
	font-size: 0.36rem;
	color: #333333;
	text-align: center;
	border-radius: .1rem;
	border: 1px solid #e7e7e7;
	background: #f8f8f8;
}
.header_ser input{
	width: 88%;
	height: .9rem;
	border: none;
	background: #f8f8f8;
	float: left;
}
.header_ser button{
	width: 12%;
	height: .9rem;
	border: none;
	background: url(../../assets/headersearch.png) no-repeat center;
	float: left;
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
.list{
	margin-top: 0.9rem;
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
				<form class="header_ser">
					<input type="text" placeholder="输入楼盘名称或地址" name="">
					<button></button>
				</form>
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
		<list></list>
		<foot></foot>
	</section>
</template>

<script type="text/javascript">
	import list from '../../components/list.vue'
	import foot from '../../components/foot.vue'
	export default{
		name : 'loupan',
		data(){
			return{
				show : 0
			}
		},
		components: {
			list,
			foot
		}

	}
</script>