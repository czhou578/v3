#!/usr/bin/env bash
# Re-encodes the source videos in media-src/videos into small, muted, 720p
# H.264 clips in public/videos, and extracts a poster frame for each.
# Run once after adding or changing a source video, then commit the outputs.
# Requires ffmpeg with libx264 on PATH.
set -euo pipefail

SRC_DIR="$(dirname "$0")/../media-src/videos"
OUT_DIR="$(dirname "$0")/../public/videos"
# Posters go next to the other images so scripts/optimize-images.mjs turns
# them into responsive WebP variants like everything else.
POSTER_DIR="$(dirname "$0")/../public/images"
mkdir -p "$OUT_DIR" "$POSTER_DIR"

for src in "$SRC_DIR"/*.mp4; do
  name="$(basename "${src%.mp4}")"
  out="$OUT_DIR/$name.mp4"
  poster="$POSTER_DIR/$name-poster.jpg"

  echo "encoding $name"
  ffmpeg -y -hide_banner -loglevel error -i "$src" \
    -an \
    -vf "scale=-2:720,fps=30" \
    -c:v libx264 -profile:v high -level 4.0 -preset slow -crf 28 \
    -pix_fmt yuv420p -movflags +faststart \
    "$out"

  ffmpeg -y -hide_banner -loglevel error -ss 1 -i "$src" \
    -vf "scale=-2:720" -frames:v 1 -q:v 4 \
    "$poster"

  printf '  %s -> %s (%s), poster %s\n' \
    "$(du -h "$src" | cut -f1)" "$out" "$(du -h "$out" | cut -f1)" "$(du -h "$poster" | cut -f1)"
done
