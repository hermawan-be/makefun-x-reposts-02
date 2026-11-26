# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/hermawan-be/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/hermawan-be/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Entry for the make.fun bounty **"Get the most reposts and likes on make.fun's
newest X posts"** ($500).

Built for the make.fun bounty: https://make.fun/bounty/makefun-x-reposts-02

The entry is a list of my quote posts and replies to @makefunai posts on X.
Each of my posts quotes or replies to a different @makefunai post from the
bounty pool, and every one of them mentions make.fun and carries my play
code. The post with the most reposts and likes wins the bounty.

## Contents

- `POSTS.json` — the list of my X posts for this entry, as
  `{"posts": ["https://x.com/<handle>/status/<id>", ...]}`.
- `main.ts` — copies `POSTS.json` into the output directory.
- `.makefun/owner.json` — the wallet that owns this entry.

## How to run

Requires Node.js 22 or later. Standard library only, no dependencies.

```sh
node main.ts
```

By default the program writes `POSTS.json` to `/output`. To use a different
output directory, set `MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
