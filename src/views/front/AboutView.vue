<template>
	<PageBanner :pageTitle="pageTitle"></PageBanner>
	<section id="page-content" class="container">
		<div class="row">
			<div class="col-lg-6">
				<div class="about-page-img" data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
					<img src="@/assets/images/clerk.jpg" alt="店員" />
				</div>
			</div>
			<div class="col-lg-6">
				<div class="about-page-info">
					<div class="about-page-subtitle">起源</div>
					<p>
						吃堡創立於2022年，創立動機是想讓更多人吃到手工漢堡的美味，市面上的漢堡販賣管道琳瑯滿目，卻鮮少有漢堡品牌可以兼具平價與健康的兩大要點。
						吃堡有著獨特性的魅力就是想怎麼吃就怎麼點，讓挑食的顧客也能吃得很開心。
					</p>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="about-page-info">
					<div class="about-page-subtitle">理念與用心</div>
					<p>
						創業團隊跨足三代，我們有年輕人的熱血與活力，也具備長青族的成熟與沉穩，各司其職的分工，讓我們提供給客戶最好最健康的漢堡與餐點。
						<br />
						我們所有的產品，都是純手工的自己製作的，為了讓大家吃得健康與安心。
					</p>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="about-page-img" data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
					<img src="@/assets/images/dough.jpg" alt="手工做麵" />
				</div>
			</div>
			<div class="col-lg-6">
				<div class="about-page-img" data-aos="fade-up" data-aos-once="true" data-aos-duration="500">
					<img src="@/assets/images/farming.jpg" alt="產線合作" />
				</div>
			</div>
			<div class="col-lg-6">
				<div class="about-page-info">
					<div class="about-page-subtitle">品質與安心</div>
					<p>
						產品原料我們也與優質小農配合，打造自有的產品線，維持健康、無農藥、有機的新鮮蔬果品質，也讓協助優質小農們的產品曝光率。
					</p>
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
				title: "品牌故事",
			},
			fullPage: false,
		};
	},
	components: {
		PageBanner,
	},
};
</script>
