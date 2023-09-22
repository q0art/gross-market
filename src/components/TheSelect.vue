<script setup>
import { computed, ref, defineProps } from 'vue';
import CheckIcon from './svg/CheckIcon.vue';

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
				<CheckIcon />
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

	cursor: pointer;
}
</style>
