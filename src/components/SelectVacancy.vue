<script setup>
import ValideField from './ValideField.vue';

const props = defineProps({
	options: Array,
});

const handler = ({ target }) => {
	console.log(target.value >= 1);
	return target.value >= 1;
};
</script>

<template>
	<div class="select__container">
		<ValideField :state="false">Вакансия *</ValideField>
		<select class="select" @change="handler">
			<option v-for="(option, index) in options" :key="options[index]" :value="index">{{ option }}</option>
		</select>
	</div>
</template>
