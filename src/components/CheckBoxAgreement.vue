<script setup>
import { ref } from 'vue';

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
				<p class="checkbox-content__text">
					я подтверждаю согласие на обработку персональных данных и принимаю условия рассмотрения
					обращений *
				</p>
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

		padding: 0 16px;
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
			color: $silver-color;
			font-size: $font-size-xs;
		}
	}

	&__title {
		font-size: $font-size-xs;
	}

	&__btn {
		appearance: none;
		width: 24px;
		height: 24px;
		border-radius: $border-radius-m;

		cursor: pointer;

		&:checked {
			background: $gray-color url('./../../public/icons/checkbox.svg') no-repeat center center;
		}

		&:not(:checked) {
			background: $gray-color;
		}
	}
}
</style>
