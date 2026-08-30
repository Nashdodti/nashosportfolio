#!/usr/bin/env bash
# Generate the OG social preview image by capturing the live homepage
# (macOS desktop view) as a screenshot, saved to public/og-image.png (1200x630).
#
# Prereqs: a production build of the app (`npm run build`).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT=4173
TMP="$ROOT/scripts/.tmp"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
URL="http://localhost:$PORT/"

mkdir -p "$TMP"

# Start the preview server if it isn't already running
if ! curl -s -o /dev/null "$URL"; then
  (npx vite preview --port "$PORT" --strictPort --host 127.0.0.1 >"$TMP/preview.log" 2>&1) &
  SERVER_PID=$!
  trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT
  for _ in $(seq 1 20); do
    curl -s -o /dev/null "$URL" && break
    sleep 0.3
  done
fi

"$CHROME" --headless=new --disable-gpu --hide-scrollbars \
  --window-size=1200,630 \
  --virtual-time-budget=8000 \
  --screenshot="$TMP/homepage-og.png" \
  "$URL" >/dev/null 2>&1

cp "$TMP/homepage-og.png" "$ROOT/public/og-image.png"
echo "Wrote $ROOT/public/og-image.png"
