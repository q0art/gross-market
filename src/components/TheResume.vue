<script setup>
import TheInputFile from './TheInputFile.vue';

const props = defineProps({
	label: { type: String, default: '' },
});
</script>

<template>
	<div class="form-input__wrapper">
		<div class="form-header">
			<h2 class="form-header__title">{{ props.label }}</h2>
		</div>
		<textarea class="form-textarea field"> всем привет, я ни за что не отвечаю)) </textarea>
		<TheInputFile placeholder="выберете или перетащите файл"></TheInputFile>
	</div>
</template>

<style lang="scss">
.form-textarea {
	width: 100%;
	min-height: 96px;
	resize: none;

	font-family: $font-family;

	margin-bottom: 10px;
}
</style>
