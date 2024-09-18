<template>
	<footer>
		<div class="container">
			<div class="row d-flex">
				<div class="col-sm-8 footer-info">
					<ul>
						<li>訂購專線：<a href="tel:+886-6-555888" style="color:#fff;">06-555-8888</a></li>
						<li>地址：臺南市永康區漢堡區漢堡路77號</li>
						<li>
							<RouterLink to="/login" style="color:#fff;">員工專區</RouterLink>
						</li>
					</ul>
				</div>
				<div class="col-sm-4 footer-logo">
					<img src="../assets/logo.svg" alt="footer-logo" />
				</div>
			</div>
		</div>
		<div class="copyright">
			Copyright © 2023 吃堡 - 手工漢堡專賣店 All Rights Reserved.
		</div>
	</footer>
</template>

<script>
export default {
}
</script>