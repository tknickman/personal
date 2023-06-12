import getDomains from "../server/other/getDomains";

describe("getDomains", () => {
  it("works as expected", () => {
    expect(
      getDomains({ hostnames: "thomasknickman.com,tomk.info" })
    ).toStrictEqual([
      "thomasknickman.com",
      "www.thomasknickman.com",
      "tomk.info",
      "www.tomk.info",
    ]);
  });

  it("does not throw with an no arguments", () => {
    expect(getDomains({})).toStrictEqual([]);
  });
});
