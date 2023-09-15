<script setup>
const props = defineProps({
	errorMessage: {
		type: Array,
		required: false,
	},
	value: {
		type: String,
		default: '',
	},
	type: {
		type: String,
		default: 'text',
	},
	name: {
		type: String,
		default: '',
	},
	lable: {
		type: String,
		default: '',
	},
	placeholder: {
		type: String,
		default: '',
	},
});
const emit = defineEmits(['update:value']);
const updateValue = ({ target }) => {
	emit('update:value', target.value);
};
</script>

<template>
	<div class="input__wrapper">
		<div class="input__lable">
			<div class="input__text">{{ props.lable }}</div>
		</div>
		<input
			@input="updateValue"
			:type="type"
			:name="name"
			:placeholder="placeholder"
			class="input"
		/>
		{{ props.errorMessage }}
	</div>
</template>
