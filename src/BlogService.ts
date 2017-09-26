import AuthorRepository from './AuthorRepository'
import ArticleRepository from './ArticleRepository'
import Author from './Author'
import Article from './Article'

export default class BlogService {

    public constructor(private articleRepo: ArticleRepository, private authorRepo: AuthorRepository) {}

    public createAuthor(forename: string, surname: string) {

        let author = new Author(forename, surname)
        this.authorRepo.save(author)
        return author
    }

    public createArticle(author: Author, headline: string, content: string) {

        let article = new Article({headline, content, author})
        this.articleRepo.save(article)
        return article
    }
}