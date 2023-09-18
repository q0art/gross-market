<script setup>
import { ref, watchEffect } from 'vue';
import { patterns } from './../scripts/const';

const props = defineProps({
	type: {
		type: String,
		default: 'text',
	},
	placeholder: {
		type: String,
		default: '',
	},
	label: {
		type: String,
		default: '',
	},
	value: {
		type: String,
		required: true,
	},
});

const emit = defineEmits(['update:value']);
const updateValue = ({ target }) => {
	emit('update:value', target.value);
};

const isValid = ref(false);
const errorMessage = ref('');

const adult = () => {
	const userDate = new Date(props.value);
	const currentDate = new Date();
	const userAge = currentDate.getFullYear() - userDate.getFullYear();
	return userAge >= 18 && userAge <= 99;
};

const validationRules = {
	text: {
		minLength: 10,
		maxLength: 100,
		pattern: patterns.name,
		fn: () => true,
	},
	datetime: {
		minLength: 10,
		maxLength: 10,
		pattern: patterns.date,
		fn: adult,
	},
	tel: {
		minLength: 11,
		maxLength: 12,
		pattern: patterns.phone,
		fn: () => true,
	},
	email: {
		minLength: 10,
		maxLength: 100,
		pattern: patterns.email,
		fn: () => true,
	},
	resume: {
		minLength: 0,
		maxLength: 200,
		pattern: /[\s\S]*/,
		fn: () => true,
	},
};

const validate = () => {
	const rules = validationRules[props.type] || {};

	if (!props.value.length) {
		isValid.value = false;
		errorMessage.value = '';
	} else if (props.value.length && props.value.length < rules.minLength) {
		isValid.value = false;
		errorMessage.value = 'поле не заполнено до конца';
	} else if (
		props.value.length > rules.maxLength ||
		!(rules.pattern.test(props.value) && rules.fn())
	) {
		isValid.value = false;
		errorMessage.value = 'поле заполнено не корректно';
	} else if (rules.pattern.test(props.value) && rules.fn()) {
		isValid.value = true;
		errorMessage.value = '';
	}
};

watchEffect(() => {
	validate();
});
</script>

<template>
	<div class="form-input__wrapper">
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
		<input
			@input="updateValue"
			:type="props.type"
			:placeholder="props.placeholder"
			:class="{ error: !isValid }"
			class="form-input field"
		/>
		<div v-if="!isValid" class="form__error-message">{{ errorMessage }}</div>
	</div>
</template>

<style lang="scss"></style>
