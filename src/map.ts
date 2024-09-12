type Callback<TIn, TOut> = (item: TIn) => TOut

export function map<TKey, TValue, TOut>(collection: Map<TKey, TValue>, callback: Callback<[TKey, TValue], TOut>): Array<TOut>
export function map<TIn, TOut>(collection: Set<TIn>, callback: Callback<TIn, TOut>): Array<TOut>
export function map<TIn, TOut>(collection: Array<TIn>, callback: Callback<TIn, TOut>): Array<TOut>
export function map<TKey, TValue, TIn, TOut>(collection: Array<TIn> | Map<TKey, TValue> | Set<TIn>, callback: Callback<TIn | [TKey, TValue], TOut>): Array<TOut> {
	const result: Array<TOut> = []

	for (const item of collection) {
		result.push(callback(item))
	}

	return result
}
