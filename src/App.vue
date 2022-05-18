<script>
import Homenav from './nav/Homenav.vue';
import Mailnav from './nav/Mailnav.vue';
import Docnav from './nav/Docnav.vue';
import Sidebar from './components/Sidebar.vue';
import Mail from './components/Mail.vue';
export default {
	components: { Homenav, Docnav, Mailnav, Sidebar, Mail },
	data() {
		return {
			modal: false,
			mail: false,
		};
	},
};
</script>

<template>
	<main
		class="py-10 left-0 px-20 justify-center flex flex-col h-screen items-center z-10 sticky top-0"
		id="nav"
	>
		<div
			id="nav-container"
			class="bg-trans deg2 flex-col flex justify-between items-center rounded-[22px] py-8 show"
		>
			<router-link to="'/" class="nav-hover">
				<Homenav />
				<h4 class="nav-text transition-all ease-in-out">Home</h4>
			</router-link>
			<a class="nav-hover" @click="mail = true">
				<Mailnav />
				<h4 class="nav-text transition-all ease-in-out">Contactarse</h4>
			</a>
			<router-link to="'/Doc" class="nav-hover">
				<Docnav />
				<h4 class="nav-text transition-all ease-in-out">
					Documentacion
				</h4>
			</router-link>
			<div
				class="logo-fuck absolute top-20 nav-hover btn hover:bg-trans"
				@click="modal = true"
			>
				<img src="./assets/icons/fdlogo.png" class="w-30" />
				<h4 class="nav-text transition-all ease-in-out">
					Ver Hablilidades
				</h4>
			</div>
		</div>
	</main>

	<main
		class="h-screen fixed left-100 items-center flex show z-[200]"
		v-show="mail"
		id="mail-container"
	>
		<Mail @click="mail = false" />
	</main>

	<router-view class="show" />

	<main
		id="sidebar"
		class="w-[500px] h-screen sticky p-20 show top-0"
		v-show="modal"
	>
		<Sidebar />
		<div
			id="sidebarequis"
			class="w-40 h-40 rounded-15 transition-all ease-in-out hover:bg-trans justify-center flex items-center absolute top-30 right-30"
			@click="modal = false"
		>
			<img src="./assets/icons/equis.svg" class="icons" />
		</div>
	</main>
</template>

<style>
@font-face {
	font-family: inter;
	src: url(../public/font/Inter-Regular.ttf) format('truetype');
}

* {
	font-family: inter;
}

html {
	scroll-behavior: smooth;
}
body {
	background-color: #181a20;
	color: #fff;
	font-weight: 'thin';
	font-family: inter;
}

#app {
	display: flex;
	flex-direction: row;
}

h1 {
	font-size: 60px;
}
h2 {
	font-size: 16px;
}
h3 {
	font-size: 13px;
}
h4 {
	font-size: 12px;
}

.icons {
	width: 20px;
}

.nav-text {
	padding: 5px 12px;
	background-color: #33333380;
	position: absolute;
	left: 0px;
	border-radius: 10px;
	opacity: 0;
	backdrop-filter: blur(20px);
	transform: scale(0);
}

.nav-hover {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.nav-hover:hover .nav-text {
	visibility: visible;
	opacity: 1;
	left: 90px;
	transform: scale(1);
}

.nav-hover:hover #mail {
	visibility: visible;
}

.show {
	animation: show ease-in-out 0.2s;
}

@keyframes show {
	0% {
		transform: scale(0.8);
		opacity: 0;
	}
}
@media (max-width: 800px) {
	#app {
		flex-direction: column !important;
	}
	#nav {
		flex-direction: row !important;
		width: 100% !important;
		height: fit-content !important;
		/* background-color: red !important; */
		position: fixed !important;
		bottom: 0px !important;
		top: auto !important;
	}
	#nav-container {
		flex-direction: row !important;
		background-color: #33333350 !important;
		padding: 0px 10px;
		border-radius: 100px;
		width: 360px;
		margin: 10px 0px;
		backdrop-filter: blur(20px);
	}
	#mail {
		bottom: 80px !important;
		left: auto !important;
		right: auto !important;
	}

	#sidebar {
		position: fixed !important;
		top: 0px !important;
		left: 0px !important;
		right: 0px !important;
		width: 100% !important;
		height: 100% !important;
		margin: 0px !important;
		padding: 0px !important;
		background-color: #181a20 !important;

		z-index: 200 !important;
	}

	.nav-text {
		display: none;
	}
	.logo-fuck {
		position: relative;
		top: auto;
	}
	.logo-fuck img {
		width: 22px !important;
	}

	.btn {
		width: 35px;
		height: 35px;
		border-radius: 12px;
	}

	.icons {
		width: 20px;
	}

	#sidebarequis {
		top: 20px !important;
		right: 20px !important;
	}
	#mail-container {
		width: 100% !important;
		left: 0px;
	}

	h1 {
		font-size: 42px;
	}
	h2 {
		font-size: 14px;
	}
}

::-webkit-scrollbar {
	display: none;
}
</style>
