<template>
	<main id="sidebarbg" class="bg-trans w-full h-full rounded-40">
		<div
			id="deg-side"
			class="flex justify-center overflow-hidden bg-gradient-to-r from-[#64a9ff] to-[#ffffff00] py-50"
		>
			<img class="my-10 w-60" src="../assets/icons/fdlogo.png" />
		</div>

		<section class="flex flex-row mx-15 justify-between py-20">
			<div class="flex flex-col text-center">
				<h3>99</h3>
				<h4 class="text-gris">Proyectos</h4>
			</div>
			<div class="flex flex-col text-center">
				<h3>99</h3>
				<h4 class="text-gris">Proyectos</h4>
			</div>
			<div class="flex flex-col text-center">
				<h3>99</h3>
				<h4 class="text-gris">Proyectos</h4>
			</div>
		</section>

		<section class="flex flex-row mx-15 justify-between">
			<div class="flex flex-row bg-trans rounded-15 p-8">
				<img src="../assets/icons/design.svg" class="icons" />
				<h4 class="mx-3">Diseño Grafico</h4>
			</div>

			<div class="flex flex-row bg-trans rounded-15 p-8">
				<img src="../assets/icons/ui.svg" class="icons" />
				<h4 class="mx-3">Ui</h4>
			</div>

			<div class="flex flex-row bg-trans rounded-15 p-8">
				<img src="../assets/icons/code.svg" class="icons" />
				<h4 class="mx-3">Frontend</h4>
			</div>
		</section>

		<section class="mx-15 my-20 flex-col" id="side-skill">
			<div class="flex flex-row justify-between my-15">
				<img src="../assets/side/skill1.svg" />
				<img src="../assets/side/skill2.svg" />
				<img src="../assets/side/skill3.svg" />
			</div>
			<div class="flex flex-row justify-between my-15">
				<img src="../assets/side/skill4.svg" />
				<img src="../assets/side/skill5.svg" />
				<img src="../assets/side/skill6.svg" />
			</div>
			<div class="flex flex-row justify-between my-15">
				<img src="../assets/side/skill7.svg" />
				<img src="../assets/side/skill8.svg" />
				<img src="../assets/side/skill9.svg" />
			</div>
		</section>

		<section
			class="bg-trans rounded-15 flex flex-row p-15 mx-15 overflow-hidden z-20"
		>
			<img src="../assets/icons/udemy.svg" class="icons" />
			<h3 class="mx-5">Ver Titulos en Udemy</h3>
		</section>
	</main>
</template>

<style>
/* #side-deg {
	background-color: #3959ff;
	width: 110px;
	height: 150px;
	border-radius: 1000px;
	right: -240px;
	top: -20px;
	position: relative;
	filter: blur(50px);
} */

#sidebarbg {
	overflow: hidden !important;
}

#side-skill div img {
	width: 85px;
}

@media (max-width: 500px) {
	#sidebarbg {
		background-color: unset;
		margin: 0px !important;
	}
}
</style>
