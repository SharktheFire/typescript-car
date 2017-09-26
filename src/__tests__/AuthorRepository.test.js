"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Author_1 = require("../Author");
var AuthorRepository_1 = require("../AuthorRepository");
describe('AuthorRepository', function () {
    var repository;
    beforeEach(function () {
        repository = new AuthorRepository_1.default();
    });
    it('saves an author', function () {
        var author = new Author_1.default('Tom', 'Tasty');
        repository.save(author);
    });
    it('finds author by surname', function () {
        var author = new Author_1.default('Tom', 'Tasty');
        repository.save(author);
        expect(repository.findBySurname('Tasty')).toEqual([author]);
    });
    it('finds all authors', function () {
        var author1 = new Author_1.default('Tom', 'Tasty');
        var author2 = new Author_1.default('Tim', 'Toasty');
        repository.save(author1);
        repository.save(author2);
        expect(repository.findAll()).toEqual([
            author1,
            author2,
        ]);
    });
    it('deletes author', function () {
        var author1 = new Author_1.default('Tom', 'Tasty');
        var author2 = new Author_1.default('Tim', 'Toasty');
        repository.save(author1);
        repository.save(author2);
        repository.delete(author1);
        expect(repository.findAll()).toEqual([author2]);
    });
});
//# sourceMappingURL=AuthorRepository.test.js.map