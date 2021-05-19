<template src='./ContentCube.html'></template>
<style lang='scss' src='./ContentCube.scss'></style>
<style lang='scss' scoped>
	// scoped scss of this component
</style>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';
import { AppState } from '../../store';
import * as Quaternion from 'quaternion';

@Component({
	computed: {
	...mapState({
			screenConstraint: (state) => (state as AppState).screenConstraint
		})
	}
})
export default class BookingTypeInput extends Vue {
	public transformStyle = '';

	private panX = 0;
	private panY = 0;
	// private panAngle = 0;
	private panXStart = 0;
	private panYStart = 0;
	// private panAngleStart = 0;
	private rotationValues = {
		x: 0,
		y: 0,
		z: 0
	};
	private quat!: any;

	public onPan (event: any) {
		this.panX = this.panXStart + (event.deltaX * 0.2); // divided by 5 to make it a bite less sensitive
		this.panY = this.panYStart + (event.deltaY * 0.2);
		// this.panAngle = (event.angle) - this.panAngleStart;

		this.rotationValues.x = -this.panY / 180 * Math.PI;
		this.rotationValues.y = this.panX / 180 * Math.PI;
		// this.rotationValues.z = this.panAngle / 180 * Math.PI;

		this.quat = Quaternion.fromEuler(this.rotationValues.z, this.rotationValues.x, this.rotationValues.y, 'ZXY').conjugate();
		this.transformStyle = `matrix3d(${this.quat.toMatrix4()})`
	}

	public onPanStart () {
		this.panXStart = this.panX;
		this.panYStart = this.panY;
		// this.panAngleStart = this.panAngle;
	}
}
</script>
