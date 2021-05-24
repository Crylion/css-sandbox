<template src='./App.html'></template>

<style lang='scss' src='./App.scss'></style>

<!-- Icons -->
<style lang='scss' src='./Icons.scss'></style>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { AppState } from './store';
import ContentCube from './components/ContentCube/ContentCube.vue';
import ImageStack from './components/ImageStack/ImageStack.vue';
import ROUTE from './model/route.enum';
import SCREEN_CONSTRAINT from './model/screenConstraint.enum';

@Component({
	components: {
		ContentCube,
		ImageStack,
	},
	computed: {
		...mapState({
			screenConstraint: (state) => (state as AppState).screenConstraint,
			router: (state) => (state as AppState).router
		}),
	},
})
export default class App extends Vue {
	public ROUTE = ROUTE;
	public SCREEN_CONSTRAINT = SCREEN_CONSTRAINT;

	public changeRoute (route: ROUTE) {
		this.$store.commit('goTo', route);
	}
}
</script>
