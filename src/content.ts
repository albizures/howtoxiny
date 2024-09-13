import { type CollectionEntry, getCollection } from 'astro:content'
import { createCollection, type SnippetCollection } from './markdown'

export function getHowTo(filter?: EntryFilter<HowTo>) {
	return getCollection('how-to', filter)
}

export function getHowToSnippets(howTo: HowTo): SnippetCollection {
	return createCollection(howTo.body)
}
export type HowTo = CollectionEntry<'how-to'>
export type EntryFilter<TEntry> = (entry: TEntry) => boolean
