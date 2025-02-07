<script setup>
import Title from '@/components/title.vue'; // 組件名稱大寫
</script>

<template>
	<Title />
	<div class="temp">
		<div class="block-one">
			<div class="title">我好像為什麼事情很悲哀，我想起"生命""</div>
			<div class="content">
				<div class="content-one">
					<div class="author">
						<div class="name">張杰玫</div>
						<span class="date">2021.09.12</span>
					</div>
					<div class="narrate">有甚麼人能用綠竹做弓矢</div>
				</div>
				<div class="content-two">
					<img src="https://picsum.photos/100/100/?random=10" />
				</div>
			</div>
			<div></div>
		</div>
		<div class="block-two">
			<div class="title">謙讓彷彿是一種美德，若想讓眼前的實際生活</div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.temp {
	display: flex;
	flex-direction: column;
	gap: 10px;
	.block-one {
		padding: 20px;
		height: 150px;
		background-color: white;
		.title {
			font-weight: 800;
			overflow: hidden; /* 隱藏超出範圍的文字 */
			text-overflow: ellipsis; /* 文字溢出時顯示省略號 */
			white-space: nowrap; /* 防止文字換行 */
			-webkit-box-orient: vertical; /* 必須與 display: -webkit-box 配合使用 */
		}
		.content {
			display: flex;
			.content-one {
				flex: 2;
				padding: 10px;
				.author {
					display: flex;
					flex-wrap: nowrap;
					.name {
						white-space: nowrap;
					}
					.date {
						display: flex;
						align-items: center;
						color: gray;
						overflow: hidden; /* 隱藏超出範圍的文字 */
						text-overflow: ellipsis; /* 文字溢出時顯示省略號 */
						white-space: nowrap; /* 防止文字換行 */
						-webkit-box-orient: vertical; /* 必須與 display: -webkit-box 配合使用 */
					}
					.narrate {
						overflow: hidden; /* 隱藏超出範圍的文字 */
						text-overflow: ellipsis; /* 文字溢出時顯示省略號 */
						white-space: nowrap; /* 防止文字換行 */
						display: -webkit-box; /* 讓容器支持多行文本省略 */
						-webkit-line-clamp: 2; /* 這樣做可以限制顯示最多2行文本 */
						-webkit-box-orient: vertical; /* 必須與 display: -webkit-box 配合使用 */
					}
				}
			}
			.content-two {
				flex: 1;
				min-width: 200px;
				height: 100px;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}

	.block-two {
		padding: 20px;
		height: 150px;
		background-color: white;

		.title {
			font-weight: 800;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
}
</style>
