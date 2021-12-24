export type FileResolver = () => Promise<{ default: string }>;

export interface Language {
	name: string;
	samples: FileResolver[];
}

export interface SnipperCollection {
	title: string;
	snippets: Record<string, CodeSnippet[]>;
}

export interface CodeSnippet {
	lang: string;
	code: string;
}
