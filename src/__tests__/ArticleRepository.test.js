"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Article_1 = require("../Article");
var ArticleRepository_1 = require("../ArticleRepository");
var Author_1 = require("../Author");
describe('ArticleRepository', function () {
    var repository;
    beforeEach(function () {
        repository = new ArticleRepository_1.default();
    });
    it('saves an article', function () {
        var author = new Author_1.default('Tom', 'Tasty');
        var article = new Article_1.default({ author: author, content: 'some content', headline: 'some headline' });
        repository.save(article);
    });
    it('finds article by author', function () {
        var author = new Author_1.default('Tom', 'Tasty');
        var article = new Article_1.default({ author: author, content: 'some content', headline: 'some headline' });
        repository.save(article);
        expect(repository.findByAuthor(author)).toEqual([article]);
    });
    it('finds all articles', function () {
        var author1 = new Author_1.default('Tom', 'Tasty');
        var article1 = new Article_1.default({ author: author1, content: 'some content', headline: 'some headline' });
        var author2 = new Author_1.default('Tom', 'Tasty');
        var article2 = new Article_1.default({ author: author2, content: 'some content', headline: 'some headline' });
        repository.save(article1);
        repository.save(article2);
        expect(repository.findAll()).toEqual([
            article1,
            article2,
        ]);
    });
    it('deletes author', function () {
        var author1 = new Author_1.default('Tom', 'Tasty');
        var article1 = new Article_1.default({ author: author1, content: 'some content', headline: 'some headline' });
        var author2 = new Author_1.default('Tom', 'Tasty');
        var article2 = new Article_1.default({ author: author2, content: 'some content', headline: 'some headline' });
        repository.save(article1);
        repository.save(article2);
        repository.delete(article1);
        expect(repository.findAll()).toEqual([article2]);
    });
});
//# sourceMappingURL=ArticleRepository.test.js.map