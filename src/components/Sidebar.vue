<template>
	<main
		id="sidebarbg"
		class="bg-trans w-full h-full rounded-40 deg2 backdrop-blur-xl"
	>
		<section id="deg-side" class="px-15">
			<div class="flex justify-center overflow-hidden pt-30 pb-10">
				<img
					class="my-10 w-60"
					src="../assets/icons/fdlogo.png"
					id="logo-side"
				/>
			</div>
			<section class="flex flex-row justify-around py-20">
				<div class="flex flex-col text-center">
					<h3>+19</h3>
					<h4 class="text-gris">Proyectos</h4>
				</div>
				<div class="flex flex-col text-center">
					<h3>+3</h3>
					<h4 class="text-gris">Clientes</h4>
				</div>
				<div class="flex flex-col text-center">
					<h3>12</h3>
					<h4 class="text-gris">Skills</h4>
				</div>
			</section>

			<section class="flex flex-row justify-between" id="side-categ">
				<div
					class="flex flex-row bg-trans rounded-15 p-8 deg2 items-center"
				>
					<img src="../assets/icons/design.svg" class="icons" />
					<h4 class="ml-3">Diseño Grafico</h4>
				</div>

				<div
					class="flex flex-row bg-trans rounded-15 p-8 deg2 items-center"
				>
					<img src="../assets/icons/ui.svg" class="icons" />
					<h4 class="ml-3">Ui</h4>
				</div>

				<div
					class="flex flex-row bg-trans rounded-15 p-8 deg2 items-center"
				>
					<img src="../assets/icons/code.svg" class="icons" />
					<h4 class="ml-3">Frontend</h4>
				</div>
			</section>
		</section>

		<section class="my-20 flex-col mx-15" id="side-skill">
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
			id="deg-side-skill"
			class="bg-trans rounded-20 flex flex-row p-15 overflow-hidden deg2 mx-15"
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
#deg-side {
	background: linear-gradient(
		42deg,
		rgba(57, 89, 255, 0) 18%,
		rgba(57, 89, 255, 0) 45%,
		rgba(57, 90, 255, 0.192) 75%,
		rgba(57, 90, 255, 0.678) 100%
	);
}

#deg-side-skill {
	background: linear-gradient(
		270deg,
		rgba(255, 255, 255, 0.05) 18%,
		rgba(255, 255, 255, 0.05) 45%,
		rgba(69, 100, 255, 0.14) 74%,
		rgba(69, 100, 255, 0.6) 100%
	);
}

#sidebarbg {
	overflow: hidden !important;
}

#side-skill div img {
	width: 85px;
}

@media (max-width: 800px) {
	#sidebarbg {
		background: linear-gradient(
			36deg,
			rgba(255, 255, 255, 0) 37%,
			rgba(57, 89, 255, 0.13068977591036413) 73%,
			rgba(57, 89, 255, 0.3575805322128851) 100%
		);
		margin: 0px !important;
		padding-bottom: 30px !important;
		border: unset;
		border-radius: 0;
		overflow-y: scroll !important;
	}
	#deg-side {
		background: none;
		padding: 0px 20px;
	}
	#side-skill {
		margin: 0px 20px;
	}
	#side-skill div img {
		width: 100px;
	}
	#deg-side-skill {
		margin: 0px 20px;
	}
	#logo-side {
		width: 70px;
		margin-top: 20px;
	}
	#side-categ div {
		padding: 8px 12px;
	}
	#side-categ div h4 {
		margin-left: 5px;
	}
}
</style>
