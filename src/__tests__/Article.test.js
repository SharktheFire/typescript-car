"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Article_1 = require("../Article");
var Author_1 = require("../Author");
describe('Article', function () {
    it('has headline and content', function () {
        var headline = 'some fancy headline';
        var content = 'very important article text';
        var author = new Author_1.default('Tom', 'Tasty');
        var article = new Article_1.default({ headline: headline, content: content, author: author });
        expect(article.headline).toEqual(headline);
        expect(article.content).toEqual(content);
        expect(article.author).toBe(author);
    });
});
//# sourceMappingURL=Article.test.js.map