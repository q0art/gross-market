<script setup>
import { ref } from 'vue';
import CaptchaIcon from './svg/CaptchaIcon.vue';

const props = defineProps({
	label: {
		type: String,
		default: '',
	},
});

const isChecked = ref(false);
</script>

<template>
	<div class="checkbox__container">
		<h1 class="checkbox__title">{{ props.label }}</h1>
		<div class="checkbox__wrapper">
			<label for="checkbox">
				<input id="checkbox" type="checkbox" v-model="isChecked" class="checkbox__btn" />
			</label>
			<div class="checkbox-content">
				<p class="checkbox-content__text">я не робот</p>
				<CaptchaIcon />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.checkbox {
	@import './../styles/mixins/breakpoints';
	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;

		padding: 12px 16px;

		background: $gray-color;
		border-radius: $border-radius-m;
	}

	&__container {
		@include high-tablet {
			min-width: 100%;
		}
	}

	&-content {
		width: 100%;
		display: flex;
		justify-content: space-between;

		&__text {
			font-size: $font-size-xs;
		}
	}

	&__title {
		font-size: $font-size-xs;

		margin-bottom: 12px;
	}

	&__btn {
		appearance: none;
		width: 24px;
		height: 24px;
		border-radius: $border-radius-m;

		cursor: pointer;

		&:checked {
			background: $white-color url('./../../public/icons/checkbox.svg') no-repeat center center;
		}

		&:not(:checked) {
			background: $white-color;
		}
	}
}
</style>
