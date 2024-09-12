import { type CollectionEntry, getCollection } from 'astro:content'
import { createCollection, type SnippetCollection } from './markdown'

export function getHowToDos(filter?: EntryFilter<HowToDo>) {
	return getCollection('how-to', filter)
}

export function getHowToSnippets(howTo: HowToDo): SnippetCollection {
	return createCollection(howTo.body)
}
export type HowToDo = CollectionEntry<'how-to'>
export type EntryFilter<TEntry> = (entry: TEntry) => boolean
