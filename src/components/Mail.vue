<template>
	<main
		class="rounded-40 bg-trans2 w-[350px] h-[600px] backdrop-blur-xl z-50 deg2 p-20"
		id="mail-bg"
	>
		<section class="flex items-center flex-col mt-30">
			<img src="../assets/icons/fdlogo.png" class="w-70" />
			<h3 class="my-15">Carlos Flores</h3>
		</section>
		<section class="w-full flex-row flex justify-around my-10">
			<a class="hover:bg-trans rounded-30 p-8"
				><img src="../assets/icons/instagram.svg" class="icons"
			/></a>
			<a class="hover:bg-trans rounded-30 p-8"
				><img src="../assets/icons/dribbble.svg" class="icons"
			/></a>
			<a class="hover:bg-trans rounded-30 p-8"
				><img src="../assets/icons/git.svg" class="icons"
			/></a>
		</section>
	</main>
</template>

<style>
@media (max-width: 800px) {
	#mail-bg {
		width: 100% !important;
		margin: 0px 20px;
	}
}
</style>
