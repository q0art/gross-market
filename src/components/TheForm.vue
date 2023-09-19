<script setup>
import { ref } from 'vue';

import TheInput from './TheInput.vue';
import TheSelect from './TheSelect.vue';
import TheRadio from './TheRadio.vue';
import TheResume from './TheResume.vue';
import TheCheckBox from './TheCheckBox.vue';

import { options } from './../scripts/const';
import TheButton from './TheButton.vue';

const nameInput = ref('');
const dateInput = ref('');
const phoneInput = ref('');
const emailInput = ref('');
</script>

<template>
	<div class="container">
		<h1 class="form__title">Работа твоей мечты</h1>
		<div class="form__wrapper">
			<form class="form">
				<TheSelect :options="options" label="Вакансия *" />
				<!--  -->
				<TheInput
					type="text"
					placeholder="Иванов Иван Иванович"
					label="ФИО *"
					v-model:value.trim="nameInput"
				/>
				<div class="form-center">
					<TheInput
						type="datetime"
						placeholder="20.01.2001"
						label="Дата рождения *"
						v-model:value.trim="dateInput"
					/>
					<!--  -->
					<TheInput
						type="tel"
						placeholder="+7 (926) 433-14-16"
						label="Контактый телефон *"
						v-model:value.trim="phoneInput"
					/>
					<!--  -->
					<TheInput
						type="email"
						placeholder="ivanov@mail.ru"
						label="Электронная почта *"
						v-model:value.trim="emailInput"
					/>
					<!--  -->
					<TheRadio
						label="Пол"
						first-option="мужской"
						second-option="женский"
					/>
				</div>
				<TheResume label="Резюме" />
				<!--  -->
				<div class="form-bottom">
					<TheCheckBox label="Капча" type="captcha" />
					<p class="form-bottom__text">* поля для обязательного заполнения</p>
				</div>
				<!--  -->
				<TheCheckBox label="" type="text" />
				<!--  -->
				<TheButton type="submit">Отправить</TheButton>
			</form>
			<div class="form-about">
				<h2 class="form-about__title">Наша суперцель</h2>
				<p class="form-about__text">
					— стать любимым магазином для каждой российской семьи.
				</p>
				<p class="form-about__text">
					Сотни тысяч наших сотрудников ежедневно работают над её достижением.
				</p>
				<p class="form-about__text">
					Мы уверены, что в ближайшие годы достигнем этого и будет здорово, если
					вместе с тобой.
				</p>
				<a href="tel:+79264331416" class="form-about__link"
					>+7 (926) 433-14-16</a
				>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import './../styles/mixins/breakpoints';

.form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	max-width: calc(50% - 30px);

	@include high-tablet {
		max-width: 100%;
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

		max-width: calc(50% - 30px);

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

	&-center {
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

	&-bottom {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		gap: 30px;

		@include high-tablet {
			min-width: 100%;
		}

		@include high-mobile {
			display: flex;
			flex-direction: column;
			align-items: start;
		}

		&__text {
			color: $silver-color;
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
