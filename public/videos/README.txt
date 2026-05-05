Place your hero video file here as `hummingbird.mp4`.

Recommended encoding for web:
  - H.264, MP4 container
  - 1920x1080 or 1280x720
  - ~3-6 Mbps bitrate
  - Muted (the page autoplays it muted)
  - Looped seamlessly

Optional: add a poster image at /public/hero-poster.jpg
This is shown while the video loads.

ffmpeg example:
  ffmpeg -i source.mov \
    -vf "scale=1920:1080" \
    -c:v libx264 -crf 23 -preset slow -pix_fmt yuv420p \
    -an -movflags +faststart \
    hummingbird.mp4
