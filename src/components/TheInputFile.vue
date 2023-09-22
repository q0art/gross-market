<script setup>
import { ref } from 'vue';
import PaperClip from './svg/PaperClip.vue';

const props = defineProps({
	placeholder: {
		type: String,
		default: '',
	},
	value: {
		type: String,
		default: '',
	},
});

const emit = defineEmits(['update:value']);
const updateValue = ({ target }) => {
	emit('update:value', target.files[0].name);
};
</script>

<template>
	<label class="form-file__wrapper field">
		<input type="file" @input="updateValue" class="form-file" :placeholder="props.placeholder" />
		<div class="form-file__image">
			<PaperClip />
		</div>
		<div v-if="props.value" class="form-file__text">
			{{ props.value }}
		</div>
		<div v-else class="form-file__text">выберете или перетащите файл</div>
	</label>
</template>

<style lang="scss">
.form-file {
	display: none;

	&__wrapper {
		display: flex;
		gap: 12px;
	}

	&__text {
		color: $silver-color;
	}
}
</style>
