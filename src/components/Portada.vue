<template>
	<main class="flex flex-row justify-between items-center px-15" id="portada">
		<div id="home-deg"></div>

		<section
			class="flex justify-start flex-col mt-100 w-500"
			id="portadaid"
		>
			<div
				class="bg-[#4dffb525] h-30 w-80 flex rounded-8 text-center items-center justify-center my-5"
			>
				<div
					class="w-[2px] h-15 rounded-10 bg-[#71ffc4] left-[-8px] relative"
				></div>
				<h4 class="text-[#71ffc4]">Version 1.2</h4>
			</div>

			<h1 class="font-semibold text-up mb-10">
				!Hola, este crack<br />
				es mi <span class="text-degradado">Portafolio,</span> <br />
				bienvenido.
			</h1>
			<h3 id="text-gris">
				Hola soy Carlos, en mi portfolio podras ver los trabajos que voy
				haciendo y las habilidades que tengo en el sidebar, esta
				proyecto esta en proceso pero podes ver la documentacion del
				mismo.
			</h3>

			<section class="flex flex-row my-[22px] items-center" id="doc-sect">
				<router-link
					to="'/Doc"
					class="deg px-20 py-10 rounded-30 transition-all ease-in-out"
					id="ver-documentacion"
				>
					<h2>Ver Documentacion</h2>
				</router-link>
				<div class="flex flex-row mx-10">
					<img src="../assets/icons/vue1.svg" class="w-32 mx-3" />
					<img src="../assets/icons/tail1.svg" class="w-32 mx-3" />
					<img src="../assets/icons/figma1.svg" class="w-32 mx-3" />
				</div>
			</section>
		</section>

		<section class="h-full" id="portada-der">
			<div
				class="w-500 h-500 rounded-full relative right-[-100px] top-[-80px]"
				id="deg3"
			></div>
			<div class="absolute top-[90px] flex justify-center items-center">
				<img src="../assets/wall.png" class="h-[450px]" />
				<div
					class="bg-trans2 px-20 py-10 absolute backdrop-blur-xl rounded-20 deg2 flex-col flex items-center"
				>
					<img src="../assets/icons/info.svg" class="icons mb-2" />
					<h4>Ilustracion de BlazeComp</h4>
				</div>
			</div>
		</section>
	</main>
</template>

<style>
#home-deg {
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

#ver-documentacion:hover {
	box-shadow: 0px 10px 20px -10px #2a4eff;
}

.text-up {
	line-height: 70px;
}
#text-gris {
	color: #ffffff60;
}

#deg3 {
	background: linear-gradient(90deg, #8b6bff 0%, #2a4eff 100%);
}

.text-degradado {
	background: -webkit-linear-gradient(360deg, #64a9ff 0%, #2a4eff 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: semibold;
}

@media (max-width: 800px) {
	#home-deg {
		display: none;
	}
	.home-grafico {
		display: none;
	}
	#portadaid {
		width: 100%;
		margin-top: 60px !important;
	}
	#portada-der {
		display: none;
	}
	#portada {
		padding: 0px 20px;
	}
	#doc-sect {
		flex-direction: column-reverse;
		align-items: flex-start;
		margin: 10px 0px;
	}
	#doc-sect div {
		margin: 8px 0px;
	}
	.text-up {
		line-height: 55px;
		margin-top: 10px;
	}
	#text-gris {
		font-size: 12px;
		margin-right: 40px;
	}
}
</style>
