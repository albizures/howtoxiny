<script context="module" lang="ts">
	export const prerender = true;

	import type { Load } from '@sveltejs/kit';
	import type { SnipperCollection } from '../../types';
	import { highlight } from '../../utils';

	export const load: Load = async ({ page, fetch }) => {
		const response = await fetch(
			`/api/collections/${page.params.slug}.json`,
		);

		const collection = await response.json();
		const languages = Object.keys(collection.snippets);

		return {
			props: {
				collection,
				languages,
			},
		};
	};
</script>

<script lang="ts">
	export let collection: SnipperCollection = {
		title: '',
		snippets: {},
	};
	export let languages: string[] = [];

	const onScroll = (
		event: WheelEvent & { currentTarget: HTMLDivElement },
	) => {
		const el = event.currentTarget;
		if (
			!event.deltaY ||
			(el.scrollLeft === 0 && event.deltaY < 0) ||
			(el.scrollLeft >=
				el.scrollWidth - el.parentElement!.clientWidth &&
				event.deltaY > 0)
		) {
			return;
		}

		el.scrollLeft += event.deltaY + event.deltaX;
		event.preventDefault();
	};
</script>

<div class="bg-base-200 p-4 pb-6">
	<div class="max-w-xl mx-auto">
		<h1>
			<span class="text-base text-primary">How to</span>
			<span class="text-3xl font-bold block">{collection.title}</span>
			<span class="text-base inline-block mt-2 text-primary"
				>in:
				{#each languages as lang (lang)}
					<span class="language-badge">
						#{lang}
					</span>
				{/each}
			</span>
		</h1>
	</div>
</div>

<div
	on:mousewheel={onScroll}
	class="languages overflow-y-auto pl-44 pb-4">
	{#each languages as lang (lang)}
		<div class="lang px-2 py-3">
			<h4 class="lang-title">{lang}</h4>
			<div class="samples">
				{#each collection.snippets[lang] as snippet}
					<div class="sample mb-2">
						<pre class="leading-4">{@html highlight(
								snippet.code,
								snippet.lang,
							)}</pre>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	.lang-title {
		@apply text-lg rounded-2xl text-center uppercase bg-neutral border-b border-base-100;
	}

	.sample {
		@apply rounded-2xl overflow-hidden shadow-lg bg-neutral pr-2;
	}

	.samples {
		@apply flex flex-col mt-3;
	}

	.languages {
		@apply flex w-auto flex-nowrap flex-row mt-4 pt-4;
	}

	.language-badge {
		@apply border border-secondary text-secondary inline-block ml-1 px-2 text-sm rounded-xl;
	}
</style>
