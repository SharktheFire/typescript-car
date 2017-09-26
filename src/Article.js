"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Article = /** @class */ (function () {
    function Article(config) {
        this.config = config;
    }
    Object.defineProperty(Article.prototype, "headline", {
        get: function () {
            return this.config.headline;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "content", {
        get: function () {
            return this.config.content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Article.prototype, "author", {
        get: function () {
            return this.config.author;
        },
        enumerable: true,
        configurable: true
    });
    return Article;
}());
exports.default = Article;
//# sourceMappingURL=Article.js.map