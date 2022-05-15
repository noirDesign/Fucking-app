<template>
	<main>
		<section
			class="overflow-hidden h-fit flex items-center w-[320px] flex-col"
			id="card-round"
		>
			<img :src="item.imagen" class="rounded-40" id="card-img1" />
			<div
				class="flex relative bg-[#ffffff90] backdrop-blur-xl bottom-[45px] items-center justify-center rounded-50 p-2"
			>
				<img :src="item.skill1" class="w-min scale-[0.8]" />
				<img :src="item.skill2" class="w-min scale-[0.8]" />
				<img :src="item.skill3" class="w-min scale-[0.8]" />
				<img :src="item.skill4" class="w-min scale-[0.8]" />
				<img :src="item.skill5" class="w-min scale-[0.8]" />
			</div>
		</section>
	</main>
</template>

<script>
export default {
	props: ['item'],
};
</script>

<style>
@media (max-width: 800px) {
	#card-round {
		width: 100% !important;
		padding: 0px 20px;
	}
	#card-img1 {
		border-radius: 30px;
	}
}
</style>
