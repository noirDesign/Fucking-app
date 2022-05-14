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
			class="bg-trans flex-col flex justify-between items-center rounded-[22px] py-8"
		>
			<router-link to="'/" class="nav-hover">
				<Homenav />
				<h4 class="nav-text">Home</h4>
			</router-link>
			<a class="nav-hover">
				<Mailnav />
				<div id="mail">
					<Mail />
				</div>
			</a>
			<router-link to="'/Doc" class="nav-hover">
				<Docnav />
				<h4 class="nav-text">Documentacion</h4>
			</router-link>
			<div
				class="logo-fuck absolute top-20 nav-hover btn hover:bg-trans"
				@click="modal = true"
			>
				<img src="./assets/icons/fdlogo.png" class="w-30" />
				<h4 class="nav-text">Ver Hablilidades</h4>
			</div>
		</div>
	</main>

	<router-view />

	<main id="sidebar" class="w-[500px] h-screen sticky p-20" v-show="modal">
		<Sidebar />
		<div
			id="sidebarequis"
			class="w-40 h-40 rounded-15 hover:bg-trans justify-center flex items-center absolute top-30 right-30"
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

body {
	background-color: #181a20;
	color: #fff;
	font-weight: 'thin';
	font-family: inter;
	line-height: 18px;
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
	background-color: #ffffff10;
	position: absolute;
	left: 90px;
	border-radius: 10px;
	visibility: hidden;
	backdrop-filter: blur(20px);
}

#mail {
	padding: 20px;
	background-color: #ffffff10;
	position: absolute;
	left: 80px;
	width: 300px;
	height: 500px;
	border-radius: 30px;
	visibility: hidden;
	backdrop-filter: blur(20px);
}

.nav-hover {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.nav-hover:hover .nav-text {
	visibility: visible;
}

.nav-hover:hover #mail {
	visibility: visible;
}

@media (max-width: 600px) {
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
		margin: 0px !important;
	}
	#nav-container {
		flex-direction: row !important;
		width: 100%;
		padding: 0px 10px;
		border-radius: 100px;
		width: 360px;
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
		margin: 0px !important;
		padding: 0px !important;
		background-color: #181a20 !important;
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

	h1 {
		font-size: 40px;
	}
	h2 {
		font-size: 16px;
	}
	h3 {
		font-size: 13px;
	}
	h4 {
		font-size: 11px;
	}
}

::-webkit-scrollbar {
	display: none;
}
</style>
