<template>
	<section class="page-banner">
		<img src="../assets/images/banner.jpg" alt="banner" />
		<div class="banner-title">
			<span :pageTitle="pageTitle">{{ pageTitle.title }}</span>
		</div>
	</section>
</template>
<script>

export default {
	props: ["pageTitle"],
};
</script>
