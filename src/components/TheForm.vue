<script setup>
import { computed, ref } from 'vue';

import useVuelidate from '@vuelidate/core';
import { maxLength, minLength, required } from '@vuelidate/validators';

import TheInput from './TheInput.vue';

const nameInput = ref('');
const dateInput = ref('');
const telInput = ref('');
const emailInput = ref('');

const rules = () => ({
	nameInput: {
		required,
		minLength: minLength(10),
		maxLength: maxLength(100),
		nameValidate: (value) =>
			/^[А-ЯЁа-яё]+ [А-ЯЁа-яё]+ [А-ЯЁа-яё]+$/.test(value),
	},
	dateInput: {
		required,
		minLength: minLength(10),
		maxLength: maxLength(10),
		dateValidate: (value) =>
			!/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/.test(value),
	},
	telInput: {
		required,
		minLength: minLength(12),
		maxLength: maxLength(12),
		telValidate: (value) => /^(?:\+7)[0-9]{10}$/.test(value),
	},
	emailInput: {
		required,
		minLength: minLength(10),
		maxLength: maxLength(100),
		emailValidate: (value) =>
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/.test(value),
	},
});

const v$ = useVuelidate(rules, { nameInput, dateInput, telInput, emailInput });

const nameValidation = computed(() => {
	//
});

console.log(v$);
</script>

<template>
	<div class="container">
		<form class="form">
			<TheInput
				v-model:value="nameInput"
				:errorMessage="v$.nameInput.$errors"
				type="text"
				name="nameInput"
				lable="ФИО *"
				placeholder="Иванов Иван Иванович"
			></TheInput>
			<!--  -->
			<TheInput
				v-model:value="dateInput"
				:errorMessage="v$.dateInput.$errors"
				type="datetime"
				name="dateInput"
				lable="Дата рождения *"
				placeholder="20.01.2001"
			></TheInput>
			<!--  -->
			<TheInput
				v-model:value="telInput"
				:errorMessage="v$.telInput.$errors"
				type="tel"
				name="telInput"
				lable="Контактый телефон *"
				placeholder="+7 (926) 433-14-16"
			></TheInput>
			<!--  -->
			<TheInput
				v-model:value="emailInput"
				:errorMessage="v$.emailInput.$errors"
				type="email"
				name="emailInput"
				lable="Электронная почта *"
				placeholder="ivan@gmail.com"
			></TheInput>
		</form>
	</div>
</template>
