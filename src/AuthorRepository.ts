import Author from './Author'

export default class AuthorRepository {

    private authors: Author []

    public constructor() {
        this.authors = []
    }

    public save(author: Author) {
        this.authors.push(author)
    }

    public findBySurname(surname: string) {
        for (surname in this.authors) {
            return this.authors
        }
    }

    public findAll() {
        return this.authors
    }

    public delete(author: Author) {
        this.authors.splice(this.authors.indexOf(author), 1)
    }
}