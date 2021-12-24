<script context="module" lang="ts">
	export const prerender = true;

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch(`/md`);
		const collections = await response.json();
		console.log(collections);

		return {
			props: {
				collections,
			},
		};
	};
</script>

<script lang="ts">
	export let collections: { name: string; title: string }[] = [];

	console.log(collections);
</script>

<main
	class="bg-base-100 max-w-md mx-auto mt-20 flex flex-col justify-center align-middle">
	<h1
		class="text-5xl text-primary text-center font-serif font-bold mb-4">
		How to do <span
			class="border border-secondary text-secondary inline-block px-2"
			>X</span>
		in
		<span class="border border-accent text-accent inline-block px-2"
			>Y</span>
	</h1>
	<p class="text-center">
		Small and straight to the point code snippet comparisons, inspired
		by <a
			class="link link-secondary"
			href="https://learnxinyminutes.com">Learn X in Y minutes</a>
	</p>
	<h2 class="text-3xl text-center font-serif mt-6 text-primary">
		List of Snippets
	</h2>
	<ul
		class="list-[circle] marker:text-secondary max-w-xs mx-auto mt-3">
		{#each collections as collection}
			<li>
				<a class="link link-hover" href={`/how-to/${collection.name}`}
					>{collection.title}</a>
			</li>
		{/each}
	</ul>
</main>

<style lang="postcss">
</style>
