<script setup>
import { computed, ref, watchEffect, defineProps } from 'vue';

const props = defineProps({
	options: {
		type: Array,
		required: true,
	},
	label: {
		type: String,
		default: '',
	},
});

const selectedOption = ref('');

const isValid = computed(() => selectedOption.value !== '');
const errorMessage = 'Пожалуйста, выберите одну из опций';
</script>

<template>
	<div class="form-select__wrapper">
		<div class="form-header">
			<h1 class="form-header__title">{{ props.label }}</h1>
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
		<select v-model="selectedOption" class="form-select field">
			<option
				v-for="(option, index) in props.options"
				:key="index"
				:value="option"
				class="form-select__otion"
			>
				{{ option }}
			</option>
		</select>
		<!-- f -->
		<div v-if="!isValid && selectedOption !== ''" class="form__error-message">
			{{ errorMessage }}
		</div>
	</div>
</template>

<style lang="scss">
.form-select {
	appearance: none;
	background-image: url('./../../public/icons/select-arrow.svg');
	background-repeat: no-repeat;
	background-position: center right 12px;
}
</style>
