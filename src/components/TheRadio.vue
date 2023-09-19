<script setup>
import { ref, computed } from 'vue';
import TheCheckIcon from './svg/TheCheckIcon.vue';

const props = defineProps({
	label: {
		type: String,
		default: '',
	},
	firstOption: {
		type: String,
		required: true,
	},
	secondOption: {
		type: String,
		required: true,
	},
});

const selectedOption = ref('');

const isValid = computed(() => selectedOption.value !== '');
const errorMessage = 'Пожалуйста, выберите одну из опций';
</script>

<template>
	<div class="from-radio__container">
		<div class="form-header">
			<h3 class="form-header__title">{{ props.label }}</h3>
			<div v-if="isValid" class="form-header__icon">
				<TheCheckIcon />
			</div>
		</div>
		<div class="form-radio__wrapper">
			<label class="form-radio">
				<input
					type="radio"
					id="firstOption"
					v-model="selectedOption"
					value="{{ props.firstOption }}"
					class="form-radio__btn"
				/>
				<p for="firstOption">{{ props.firstOption }}</p>
			</label>
			<label class="form-radio">
				<input
					type="radio"
					id="secondOption"
					v-model="selectedOption"
					value="{{ props.secondOption }}"
					class="form-radio__btn"
				/>
				<p for="secondOption">{{ props.secondOption }}</p>
			</label>
		</div>
		<!-- f -->
		<div v-if="!isValid && selectedOption !== ''" class="form__error-message">
			{{ errorMessage }}
		</div>
	</div>
</template>

<style lang="scss">
.form-radio {
	display: flex;
	align-items: center;
	gap: 12px;

	&__btn {
		appearance: none;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: $gray-color;

		&:checked {
			background: $black-color;
			border: 8px solid $gray-color;
		}
	}

	&__container {
	}

	&__wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
