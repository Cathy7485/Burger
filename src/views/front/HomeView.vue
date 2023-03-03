<template>
  <div id="popular-products" class="container">
    <div class="row">
      <div class="block-title">
        <div class="title">暢銷漢堡</div>
      </div>
      <!-- swiper -->
      <swiper
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        navigation
        :pagination="{ clickable: true }"
      >
        <swiper-slide>
					<div class="d-flex">
						<div class="product-img">
							<img
								src="https://raw.githubusercontent.com/Cathy7485/Burger/main/src/assets/images/%E7%81%AB%E7%84%B0%E9%A6%99%E8%84%86%E7%82%B8%E9%9B%9E%E5%A0%A1.jpg"
								alt=""
							/>
						</div>
						<div class="product-info">
							<div class="title">火焰爆汁雞肉起司堡</div>
							<div class="info">
								雞肉鮮嫩搭配上經典起司，火焰噴槍融化起司完美融合在嫩雞肉上，給你最佳的味覺享受，口感多汁一口接一口！配料蔬菜與醬汁搭配，碰撞出多種新滋味！怎麼吃都不會膩！
							</div>
						</div>
					</div>
        </swiper-slide>
        <swiper-slide>
					<div class="d-flex align-items-center">
						<div class="product-img">
							<img
								src="https://raw.githubusercontent.com/Cathy7485/Burger/main/src/assets/images/%E8%B5%B7%E5%8F%B8%E7%80%91%E5%B8%83%E6%96%B0%E8%B1%AC%E8%82%89%E7%B4%A0%E5%A0%A1.jpg"
								alt=""
							/>
						</div>
						<div class="product-info">
							<div class="title">起司瀑布新豬肉素堡</div>
							<div class="info">
								半熟蛋液與香濃起司絕配組合！新鮮蔬菜與素食新豬肉搭配獨家水果風味醬，口感清爽無負擔，讓人一口接一口的好滋味，蔬食健康第一選擇！
							</div>
						</div>
					</div>
        </swiper-slide>
        <swiper-slide>
					<div class="d-flex align-items-center">
						<div class="product-img">
							<img
								src="https://raw.githubusercontent.com/Cathy7485/Burger/main/src/assets/images/%E9%BB%83%E9%87%91%E6%B5%B7%E6%B4%8B%E9%A6%99%E8%84%86%E7%82%B8%E8%9D%A6%E5%A0%A1.jpg"
								alt=""
							/>
						</div>
						<div class="product-info">
							<div class="title">黃金海洋香脆炸蝦堡</div>
							<div class="info">
								每日新鮮直送的鮮蝦製作，鮮美口感的炸蝦佐洋蔥裹粉酥炸再搭配經典莎莎醬，每一口都新鮮！讓你回味無窮的滋味。
							</div>
						</div>
					</div>
        </swiper-slide>
      </swiper>
      <!-- swiper -->
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="block-title">
        <div class="title">品牌故事</div>
      </div>
      <div class="col-6">
        <img src="" alt="" />
      </div>
      <div class="col-6"></div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="block-title">
        <div class="title">客戶評價</div>
      </div>
      <div class="col-lg-4"></div>
      <div class="col-lg-4"></div>
      <div class="col-lg-4"></div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="block-title">
        <div class="title">地理位置</div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Pagination, Navigation } from 'swiper';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
  };
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
