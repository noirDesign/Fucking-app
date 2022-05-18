<template>
	<main class="flex flex-col w-full">
		<Portada id="container-home" />
		<section class="w-full flex flex-row justify-center my-30">
			<a
				href="#categoria-bg"
				class="flex justify-center w-40 h-40 bg-trans rounded-15 deg2 animate-bounce"
			>
				<img src="../assets/icons/arrow.svg" class="icons" />
			</a>
		</section>
		<section
			class="overflow-x-scroll w-full sticky top-0 z-10 rounded-20 backdrop-blur-xl"
			id="categoria-bg"
		>
			<Categorias />
		</section>
		<section
			class="flex flex-wrap w-full justify-center gap-50 my-20"
			id="Card-gap"
		>
			<Card v-for="item of items" :key="item.id" :item="item" />
		</section>
	</main>

	<!-- <Card v-for="item of items" :key="item.id" :item="item" /> -->
</template>

<script>
import Card from '../components/Card.vue';
import Portada from '../components/Portada.vue';
import Categorias from '../components/Categorias.vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { computed } from '@vue/reactivity';
export default {
	components: { Card, Portada, Categorias },
	setup() {
		const store = useStore();
		onMounted(() => {
			store.dispatch('fetchData');
		});
		const items = computed(() => store.state.items);
		return { items };
	},
};
</script>

<style>
@media (max-width: 800px) {
	#container-home {
		background: linear-gradient(
			36deg,
			rgba(255, 255, 255, 0) 37%,
			rgba(57, 89, 255, 0.13068977591036413) 73%,
			rgba(57, 89, 255, 0.3575805322128851) 100%
		);
	}

	#Card-gap {
		gap: 20px;
	}
	#categoria-bg {
		background-color: #181a2090;
	}
}
</style>
