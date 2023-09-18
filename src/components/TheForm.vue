<script setup>
import { ref } from 'vue';

import TheInput from './TheInput.vue';
import TheSelect from './TheSelect.vue';
import TheRadio from './TheRadio.vue';
import TheResume from './TheResume.vue';
import TheCheckBox from './TheCheckBox.vue';

import { options } from './../scripts/const';
import TheCaptcha from './svg/TheCaptcha.vue';
import TheButton from './TheButton.vue';

const nameInput = ref('');
const dateInput = ref('');
const phoneInput = ref('');
const emailInput = ref('');
</script>

<template>
	<div class="container form__container">
		<h1 class="form__title">Работа твоей мечты</h1>
		<div class="form__wrapper">
			<form class="form">
				<TheSelect :options="options" label="Вакансия *"> </TheSelect>
				<!--  -->
				<TheInput
					type="text"
					placeholder="Иванов Иван Иванович"
					label="ФИО *"
					v-model:value.trim="nameInput"
				>
				</TheInput>
				<div class="form-center">
					<TheInput
						type="datetime"
						placeholder="20.01.2001"
						label="Дата рождения *"
						v-model:value.trim="dateInput"
					>
					</TheInput>
					<!--  -->
					<TheInput
						type="tel"
						placeholder="+7(926)433-14-16"
						label="Контактый телефон *"
						v-model:value.trim="phoneInput"
					>
					</TheInput>
					<!--  -->
					<TheInput
						type="email"
						placeholder="ivanov@mail.ru"
						label="Электронная почта *"
						v-model:value.trim="emailInput"
					>
					</TheInput>
					<!--  -->
					<TheRadio
						label="Пол"
						first-option="мужской"
						second-option="женский"
					></TheRadio>
				</div>
				<TheResume label="Резюме"></TheResume>
				<!--  -->
				<div class="form-bottom">
					<TheCheckBox label="Капча">
						<div class="checkbox__content">
							<p class="checkbox__text">я не робот</p>
							<TheCaptcha></TheCaptcha>
						</div>
					</TheCheckBox>
					<p class="form-bottom__text">* поля для обязательного заполнения</p>
				</div>
				<!--  -->
				<TheCheckBox label=""
					>я подтверждаю согласие на обработку персональных данных и принимаю
					условия рассмотрения обращений *</TheCheckBox
				>
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
.form {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;

	max-width: 50%;

	&__container {
		padding: 60px 0 90px;
	}

	&__title {
		font-size: $font-size-x;
		line-height: $line-height-x;

		margin-bottom: 50px;
	}

	&__wrapper {
		display: flex;
		justify-content: space-between;
		gap: 120px;
	}

	&-input__wrapper,
	&-select__wrapper,
	&-textarea__wrapper {
		width: 100%;
	}

	&-about {
		display: flex;
		flex-direction: column;
		gap: 24px;

		max-width: 50%;

		line-height: $line-height-m;

		&__title {
			font-size: $font-size-l;
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

		margin-bottom: 12px;

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
	}

	&-bottom {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: end;
		gap: 30px;

		&__text {
			color: $silver-color;
		}
	}

	&__error-message {
		font-size: $font-size-xs;
		color: $red-color;
	}
}
</style>
