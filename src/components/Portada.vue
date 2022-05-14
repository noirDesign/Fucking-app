<template>
	<main class="flex flex-row items-center">
		<div class="home-deg"></div>

		<section
			class="flex justify-start flex-col my-100 w-500"
			id="portadaid"
		>
			<div
				class="bg-[#4dffb525] h-30 w-80 flex rounded-8 text-center items-center justify-center my-5"
			>
				<div
					class="w-2 h-15 rounded-10 bg-[#71ffc4] left-[-10px] relative"
				></div>
				<h4 class="text-[#71ffc4]">Version 1.2</h4>
			</div>

			<h1 class="font-semibold text-up mb-10">
				!Hola, este<br />
				es mi <span class="text-degradado">Portafolio,</span> <br />
				bienvenido.
			</h1>
			<h3 class="text-gris">
				Hola soy Carlos, en mi portfolio podras ver los trabajos que voy
				haciendo y las habilidades que tengo en el sidebar, esta
				proyecto esta en proceso pero podes ver la documentacion del
				mismo.
			</h3>

			<section class="flex flex-row my-[22px] items-center">
				<div class="deg px-25 py-12 rounded-30">
					<h2>Ver sidebar</h2>
				</div>
				<div class="flex flex-row mx-10">
					<img src="../assets/icons/vue1.svg" class="w-32 mx-3" />
					<img src="../assets/icons/tail1.svg" class="w-32 mx-3" />
					<img src="../assets/icons/figma1.svg" class="w-32 mx-3" />
				</div>
			</section>
		</section>

		<!-- <section class="home-grafico">
			<div class="w-500 h-500 bg-azul"></div>
		</section> -->
	</main>
</template>

<style>
.home-deg {
	background-color: #3b5fff50;
	width: 900px;
	height: 900px;
	border-radius: 1000px;
	position: absolute;
	top: -300px;
	left: -400px;
	z-index: -20;
	filter: blur(120px);
}

.text-up {
	line-height: 70px;
}

/* .text-degradado {
	background: -webkit-linear-gradient(360deg, #64a9ff 0%, #2a4eff 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: semibold;
} */

@media (max-width: 500px) {
	.home-grafico {
		display: none;
	}
	#portadaid {
		width: 380px;
	}
}
</style>
