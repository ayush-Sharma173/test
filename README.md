# 🌸 Kavya Mystery Website - A Romantic Journey

A beautiful, interactive mystery website that guides your loved one through riddles and puzzles to discover a hidden gift. Perfect for romantic surprises, anniversaries, or just showing someone how much they mean to you.

## ✨ Features

- **Progressive Journey**: 5 levels of interactive content
- **Beautiful UI**: Romantic gradients, floating hearts, and magical animations
- **Typewriter Effects**: Dramatic text reveals for emotional impact
- **Photo Puzzles**: Interactive image reveals
- **Music Integration**: Background romantic music support
- **Mobile Responsive**: Works perfectly on all devices
- **Fireworks & Celebrations**: Magical ending with particle effects

## 🎯 Journey Flow

1. **Landing Page**: Romantic introduction with floating hearts
2. **Level 1**: Multiple choice memory questions about your relationship
3. **Level 2**: Riddle about perfumes/mists with realization moment
4. **Level 3**: Photo puzzle revealing the gift location (almirah)
5. **Level 4**: Typewriter message with romantic music
6. **Final Reveal**: Detailed instructions on where to find the gift

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download this project**
   ```bash
   cd kavya
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

For development with auto-restart:
```bash
npm run dev
```

## 🎨 Customization Guide

### 1. Replace Photos

Replace the placeholder image with your actual photos:

- **Almirah Photo**: Replace `public/images/almirah-placeholder.jpg` with a photo of her almirah/vanity area
- **Add More Photos**: You can add more photos to the images folder and reference them in the HTML files

### 2. Customize Memory Questions (Level 1)

Edit `public/level1.html` to change the multiple choice questions:

```html
<div class="question">Your custom question here?</div>
<div class="options">
    <div class="option" data-value="answer1">Option 1</div>
    <div class="option" data-value="answer2">Option 2</div>
    <!-- Add more options -->
</div>
```

**Don't forget to update the server validation in `server.js`:**
```javascript
const correctAnswers = ['answer1', 'answer2', 'answer3']; // Update with your correct answers
```

### 3. Customize the Riddle (Level 2)

Edit the riddle in `public/level2.html`:
```html
<div class="riddle-text">
    Your custom riddle here...<br>
    Make it rhyme and fun!<br>
    Point toward the gift location.
</div>
```

### 4. Add Your Music (Level 4)

Replace the audio source in `public/level4.html`:
```html
<audio id="romanticMusic" loop>
    <source src="path/to/your/romantic-song.mp3" type="audio/mpeg">
</audio>
```

Add your music file to the `public` folder and update the path.

### 5. Customize Messages

**Typewriter Messages (Level 4)**: Edit the `messages` array in `public/level4.html`
**Final Messages**: Edit the `finalMessages` array in `public/final.html`
**Gift Location**: Update the riddle and instructions in `public/final.html`

### 6. Personalize Colors & Styling

The main styles are in `public/css/style.css`. Key variables to customize:

- **Primary Colors**: `#667eea`, `#764ba2`, `#ff6b6b`
- **Romantic Pink**: `#ff69b4`, `#ff1493`
- **Background Gradients**: Look for `linear-gradient` in CSS

### 7. Change the Gift Location

Update the final riddle in `public/final.html`:
```html
<div style="font-size: 1.3em; color: #880e4f; line-height: 2; text-align: center;">
    <strong>Go where your [custom location],<br>
    [Custom clue line 1]<br>
    [Custom clue line 2]<br>
    [Custom final line]</strong>
</div>
```

## 🎁 Gift Ideas

Since the mystery leads to her mist/perfume collection area, consider:
- A new beautiful perfume
- A handwritten love letter
- A small piece of jewelry
- A photo of you both in a cute frame
- A small potted plant or flower
- Chocolates or her favorite treats

## 🌟 Technical Details

### File Structure
```
kavya/
├── package.json          # Dependencies and scripts
├── server.js             # Express server with routes
├── public/
│   ├── index.html        # Landing page
│   ├── level1.html       # Memory questions
│   ├── level2.html       # Riddle
│   ├── level3.html       # Photo puzzle
│   ├── level4.html       # Typewriter message
│   ├── final.html        # Gift reveal
│   ├── css/
│   │   └── style.css     # All styling
│   └── images/
│       └── almirah-placeholder.jpg
└── README.md
```

### Server Endpoints
- `GET /` - Landing page
- `GET /level1` - Level 1 page
- `GET /level2` - Level 2 page
- `GET /level3` - Level 3 page
- `GET /level4` - Level 4 page
- `GET /final` - Final reveal page
- `POST /validate-level1` - Validate memory answers
- `POST /validate-level2` - Validate riddle answer

## 💡 Tips for Best Experience

1. **Test Everything**: Go through the entire journey before showing it to her
2. **Mobile Check**: Test on mobile devices - she might use her phone
3. **Pre-place the Gift**: Make sure the actual gift is hidden before she starts
4. **Create Atmosphere**: Dim lights, maybe light some candles
5. **Be Present**: Be there when she goes through it, but let her navigate
6. **Have Backup**: Take screenshots in case something doesn't work

## 🎵 Music Recommendations

For Level 4, consider these romantic songs:
- "Perfect" by Ed Sheeran
- "Thinking Out Loud" by Ed Sheeran
- "All of Me" by John Legend
- "A Thousand Years" by Christina Perri
- Any song that's special to your relationship

## 🐛 Troubleshooting

**Port Already in Use**: 
```bash
# Try a different port
PORT=3001 npm start
```

**Images Not Loading**: 
- Check file paths in HTML files
- Ensure images are in `public/images/` folder
- Check file extensions match (jpg, png, etc.)

**Music Not Playing**: 
- Some browsers block auto-play
- User interaction (clicking the music button) is required
- Use common formats: MP3, WAV

## 💖 Final Notes

This website is designed to create a magical, personal experience. Take time to customize it with your own memories, inside jokes, and special moments. The more personal you make it, the more meaningful it will be.

Remember: It's not about perfect code or flawless design - it's about the love and thought you put into creating something special just for her.

**Good luck, and may your surprise bring the biggest smile to her face! 🌟**

---

*Made with ❤️ for creating magical moments* 