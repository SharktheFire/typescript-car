"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Author_1 = require("../Author");
describe('Author', function () {
    it('has forename and surname', function () {
        var author = new Author_1.default('Tom', 'Tasty');
        expect(author.forename).toBe('Tom');
        expect(author.surname).toBe('Tasty');
    });
});
//# sourceMappingURL=Author.test.js.map