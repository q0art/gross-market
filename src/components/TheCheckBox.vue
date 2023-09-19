<script setup>
import { ref } from 'vue';
import TheCaptchaIcon from './svg/TheCaptchaIcon.vue';

const props = defineProps({
	label: {
		type: String,
		default: '',
	},
	text: {
		type: String,
		default: '',
	},
	type: {
		type: String,
		default: 'text',
	},
});

const isChecked = ref(false);
</script>

<template>
	<div class="">
		<h1 class="checkbox__title">{{ props.label }}</h1>
		<div class="checkbox__wrapper">
			<label for="checkbox">
				<input
					id="checkbox"
					type="checkbox"
					v-model="isChecked"
					class="checkbox__btn"
				/>
			</label>
			<div v-if="props.type === 'captcha'" class="checkbox-content">
				<p class="checkbox-content__text">я не робот</p>
				<TheCaptchaIcon />
			</div>
			<div v-else-if="props.type === 'text'" class="checkbox-content">
				<p class="checkbox-content__text">
					я подтверждаю согласие на обработку персональных данных и принимаю
					условия рассмотрения обращений *
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.checkbox {
	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;

		padding: 12px 16px;

		background: $gray-color;
		border-radius: $border-radius-m;
	}

	&-content {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	&__title {
		font-size: $font-size-xs;

		margin-bottom: 12px;
	}

	&__btn {
		appearance: none;
		width: 24px;
		height: 24px;
		border-radius: $border-radius-m;

		&:checked {
			background: $white-color url('./../../public/icons/checkbox.svg')
				no-repeat center center;
		}

		&:not(:checked) {
			background: $white-color;
		}
	}
}
</style>
