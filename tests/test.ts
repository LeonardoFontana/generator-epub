import { expect } from "chai";
import helpers from "yeoman-test";
import f from "../src/app";

describe("ccc", () => {
  let runResult;
  beforeEach(async () => {
    runResult = await helpers
      .create("../src/app", {}, {})
      .withPrompts({
        author: "author",
        title: "title",
        name: "name",
      }) // Mock the prompt answers
      .run();
  });
  afterEach(() => {
    if (runResult) {
      runResult.restore();
    }
  });

  it("test", () => {
    expect(true).to.be.true;
  });
  it("test yeo", () => {
    runResult.assertNoFile('file.txt');
  });
});
