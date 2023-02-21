# TEK Personal Monorepo

[![thomasknickman](./assets/thomasknickman.svg)](https://www.tomk.info?ref=github_readme)
![thomasknickman](./assets/divider.svg)
[![teknologist](./assets/teknologist.svg)](https://www.teknologist.co?ref=github_readme)

Contains all code for personal sites.
Written in [typescript](https://www.typescriptlang.org) using [react](https://reactjs.org), [next.js](https://nextjs.org), [tailwindcss](https://tailwindcss.com), with [turborepo](https://turborepo.org).

## Applications

| ID  | App                               | Status | Description                       |
| --- | --------------------------------- | ------ | --------------------------------- |
| 1.  | [`info`](apps/info)               | ✅     | My contact information            |
| 2.  | [`parked`](apps/parked)           | ✅     | Parked domain                     |
| 3.  | [`portfolio`](apps/portfolio)     | 🏗      | Personal Portfolio                |
| 4.  | [`share`](apps/share)             | ✅     | Public File Share                 |
| 5.  | [`teknologist`](apps/teknologist) | ✅     | Consulting landing / contact page |
| 6.  | [`wedding`](apps/wedding)         | ✅     | Personal Wedding RSVP page        |

## Packages

| ID  | Package                                        | Description                                                                                        |
| --- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| 1.  | [`@tek/jest-config`](packages/jest-config)     | Base jest configuration from which other `jest.config.ts` configurations extend.                   |
| 2.  | [`@tek/eslint-config`](packages/eslint-config) | Base eslint configuration from which all other `eslintrc.js` configurations extend.                |
| 3.  | [`@tek/ts-config`](packages/ts-config)         | Base typescript configuration from which all other `tsconfig.json` configurations inherit from.    |
| 4.  | [`@tek/ui`](packages/ui)                       | Collection of shared UI components                                                                 |
| 5.  | [`@tek/icons`](packages/icons)                 | Collection of shared icons                                                                         |
| 6.  | [`@tek/utils`](packages/utils)                 | Collection of shared utilities.                                                                    |
| 6.  | [`@tek/storybook`](packages/storybook)         | Consolidated storybook. Renders all `\*.stories` files and publishes to chromatic for visual diffs |

## Domains

See breakdown below for personal domains.

| Domain                                                 | Directory                            | Description                | Hosted   |
| ------------------------------------------------------ | ------------------------------------ | -------------------------- | -------- |
| [tomk.info](https://www.tomk.info)                     | [apps/info](apps/info)               | My contact information     | Vercel   |
| [tomk.contact](https://www.tomk.contact)               | [apps/info](apps/info)               | My contact information     | Vercel   |
| [tomk.link](https://www.tomk.link)                     | [apps/share](apps/share)             | Public File Share          | AWS (S3) |
| [tknickman.com](https://www.tknickman.com)             | [apps/info](apps/info)               | My contact information     | Vercel   |
| [thomasknickman.com](https://www.thomasknickman.com)   | [apps/portfolio](apps/portfolio)     | Portfolio                  | Vercel   |
| [thomasknickman.info](https://www.thomasknickman.info) | [apps/portfolio](apps/portfolio)     | Portfolio                  | Vercel   |
| [thomasknickman.me](https://www.thomasknickman.me)     | [apps/portfolio](apps/portfolio)     | Portfolio                  | Vercel   |
| [teknologist.co](https://www.teknologist.co)           | [apps/teknologist](apps/teknologist) | Consulting landing page    | Vercel   |
| [teknologist.dev](https://www.teknologist.dev)         | [apps/teknologist](apps/teknologist) | Consulting landing page    | Vercel   |
| [teknologist.io](https://www.teknologist.io)           | [apps/teknologist](apps/teknologist) | Consulting landing page    | Vercel   |
| [simplevocab.com](https://www.simplevocab.com)         | [apps/parked](apps/parked)           | Parked domain              | Vercel   |
| [uber2chipotle.com](https://www.uber2chipotle.com)     | [apps/parked](apps/parked)           | Parked domain              | Vercel   |
| [atekdesign.com](https://www.atekdesign.com)           | [apps/parked](apps/parked)           | Parked domain              | Vercel   |
| [tomandsteph.wedding](https://www.tomandsteph.weddin)  | [apps/wedding](apps/wedding)         | Personal Wedding RSVP page | Vercel   |

---

[![typescript](./assets/typescript.svg)](https://www.typescript.org)
[![react](./assets/react.svg)](https://www.react.org)
[![next.js](./assets/dark/next.svg)](https://www.nextjs.org#gh-dark-mode-only)
[![next.js](./assets/light/next.svg)](https://www.nextjs.org#gh-light-mode-only)
[![tailwindcss](./assets/tailwindcss.svg)](https://tailwindcss.com)
[![turborepo](./assets/dark/turborepo.svg)](https://www.turborepo.org#gh-dark-mode-only)
[![turborepo](./assets/light/turborepo.svg)](https://www.turborepo.org#gh-light-mode-only)
[![vercel](./assets/dark/vercel.svg)](https://www.vercel.com#gh-dark-mode-only)
[![vercel](./assets/light/vercel.svg)](https://www.vercel.com#gh-light-mode-only)
[![aws](./assets/aws.svg)](https://www.aws.com)
