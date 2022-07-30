<template>
	<main>
		<section
			class="overflow-hidden h-fit flex items-center w-[320px] flex-col"
			id="card-round"
			@click="card = true"
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

		<section
			v-show="card"
			class="bg-[#181a20ab] backdrop-blur-xl fixed top-0 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center z-[200]"
		>
			<div
				@click="card = false"
				id="cerrar-card"
				class="bg-trans w-40 h-40 rounded-15 flex justify-center items-center deg2 fixed top-20 right-20 z-[300]"
			>
				<img src="../assets/icons/equis.svg" class="icons" />
			</div>

			<div
				class="bg-[#252933] rounded-40 show overflow-hidden"
				id="card-side-bg"
			>
				<section
					class="w-full flex justify-center flex-col items-center"
				>
					<div
						class="w-400 h-20 rounded-[100px] blur-[40px] relative bg-violeta"
					></div>
					<h2 class="mb-20">{{ item.title }}</h2>
				</section>
				<div class="flex flex-row w-full" id="card-side-col">
					<section
						class="w-[500px] rounded-40 overflow-hidden overflow-x-auto flex flex-row mb-20 ml-20 gap-10"
						id="card-sideslide"
					>
						<img :src="item.imagen" class="rounded-40" />
						<img :src="item.imagen2" class="rounded-40" />
						<img :src="item.imagen3" class="rounded-40" />
						<img :src="item.imagen4" class="rounded-40" />
					</section>

					<section class="flex flex-col w-300" id="card-side-desc">
						<div
							class="flex flex-wrap mx-20 overflow-hidden overflow-x-auto gap-10"
						>
							<div
								class="flex flex-row items-center bg-trans rounded-50"
							>
								<img
									:src="item.skill1"
									class="w-min scale-[0.8]"
								/>
								<h2
									class="scale-[0.9] translate-x-[-3px] text-[14px]"
								>
									{{ item.nombre1 }}
								</h2>
							</div>

							<div
								class="flex flex-row items-center bg-trans rounded-50"
							>
								<img
									:src="item.skill2"
									class="w-min scale-[0.8]"
								/>
								<h2
									class="scale-[0.9] translate-x-[-3px] text-[14px]"
								>
									{{ item.nombre2 }}
								</h2>
							</div>
							<div
								class="flex flex-row items-center bg-trans rounded-50"
							>
								<img
									:src="item.skill3"
									class="w-min scale-[0.8]"
								/>
								<h2
									class="scale-[0.9] translate-x-[-3px] text-[14px]"
								>
									{{ item.nombre3 }}
								</h2>
							</div>
							<div
								class="flex flex-row items-center mr-10 bg-trans rounded-50"
							>
								<img
									:src="item.skill4"
									class="w-min scale-[0.8]"
								/>
								<h2
									class="scale-[0.9] translate-x-[-3px] text-[14px]"
								>
									{{ item.nombre4 }}
								</h2>
							</div>
						</div>
						<div
							class="bg-trans rounded-20 overflow-hidden m-20 flex flex-col border-l-2 border-violeta"
						>
							<h2 class="scale-[0.8] my-5">
								{{ item.descripcion }}
							</h2>
							<img
								:src="item.desimagen"
								class="w-[150px] scale-[0.8] mx-auto"
							/>
						</div>
					</section>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
export default {
	props: ['item'],
	data() {
		return {
			card: false,
		};
	},
};
</script>

<style>
#card-sideslide::-webkit-scrollbar {
	height: 12px;
	display: flex;
}
#card-sideslide::-webkit-scrollbar-track {
	background: unset;
}
#card-sideslide::-webkit-scrollbar-thumb {
	background: rgba(255, 255, 255, 0.1);
	border-radius: 10px;
}

@media (max-width: 800px) {
	#card-round {
		width: 100% !important;
		padding: 0px 20px;
	}
	#card-img1 {
		border-radius: 30px;
		/* background-color: #181a20ab; */
	}
	#card-side-col {
		flex-direction: column !important;
	}
	#card-side-bg {
		width: 100% !important;
		height: 100% !important;
		border-radius: 0px !important;
		background-color: #181a20 !important;
	}
	#card-sideslide {
		margin: 0px;
		margin-bottom: 20px !important;
		width: 100% !important;
		border-radius: 0px;
		padding: 0px 20px !important;
		scroll-snap-type: x mandatory;
	}
	#card-sideslide::-webkit-scrollbar {
		display: none;
	}
	#card-sideslide > img {
		border-radius: 30px !important;
		width: 100% !important;
		scroll-snap-align: center;
	}
	#card-side-desc {
		width: 100% !important;
	}
	#cerrar-card {
		top: 10px !important;
		right: 10px !important;
		background-color: transparent;
		border: 0px;
		width: 35px !important;
		height: 35px !important;
	}
}
</style>
