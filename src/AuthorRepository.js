"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthorRepository = /** @class */ (function () {
    function AuthorRepository() {
        this.authors = [];
    }
    AuthorRepository.prototype.save = function (author) {
        this.authors.push(author);
    };
    AuthorRepository.prototype.findBySurname = function (surname) {
        for (surname in this.authors) {
            return this.authors;
        }
    };
    AuthorRepository.prototype.findAll = function () {
        return this.authors;
    };
    AuthorRepository.prototype.delete = function (author) {
        this.authors.splice(this.authors.indexOf(author), 1);
    };
    return AuthorRepository;
}());
exports.default = AuthorRepository;
//# sourceMappingURL=AuthorRepository.js.map