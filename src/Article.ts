import Author from './Author'

interface Config {
    headline: string
    content: string
    author: Author
}

export default class Article {

    public constructor(private config: Config) { }

    public get headline(): string {
        return this.config.headline
    }

    public get content(): string {
        return this.config.content
    }

    public get author(): Author {
        return this.config.author
    }
}




