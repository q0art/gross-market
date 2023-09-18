<script setup>
import { ref } from 'vue';

const props = defineProps({
	label: {
		type: String,
		default: '',
	},
	text: {
		type: String,
		default: '',
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
			<slot></slot>
		</div>
	</div>
</template>

<style lang="scss">
.checkbox {
	&__wrapper {
		display: flex;
		justify-content: space-between;
		gap: 12px;

		padding: 12px 16px;

		background: $gray-color;
		border-radius: $border-radius-m;
	}

	&__content {
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
		background: $white-color;

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
