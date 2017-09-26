"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArticleRepository = /** @class */ (function () {
    function ArticleRepository() {
        this.articles = [];
    }
    ArticleRepository.prototype.save = function (article) {
        this.articles.push(article);
    };
    ArticleRepository.prototype.findByAuthor = function (author) {
        var articleArray = [];
        this.articles.forEach(function (article) {
            if (article.author === author) {
                articleArray.push(article);
            }
        });
        return articleArray;
    };
    ArticleRepository.prototype.findAll = function () {
        return this.articles;
    };
    ArticleRepository.prototype.delete = function (article) {
        this.articles.splice(this.articles.indexOf(article), 1);
    };
    return ArticleRepository;
}());
exports.default = ArticleRepository;
//# sourceMappingURL=ArticleRepository.js.map