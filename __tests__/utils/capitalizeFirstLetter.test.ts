import { capitalizeFirstLetter } from "@/utils";

test("capitalizeFirstLetter returns a string with the first letter capitalized", () => {
  expect(capitalizeFirstLetter("hello, world!")).toBe("Hello, world!");
});