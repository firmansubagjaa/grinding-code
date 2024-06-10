import { describe, expect, it } from "bun:test";
import { countUniqueCharacter, isSubstring } from ".";

describe("day 5 in week 2", () => {
  it("should be true", () => {
    let result1 = isSubstring("hello", "llo");
    let result2 = isSubstring("apple", "banana");
    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });

  it("should be count unique character", () => {
    let result = countUniqueCharacter("hello");
    expect(result).toBe(4);
  });
});
