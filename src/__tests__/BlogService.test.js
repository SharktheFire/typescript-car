"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArticleRepository_1 = require("../ArticleRepository");
var AuthorRepository_1 = require("../AuthorRepository");
var BlogService_1 = require("../BlogService");
describe('BlogService', function () {
    var service;
    var articleRepository;
    var authorRepository;
    beforeEach(function () {
        articleRepository = new ArticleRepository_1.default();
        authorRepository = new AuthorRepository_1.default();
        service = new BlogService_1.default(articleRepository, authorRepository);
    });
    it('creates an author', function () {
        var author = service.createAuthor('Tom', 'Tasty');
        expect(authorRepository.findAll()).toContain(author);
    });
    it('creates an article', function () {
        var author = service.createAuthor('Tom', 'Tasty');
        var article = service.createArticle(author, 'some fancy headline', 'some important text');
        expect(articleRepository.findAll()).toContain(article);
    });
});
//# sourceMappingURL=BlogService.test.js.map