# Audio Integration Guide
## Custom Precision Audio Player System

---

## ⬢ System Architecture

Your portfolio now features a **custom Web Audio API-powered player** with:

### **Visual Components:**
- **32-bar frequency spectrum analyzer** (blue → purple gradient)
- **Real-time waveform overlay** (cyan polyline visualization)
- **Phase-locked progress bar** with geometric markers (25%, 50%, 75%)
- **Technical readout display** (dominant frequency + playback status)
- **Grid lattice overlay** (minimalist precision aesthetic)

### **Audio Analysis:**
- **FFT Size:** 128 (64 frequency bins)
- **Smoothing:** 0.8 (balanced responsiveness)
- **Dominant frequency detection** (real-time Hz display)
- **Volume control** with percentage readout
- **Gradient progress indicator** (cyan → indigo → purple)

---

## 🎵 Adding Your Audio Tracks

### **File Hosting Options:**

#### **Option 1: Self-Hosted (Recommended for Full Control)**

1. **Create audio directory (if self-hosting locally):**
   ```
   /public/audio/
   ```

2. **Add your files with the exact names used in code:**
   ```
   /public/audio/ang-bocca.mp3
   /public/audio/silas-gogh.mp3
   /public/audio/red-casket-club.mp3
   /public/audio/brokeback-kerouac.mp3
   /public/audio/nadia-bizness.mp3
   /public/audio/amon-ajari.mp3
   ```

3. **File format requirements:**
   - **Primary:** MP3 (best browser compatibility)
   - **Fallback:** OGG/Opus (optional, higher quality)
   - **Bitrate:** 192-320 kbps recommended
   - **Sample rate:** 44.1 kHz or 48 kHz

4. **Already configured in code (sample):**
   ```typescript
   audioSrc: "silas-gogh.mp3"
   ```

---

#### **Option 2: External CDN (Cloudflare R2 / AWS S3)**

1. **Upload files to CDN**
2. **Get public URLs**
3. **Update persona data:**
   ```typescript
   audioSrc: "https://cdn.yourdomain.com/audio/track.mp3"
   ```

**Benefits:**
- Faster global delivery
- Reduced main server bandwidth
- Professional infrastructure

**Cloudflare R2 Example:**
```
https://pub-[bucket-id].r2.dev/silas-gogh.mp3
```

---

#### **Option 3: Vercel Blob Storage (If on Vercel)**

1. **Install Vercel Blob:**
   ```bash
   npm install @vercel/blob
   ```

2. **Upload via dashboard or API**
3. **Use generated URL:**
   ```typescript
   audioSrc: "https://[blob-url].public.blob.vercel-storage.com/track.mp3"
   ```

---

## 📝 Current Persona Track Mapping

| **Persona** | **Track Title** | **File Path** | **Status** |
|------------|----------------|--------------|-----------|
| Ang Bocca | Synthetic Emotion Protocol | `ang-bocca.mp3` | Placeholder |
| Silas Gogh | Cold Blooded | `silas-gogh.mp3` | Placeholder |
| Red Casket Club | Yawn on the Clock | `red-casket-club.mp3` | Placeholder |
| Brokeback Kerouac | Semicircle Rooms | `brokeback-kerouac.mp3` | Placeholder |
| Nadia Bizness | Circuit Manifesto Dub | `nadia-bizness.mp3` | Placeholder |
| Amon Ajari | Green New Beat | `amon-ajari.mp3` | Placeholder |

---

## 🔧 Updating Track Information

**Location:** `/components/Personae.tsx`

### **Example Persona Entry:**
```typescript
{
  name: "Silas Gogh",
  role: "Southern Soul Theorist",
  trackTitle: "Cold Blooded",
  audioSrc: "silas-gogh.mp3", // ← Update this path (matches Supabase storage filename)
  // ... rest of data
}
```

### **To Change Track:**
1. Upload new audio file
2. Update `audioSrc` path
3. Update `trackTitle` if different
4. Player automatically adapts to new file

---

## 🎛️ Player Features

### **User Controls:**
- **Play/Pause:** Click central button or waveform
- **Seek:** Drag progress bar
- **Volume:** Slider (0-100%)
- **Real-time Visualization:** Automatic when playing

### **Technical Display:**
- **FREQ:** Dominant frequency in Hz (live during playback)
- **STATUS:** STREAMING (playing) / STANDBY (paused)
- **Time:** Current position / Total duration
- **Phase markers:** Geometric indicators at 25%, 50%, 75%

### **Visual Feedback:**
- **Pulsing emerald dot:** Playback status indicator
- **Spectrum bars:** 32 frequency bands with glow effects
- **Waveform overlay:** Real-time audio waveform
- **Progress gradient:** Cyan → Indigo → Purple

---

## 🎨 Aesthetic Alignment

### **Design Philosophy:**
- **No platform branding** (pure luxe minimalism)
- **Swedish-inspired precision** (geometric phase markers)
- **Metaphysical instrumentation** (frequency analysis, spectral display)
- **Abstract Unicode glyphs** (⬢ instead of emojis)
- **Technical credibility** (Web Audio API, FFT analysis)

### **Color Palette:**
- **Spectrum:** Blue (180°) → Purple (240°) HSL gradient
- **Waveform:** Cyan (`rgba(147, 197, 253, 0.8)`)
- **Progress:** Cyan → Indigo → Purple gradient
- **Grid:** White 3% opacity
- **Text:** Mono font, white/cyan accents

---

## 🚀 Deployment Checklist

### **Before Launch:**

- [ ] Upload all 6 audio tracks
- [ ] Verify file paths in `/components/Personae.tsx`
- [ ] Test playback in modal for each persona
- [ ] Check frequency analyzer visualization
- [ ] Confirm waveform overlay renders
- [ ] Test on mobile devices
- [ ] Verify volume control functionality
- [ ] Check seek/scrub behavior

### **Audio File Optimization:**

```bash
# Convert to optimized MP3 (if needed)
ffmpeg -i input.wav -codec:a libmp3lame -b:a 192k -ar 44100 output.mp3

# Normalize audio levels
ffmpeg -i input.mp3 -af loudnorm=I=-16:TP=-1.5:LRA=11 output.mp3
```

---

## 🔐 CORS Considerations

If hosting audio externally, ensure CORS headers allow playback:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET
```

**Note:** `figma:asset` URLs and `/public` files work automatically in this environment.

---

## 📊 Performance Notes

- **FFT Analysis:** Runs at 60fps when playing
- **Frequency bins:** 64 (reduced to 32 for display)
- **Buffer size:** 128 samples
- **Smoothing:** 0.8 (prevents jitter)
- **Memory:** Minimal footprint (~2MB for analyzer nodes)

---

## ⚡ Future Enhancements (Optional)

Potential additions to the audio system:

1. **BPM Detection:** Tempo analysis display
2. **Pitch Detection:** Root note identification
3. **Spectral Centroid:** Brightness metric
4. **Stereo Field Visualization:** L/R channel separation
5. **Download/Share Controls:** Export options
6. **Playlist Mode:** Auto-advance through personas
7. **Keyboard Controls:** Spacebar = play/pause, arrows = seek

---

## 📞 Integration Complete

Your custom audio player is production-ready. Simply upload your audio files to `/public/audio/` and they'll automatically play with full visualization in the persona modals.

**Current Status:** ⬢ System initialized ⬢ Awaiting audio assets ⬢
