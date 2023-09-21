<script setup>
const props = defineProps({
	action: {
		type: Function,
		default: () => true,
	},
	type: {
		type: String,
		default: 'button',
	},
});
</script>

<template>
	<button :type="props.type" @click="props.action" class="form__btn">
		<slot />
	</button>
</template>

<style lang="scss">
@import './../styles/mixins/hover';

.form__btn {
  @include slow-hover($yellow-color);
	font-style: $font-size-s;
	font-weight: 500;
	text-align: center;
	width: 100%;
	padding: 12px 16px;
	background: $gray-color;
	border-radius: $border-radius-m;
}
</style>
