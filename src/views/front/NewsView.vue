<template>
	<PageBanner :pageTitle="pageTitle"></PageBanner>
	<section id="page-content" class="container" data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
		<div id="news-page" class="row justify-content-center">
			<div class="col-10">
				<div class="news-item">
					<div class="date">2023/01/18</div>
					<div class="title" title="新春不打烊！來吃漢堡就送年度全品項9折優惠券！！">新春不打烊！來吃漢堡就送年度全品項9折優惠券！！</div>
				</div>
			</div>
			<div class="col-10">
				<div class="news-item">
					<div class="date">2023/01/10</div>
					<div class="title" title="1/11(三)～1/12(四) 本店員工旅遊，公休2日！造成不便敬請見諒。">1/11(三)～1/12(四) 本店員工旅遊，公休2日！造成不便敬請見諒。</div>
				</div>
			</div>
			<div class="col-10">
				<div class="news-item">
					<div class="date">2022/12/20</div>
					<div class="title" title="聖誕佳節愉快，來店用餐送薯薯家族套餐一份！">聖誕佳節愉快，來店用餐送薯薯家族套餐一份！</div>
				</div>
			</div>
			<div class="col-10">
				<div class="news-item">
					<div class="date">2022/12/01</div>
					<div class="title" title="本店尾牙聚餐公休一日！造成不便敬請見諒。">本店尾牙聚餐公休一日！造成不便敬請見諒。</div>
				</div>
			</div>
			<div class="col-10">
				<div class="news-item">
					<div class="date">2022/11/18</div>
					<div class="title" title="最新優惠活動，即日起購買韓式洋釀炸雞一份，飲料半價優惠。">最新優惠活動，即日起購買韓式洋釀炸雞一份，飲料半價優惠。</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import PageBanner from "@/components/PageBanner.vue";
export default {
	data() {
		return {
			pageTitle: {
				title: "最新公告",
			},
		};
	},
	components: {
		PageBanner,
	},
};
</script>
