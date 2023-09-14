<script setup>
import InputName from './InputName.vue';
import SelectVacancy from './SelectVacancy.vue';
import InputBirthday from './InputBirthday.vue';
import CheckBoxGender from './CheckBoxGender.vue';
import InputEmail from './InputEmail.vue';
import InputResume from './InputResume.vue';
import InputPhone from './InputPhone.vue';
import InputFile from './InputFile.vue';
import CheckBoxCaptcha from './CheckBoxCaptcha.vue';
import CheckBoxPolicy from './CheckBoxPolicy.vue';
import ButtonSend from './ButtonSend.vue';

const options = ['___', 'товаровед', 'водитель', 'пекарь', 'кассир', 'продавец', 'повар', 'приёмщик'];
</script>

<template>
	<div class="form">
		<div class="container form__container">
			<h1 class="form__title">Работа твоей мечты</h1>
			<div class="form__wrapper">
				<div class="form__left">
					<SelectVacancy :options="options"></SelectVacancy>
					<InputName></InputName>
					<div class="form__center">
						<InputBirthday></InputBirthday>
						<CheckBoxGender></CheckBoxGender>
						<InputPhone></InputPhone>
						<InputEmail></InputEmail>
					</div>
					<InputResume></InputResume>
					<InputFile></InputFile>
					<div class="form__bottom">
						<CheckBoxCaptcha></CheckBoxCaptcha>
						<CheckBoxPolicy></CheckBoxPolicy>
					</div>
					<ButtonSend>Отправить</ButtonSend>
				</div>
				<div class="form__right">
					<h2 class="form__right-title">Наша суперцель</h2>
					<p class="form__right-text">&mdash;&nbsp;стать любимым магазином для каждой российской семьи.</p>
					<p class="form__right-text">Сотни тысяч наших сотрудников ежедневно работают над её&nbsp;достижением.</p>
					<p class="form__right-text">Мы&nbsp;уверены, что в&nbsp;ближайшие годы достигнем этого и&nbsp;будет здорово,если вместе с&nbsp;тобой.</p>
					<a href="tel:89264331416" class="form__right-phone">+7&nbsp;(926)&nbsp;433-14-16</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.form {
	padding: 72px 0;

	&__container {
		display: flex;
		flex-direction: column;
		gap: 48px;
	}

	&__title {
		font-size: $font-size-x;
		font-weight: 500;
	}

	&__wrapper {
		display: flex;
		justify-content: space-between;
	}

	&__left {
		display: flex;
		flex-direction: column;
		gap: 30px;

		max-width: 540px;
	}

	&__center {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
	}

	&__bottom {
	}

	&__right {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 24px;

		max-width: 440px;

		&-title {
			font-size: $font-size-l;
			font-weight: 500;
		}

		&-text {
			font-size: $font-size-m;
			font-weight: 500;
		}

		&-phone {
			padding: 22px 0;
			text-align: center;

			font-size: $font-size-m;
			font-weight: 500;

			background-color: $gray-color;
			border-radius: $border-radius-m;
		}
	}
}

.input,
.select {
	width: 100%;

	padding: 12px 16px;

	font-size: $font-size-s;
	font-weight: 500;

	background: $gray-color;
	border-radius: $border-radius-m;
}
</style>
