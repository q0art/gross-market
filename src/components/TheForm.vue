<script setup>
import { ref } from 'vue';

import TheInput from './TheInput.vue';
import TheSelect from './TheSelect.vue';
import TheRadio from './TheRadio.vue';
import TheTextArea from './TheTextArea.vue';
import TheInputFile from './TheInputFile.vue';
import TheButton from './TheButton.vue';
import CheckBoxCaptcha from './CheckBoxCaptcha.vue';
import CheckBoxAgreement from './CheckBoxAgreement.vue';

import { options } from './../scripts/const';

const nameInput = ref('');
const dateInput = ref('');
const phoneInput = ref('');
const emailInput = ref('');
const fileInput = ref('');
//const textInput = ref('');
</script>

<template>
	<TheSelect :options="options" label="Вакансия *" />
	<TheInput
		type="text"
		placeholder="Иванов Иван Иванович"
		label="ФИО *"
		v-model:value.trim="nameInput"
	/>
	<div class="form-top">
		<TheInput
			:with-mask="true"
			:mask="'##.##.####'"
			type="datetime"
			placeholder="20.01.2001"
			label="Дата рождения *"
			v-model:value.trim="dateInput"
		/>
		<TheRadio label="Пол" first-option="мужской" second-option="женский" />
		<TheInput
			:with-mask="true"
			:mask="'+7 (###) ###-##-##'"
			type="tel"
			placeholder="+7 (926) 433-14-16"
			label="Контактый телефон *"
			v-model:value.trim="phoneInput"
		/>
		<TheInput
			type="email"
			placeholder="ivanov@mail.ru"
			label="Электронная почта *"
			v-model:value.trim="emailInput"
		/>
	</div>
	<div class="form-center">
		<TheTextArea placeholder="" label="Резюме" />
		<TheInputFile v-model:value="fileInput" placeholder="выберете или перетащите файл" />
	</div>
	<div class="form-bottom">
		<CheckBoxCaptcha label="Капча" />
		<p class="form-bottom__text">* поля для обязательного заполнения</p>
	</div>
	<CheckBoxAgreement label="" />
	<TheButton type="submit">отправить</TheButton>
</template>

<style lang="scss">
@import './../styles/mixins/breakpoints';
@import './../styles/mixins/hover';
.form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	max-width: calc(50% - 62px);

	@include high-tablet {
		max-width: 100%;
	}

	&__container {
		padding-top: 72px;

		@include high-mobile {
			padding-top: 48px;
		}
	}

	&__title {
		font-size: $font-size-2x;
		line-height: $line-height-x;

		margin-bottom: 50px;

		@include high-mobile {
			font-size: $font-size-x;
			line-height: $line-height-l;
		}
	}

	&__wrapper {
		display: flex;
		justify-content: space-between;

		@include high-tablet {
			flex-direction: column;
			gap: 72px;
		}

		@include high-mobile {
			gap: 48px;
		}
	}

	&-input__wrapper,
	&-select__wrapper,
	&-textarea__wrapper {
		position: relative;

		width: 100%;
	}

	&-about {
		display: flex;
		flex-direction: column;
		gap: 24px;

		max-width: calc(50% - 62px);

		line-height: $line-height-m;

		@include high-tablet {
			max-width: 100%;
		}

		&__title {
			font-size: $font-size-l;

			@include high-mobile {
				font-size: $font-size-m;
			}
		}

		&__text {
			font-size: $font-size-s;
		}

		&__link {
			@include slow-hover-bg($yellow-color);

			padding: 22px 0;

			font-size: $font-size-m;
			text-align: center;

			background-color: $gray-color;
			border-radius: $border-radius-m;
		}
	}

	&-header {
		display: flex;
		align-items: center;
		gap: 8px;

		margin-bottom: 8px;

		&__title {
			font-size: $font-size-xs;
		}

		&__icon {
			width: 18px;
			height: 18px;
		}
	}

	&-top {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		justify-content: center;
		align-items: center;
		gap: 30px;

		@include high-tablet {
			min-width: 100%;
		}

		@include high-mobile {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
	}

	&-center {
		display: flex;
		flex-direction: column;
		gap: 12px;

		min-width: 100%;
	}

	&-bottom {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		gap: 24px;

		@include high-tablet {
			min-width: 100%;
		}

		@include high-mobile {
			display: flex;
			flex-direction: column;
			align-items: start;
		}

		&__text {
			font-size: $font-size-xs;

			color: $silver-color;

			padding-top: 20px;

			@include high-mobile {
				font-size: $font-size-xs;
				padding: 0;
			}
		}
	}

	&__error-message {
		position: absolute;
		top: 76px;
		left: 0px;

		font-size: $font-size-xs;
		color: $red-color;
	}
}
</style>
