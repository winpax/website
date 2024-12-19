---
featured: true
emoji: ⚡
title: Stupid Fast Scoop Utils
description: Super fast replacements and additions to scoop commands written in Rust
pubDate: Oct 28 2022
repo: winpax/sfsu
heroImage: https://repository-images.githubusercontent.com/558838965/5a08ad32-112c-42a7-b0b8-212270cd30ce
shields:
  - alt: Github Workflow Status
    src: https://img.shields.io/github/actions/workflow/status/winpax/sfsu/build.yml
  - alt: dependency status
    href: https://deps.rs/repo/github/winpax/sfsu
    src: https://deps.rs/repo/github/winpax/sfsu/status.svg
  - alt: GitHub all releases
    src: https://img.shields.io/github/downloads/winpax/sfsu/total
  - alt: GitHub
    src: https://img.shields.io/github/license/winpax/sfsu
  - alt: Scoop version (extras bucket)
    src: https://img.shields.io/scoop/v/sfsu?bucket=extras
download:
  src: github
  infoExtractor: /sfsu-(?<arch>.+).exe/
  os:
    - windows
  arch:
    - x64
    - x86
    - arm64
---

Super **⚡ fast ⚡** replacements and additions to [Scoop](https://scoop.sh) commands written in the [Rust programming language](https://www.rust-lang.org/).

It can override the existing [Scoop](https://scoop.sh) install for all commands that it has, using the [hooks](https://github.com/winpax/sfsu#hook).

More in depth benchmarking information can be found in the [benchmarking section of the README](https://github.com/winpax/sfsu#benchmarks-1), but to summarize, it is multiple [orders of magnitude](https://g.co/kgs/KqoK2G) faster than default [Scoop](https://scoop.sh).
