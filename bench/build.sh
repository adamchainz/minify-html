#!/usr/bin/env bash

set -e

pushd "$(dirname "$0")"

pushd ../nodejs
npm run build
npm run build-binary
popd

pushd minify-html-bench
cargo build --release
popd

popd
