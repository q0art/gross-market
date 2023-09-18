<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
	label: {
		type: String,
		default: '',
	},
	firstOption: {
		type: String,
		required: true,
	},
	secondOption: {
		type: String,
		required: true,
	},
});

const selectedOption = ref('');

const isValid = computed(() => selectedOption.value !== '');
const errorMessage = 'Пожалуйста, выберите одну из опций';
</script>

<template>
	<div class="from-radio__wrapper">
		<div class="form-header">
			<h3 class="form-header__title">{{ props.label }}</h3>
			<div v-if="isValid" class="form-header__icon">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7 12.5L9.76768 15.9963C10.1713 16.5062 10.9467 16.5012 11.3437 15.9862L17.5 8"
						stroke="#10C300"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</div>
		</div>
		<div class="form-radio__wrapper">
			<label class="form-radio">
				<input
					type="radio"
					id="firstOption"
					v-model="selectedOption"
					value="{{ props.firstOption }}"
					class="form-radio__btn"
				/>
				<p for="firstOption">{{ props.firstOption }}</p>
			</label>
			<label class="form-radio">
				<input
					type="radio"
					id="secondOption"
					v-model="selectedOption"
					value="{{ props.secondOption }}"
					class="form-radio__btn"
				/>
				<p for="secondOption">{{ props.secondOption }}</p>
			</label>
		</div>
		<!-- f -->
		<div v-if="!isValid && selectedOption !== ''" class="form__error-message">
			{{ errorMessage }}
		</div>
	</div>
</template>

<style lang="scss">
.form-radio {
	display: flex;
	align-items: center;
	gap: 12px;

	&__btn {
		appearance: none;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: $gray-color;

		&:checked {
			background: $black-color;
			border: 8px solid $gray-color;
		}
	}

	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
