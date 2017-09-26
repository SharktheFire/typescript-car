"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Author_1 = require("./Author");
var Article_1 = require("./Article");
var BlogService = /** @class */ (function () {
    function BlogService(articleRepo, authorRepo) {
        this.articleRepo = articleRepo;
        this.authorRepo = authorRepo;
    }
    BlogService.prototype.createAuthor = function (forename, surname) {
        var author = new Author_1.default(forename, surname);
        this.authorRepo.save(author);
        return author;
    };
    BlogService.prototype.createArticle = function (author, headline, content) {
        var article = new Article_1.default({ headline: headline, content: content, author: author });
        this.articleRepo.save(article);
        return article;
    };
    return BlogService;
}());
exports.default = BlogService;
//# sourceMappingURL=BlogService.js.map