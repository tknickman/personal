import { NextRouter } from "next/router";

export default function createMockRouter(
  router: Partial<NextRouter>
): NextRouter {
  return {
    basePath: "",
    pathname: "/",
    route: "/",
    query: {},
    forward: jest.fn(),
    asPath: "/",
    back: jest.fn(),
    beforePopState: jest.fn(),
    prefetch: jest.fn(),
    push: jest.fn(),
    reload: jest.fn(),
    replace: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    defaultLocale: "en",
    domainLocales: [],
    isPreview: false,
    ...router,
  };
}
