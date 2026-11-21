# Project media

Put screenshots and videos here, one folder per project (the folder name matches the project's `slug` in `src/data/projects.js`):

```
public/media/
  showreel.mp4            ← optional hero background (set site.showreel)
  me.jpg                  ← optional About photo (set site.photo)
  dormvision/
    poster.jpg            ← card + project page still   (1600×1000 works well)
    clip.mp4              ← 5–10 s muted loop, plays on hover (keep under ~3 MB)
    walkthrough.mp4       ← optional full demo on the project page
    1.jpg, 2.jpg, 3.jpg   ← gallery screenshots (lightbox)
```

Then point to them in `src/data/projects.js`:

```js
media: {
  poster: '/media/dormvision/poster.png',
  clip: '/media/dormvision/clip.mp4',
  video: '/media/dormvision/walkthrough.mp4',   // or { youtube: 'VIDEO_ID' }
  gallery: ['/media/dormvision/1.png', '/media/dormvision/2.jpg', '/media/dormvision/3.jpg'],
},
```

## Making small clips

Record with OBS (web apps) or ScreenToGif / OBS (desktop apps), then shrink with ffmpeg:

```bash
# 8-second, 1280px wide, no audio, web-friendly
ffmpeg -i recording.mp4 -t 8 -vf "scale=1280:-2,fps=30" -an -c:v libx264 -crf 28 -preset veryfast -movflags +faststart clip.mp4

# grab a poster frame at 2 seconds
ffmpeg -ss 2 -i clip.mp4 -frames:v 1 -q:v 3 poster.jpg
```

Use demo data in recordings — never real tenant, guest or customer details.
For long walkthroughs, upload to YouTube and use `video: { youtube: 'ID' }` to keep the repo small.
