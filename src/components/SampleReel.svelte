<script lang="ts">
	import { Language } from '../types';
	export let languages: Language[];
</script>

<div class="languages">
	{#each languages as lang (lang.name)}
		<div class="lang bg-neutral">
			<h4 class="lang-title">{lang.name}</h4>
			<div class="samples bg-neutral">
				{#each lang.samples as sample}
					<div class="sample">
						{#await sample()}
							<span>loading...</span>
						{:then code}
							<pre>{code.default}</pre>
						{/await}
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.lang-title {
		@apply text-lg text-center capitalize;
	}

	.lang {
		/* @apply ; */
	}

	.sample {
		@apply border border-gray-300 rounded p-1 m-1 shadow;
	}

	.samples {
		@apply flex flex-col;
	}

	.languages {
		@apply flex w-auto space-x-10 flex-nowrap flex-row justify-center mt-4;
	}
</style>
