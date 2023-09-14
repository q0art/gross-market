<script setup>
const props = defineProps({
	state: Boolean,
});
</script>

<template>
	<div class="validate__container">
		<slot class="validate__title"></slot>
		<div class="validate__icon" v-if="state">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7 12.5L9.76768 15.9963C10.1713 16.5062 10.9467 16.5012 11.3437 15.9862L17.5 8" stroke="#10C300" stroke-width="2" stroke-linecap="round" />
			</svg>
		</div>
		<div class="validate__icon" v-else>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M21 3L3 21" stroke="red" stroke-width="2" />
				<path d="M21 21L3 3" stroke="red" stroke-width="2" />
			</svg>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.validate {
	&__container {
		display: flex;
		justify-content: space-between;
		align-items: center;

		gap: 12px;
	}

	.title {
		font-size: $font-size-xs;
		font-weight: 500;
	}
}
.validate__container {
}
</style>
