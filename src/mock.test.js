 import {divide, logEnv } from "./testModule";

//mock name export
jest.mock("./testModule", () => {
  return {
    logEnv: () => "Mocked implementation",
  };
});


it("Test mock name export", () => {
  const value = logEnv();
  console.log(logEnv.getMockName);
  expect(value).toBe("Mocked implementation");
});
