<script setup>
import { ref, watchEffect } from 'vue';
import { patterns } from './../scripts/const';

import TheCheckIcon from './svg/TheCheckIcon.vue';

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
				<TheCheckIcon />
			</div>
		</div>
		<input
			@input="updateValue"
			:type="props.type"
			:placeholder="props.placeholder"
			:class="{ error: !isValid && props.value !== '' }"
			class="form-input field"
		/>
		<div v-if="!isValid" class="form__error-message">{{ errorMessage }}</div>
	</div>
</template>

<style lang="scss"></style>
