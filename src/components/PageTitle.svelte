<script lang="ts">
	export let title: string;
</script>

<h2 class="title">
	How to
	<span class="variable variable-x">{title}</span>
	in:
</h2>

<style lang="postcss">
	.title {
		@apply text-center text-xl;
	}

	.variable {
		@apply border;
	}

	.variable-x {
		@apply border-red-400 bg-red-100;
	}
</style>
