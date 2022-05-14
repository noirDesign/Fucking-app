<template>
	<main class="flex flex-col w-full mx-15">
		<Portada />
		<section class="w-full flex flex-row justify-center">
			<div class="flex justify-center w-40 h-40 bg-trans rounded-15">
				<img src="../assets/icons/arrow.svg" class="icons" />
			</div>
		</section>
		<h1>holaaa</h1>
		<br /><br /><br />
		<h1>holaaa</h1>
		<br /><br /><br />
		<h1>holaaa</h1>
		<br /><br /><br />
		<h1>holaaa</h1>
		<br /><br /><br />
	</main>

	<!-- <Card v-for="item of items" :key="item.id" :item="item" /> -->
</template>

<script>
import Card from '../components/Card.vue';
import Portada from '../components/Portada.vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';
import { computed } from '@vue/reactivity';
export default {
	components: { Card, Portada },
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
@media (max-width: 500px) {
	main {
		margin-left: 10px !important;
		margin-right: 10px !important;
	}
}
</style>
