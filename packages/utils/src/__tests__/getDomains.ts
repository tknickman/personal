import getDomains from "../getDomains";

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
});
