<script setup></script>

<template>
	<button class="btn--send"><slot></slot></button>
</template>

<style lang="scss">
.btn--send {
	padding: 12px 0;

	font-size: $font-size-s;
	font-weight: 500;

	background: $gray-color;
	border-radius: 8px;

	transition: 0.4s ease-out all;
}

.btn--send:hover {
	background: $yellow-color;
}

.btn--send:active {
	scale: 90%;
}
</style>
