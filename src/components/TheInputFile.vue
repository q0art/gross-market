<script setup>
import TheClipboard from './svg/TheClipboard.vue';

const props = defineProps({
	placeholder: {
		type: String,
		default: '',
	},
});
</script>

<template>
	<label class="form-file__wrapper field">
		<input type="file" class="form-file" :placeholder="props.placeholder" />
		<div class="form-file__image">
			<TheClipboard></TheClipboard>
		</div>
		<div class="form-file__text">выберете или перетащите файл</div>
	</label>
</template>

<style lang="scss">
.form-file {
	display: none;

	&__wrapper {
		display: flex;
		gap: 12px;
		align-items: center;
	}

	&__text {
		color: $silver-color;
	}
}
</style>
