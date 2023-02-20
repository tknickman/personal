import { default as getHostFromHostName } from "../other/getHostFromHostName";

describe("getHostFromHostName", () => {
  it("does not throw with an no arguments", () => {
    expect(getHostFromHostName({})).toBeNull();
  });

  it("does not throw with an empty string", () => {
    expect(getHostFromHostName({ hostName: "" })).toBeNull();
  });

  it("strips www. as expected", () => {
    expect(getHostFromHostName({ hostName: "www.thomasknickman.com" })).toBe(
      "thomasknickman"
    );
  });

  it("strips tld as expected", () => {
    expect(getHostFromHostName({ hostName: "thomasknickman.com" })).toBe(
      "thomasknickman"
    );
  });
});
