<template src='./ImageStack.html'></template>
<style lang='scss' src='./ImageStack.scss'></style>
<style lang='scss' scoped>
	// scoped scss of this component
</style>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { AppState } from '../../store';

@Component({
	computed: {
	...mapState({
			screenConstraint: (state) => (state as AppState).screenConstraint
		})
	}
})
export default class ImageStack extends Vue {
	public imageList: Array<string> = [
		require('../../assets/images/stack1.jpeg'),
		require('../../assets/images/stack2.jpeg'),
		require('../../assets/images/stack3.jpeg'),
		require('../../assets/images/stack4.jpeg'),
		require('../../assets/images/stack5.jpeg'),
		require('../../assets/images/stack6.jpeg')
	];
	public transformStyle = '';
	public imageIndex = 0;
	public imageSide1 = this.imageList[0];
	public imageSide2 = '';
	public turns = 0;


	public flipImage () {
		this.imageIndex = this.imageIndex === (this.imageList.length - 1) ? 0 : this.imageIndex + 1;
		if (this.turns % 2 === 1) {
			this.imageSide1 = this.imageList[this.imageIndex];
		} else {
			this.imageSide2 = this.imageList[this.imageIndex];
		}

		this.turns += 1;
	}

}
</script>
