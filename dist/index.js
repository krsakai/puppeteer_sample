"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_crawler_1 = __importDefault(require("./test_crawler"));
(async () => {
    const crawler = new test_crawler_1.default();
    await crawler.run();
})();
//# sourceMappingURL=index.js.map