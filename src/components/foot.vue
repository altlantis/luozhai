<template>
	<div class="footer">
		<ul>
			<li><a href=""><img src="../assets/foothome.png"></a><h1>首页</h1></li>
			<li><a href=""><img src="../assets/footsettings.png"></a><h1>海外</h1></li>
			<li><a href=""><img src="../assets/deals.png" height="44" width="45"></a><h1>特惠</h1></li>
			<li><a href=""><img src="../assets/footworld.png" height="44" width="45"></a><h1>考察团</h1></li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'foot'
}
</script>

<style scoped>
	.footer{
		height: 1rem;
		width: 100%;
		background: #fff;
		position: fixed;
		bottom: 0;
		z-index: 10;
		border-top: 1px solid #eeeeee;
		padding-top: 0.1rem; 
	}
	.footer ul{
		width: 93%;
		height: 100%;
		margin: 0 auto;
	}
	.footer ul li{
		width: 25%;
		height: 100%;
		float: left;
		text-align: center;
	}
	.footer img{
		width: 0.6rem;
		height: 0.6rem;
	}
	.footer ul li h1{
		font-size: 0.2rem;
		color: #808080;
	}
</style>