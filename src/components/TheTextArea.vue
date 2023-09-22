<script setup>
const props = defineProps({
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
</script>

<template>
	<div class="form-input__wrapper">
		<div class="form-header">
			<h2 class="form-header__title">{{ props.label }}</h2>
			{{ props.value }}
		</div>
		<textarea :placeholder="props.placeholder" class="form-textarea field"></textarea>
	</div>
</template>

<style lang="scss">
.form-textarea {
	min-height: 96px;
	resize: none;

	font-family: $font-family;
}
</style>
