# ✨ Interactive Skills Categories Feature

## What's New

Your technical skills are now organized into **4 clickable categories** matching your resume format!

---

## 📋 Categories

### 1. 💬 **Languages** (12 skills)

Python, JavaScript, TypeScript, C, Assembly, Java, HTML5, CSS3, Markdown, VBA, SQL, Bash

### 2. 🚀 **Frameworks** (8 skills)

React, Next.js, Node.js, Express.js, FastAPI, Tailwind CSS, Flask, Vite

### 3. ☁️ **Data & DevOps** (9 skills)

MongoDB, PostgreSQL, Redis, SQLite, Azure, Vercel, Render, Nginx, AWS

### 4. 🛠️ **Tools & Libraries** (10 skills)

Git, GitHub, Linux, QEMU, PyTorch, TensorFlow, JWT, PNPM, VS Code, Docker

---

## 🎨 How It Works

### Visual Layout

```
💻 Technical Skills
─────────────────────────────────────────

[💬 Languages] [🚀 Frameworks] [☁️ Data & DevOps] [🛠️ Tools & Libraries]
     ↑
   SELECTED
   
┌──────────┬──────────┬──────────┬──────────┬──────────┐
│  Python  │JavaScript│TypeScript│    C     │ Assembly │
├──────────┼──────────┼──────────┼──────────┼──────────┤
│   Java   │  HTML5   │   CSS3   │ Markdown │   VBA    │
├──────────┼──────────┼──────────┼──────────┼──────────┤
│   SQL    │   Bash   │          │          │          │
└──────────┴──────────┴──────────┴──────────┴──────────┘
```

### User Interaction

1. **Click a category button** → Skills animate in
2. **Button highlights** with red glow when active
3. **Skills fade in** with staggered animation (30ms delay per skill)
4. **Smooth transitions** between categories (500ms)

---

## 🎭 Animations & Effects

### Category Buttons

#### **Inactive State**

- Gray background (`zinc-800/50`)
- Gray text (`gray-400`)
- Gray border (`zinc-700/50`)

#### **Hover State**

- Lifts up slightly (`-translate-y-1`)
- Scales up 5% (`scale-105`)
- Border turns red (`red-500/50`)
- Text turns red (`red-400`)
- Background adds red tint (`red-500/10`)

#### **Active/Selected State**

- **Red background glow** (`red-500/20`)
- **Red border** (`border-red-500`)
- **Red text** (`text-red-300`)
- **Red shadow** with glow effect
- **Animated shimmer background** (2s loop)
- **Bottom indicator bar** (gradient line)
- **Stays scaled up** (`scale-105`)

### Skills Cards

#### **Entrance Animation**

- Each skill card fades in using `reveal-scale` class
- Staggered delay: `30ms × skill index`
- Example: 1st skill = 0ms, 5th skill = 150ms
- Creates cascading wave effect

#### **Hover Effects** (Same as before)

- Scale up 5%
- Lift up (`-translate-y-1`)
- Border → red
- Background → red tint
- Text → red
- Red glow shadow

#### **Category Switching**

- Old category: fades out + moves down (`translate-y-4`)
- New category: fades in + moves up from below
- Transition: 500ms smooth ease-in-out

---

## 🎨 CSS Animations Used

### 1. **Shimmer Effect** (NEW!)

```css
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

- Applied to active category button background
- Creates moving light effect
- 2 second loop, infinite

### 2. **Reveal Scale** (Existing)

```css
.reveal-scale {
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-scale.visible {
  opacity: 1;
  transform: scale(1);
}
```

- Used for skill card entrance
- Smooth easing curve
- Starts at 95% scale, grows to 100%

---

## 💡 Design Choices

### Why 4 Buttons in a Row?

- **Compact**: Minimal blank space
- **Readable**: Clear category names with icons
- **Responsive**: Wraps on mobile if needed
- **Organized**: Matches your resume structure exactly

### Why Staggered Animation?

- **Visual appeal**: Creates flowing motion
- **Professional**: Feels polished, not abrupt
- **Attention**: Draws eye across the grid
- **30ms delay**: Fast enough to feel snappy, slow enough to notice

### Why Shimmer on Active Button?

- **Feedback**: Clear visual indicator of selection
- **Dynamic**: Adds movement without being distracting
- **Premium feel**: Subtle luxury detail

---

## 📱 Responsive Behavior

### Desktop (lg: 1024px+)

- Category buttons: 4 in a row
- Skills grid: 5 columns

### Tablet (md: 768px+)

- Category buttons: 4 in a row (may wrap on small tablets)
- Skills grid: 4 columns

### Mobile (sm: 640px+)

- Category buttons: Wraps to 2 per row
- Skills grid: 3 columns

### Small Mobile (< 640px)

- Category buttons: Wraps naturally
- Skills grid: 2 columns

---

## 🎯 Default Behavior

- **First category selected on load**: "Languages" (index 0)
- **12 skills displayed** immediately
- **User can click** any category to switch

---

## 🔧 Code Structure

### State Management

```typescript
const [selectedCategory, setSelectedCategory] = useState<number>(0);
```

- Tracks which category button is active (0-3)
- 0 = Languages, 1 = Frameworks, 2 = Data & DevOps, 3 = Tools

### Data Structure

```typescript
interface SkillCategory {
  name: string;      // "Languages"
  icon: string;      // "💬"
  skills: string[];  // ["Python", "JavaScript", ...]
}
```

### Rendering Logic

1. Map through `skillCategories` to create buttons
2. Check if `selectedCategory === index` for active state
3. Map through all categories for skills grid (only one visible at a time)
4. Apply conditional classes based on selection

---

## ✨ What Makes This Great

✅ **Organized** - Matches your resume format perfectly  
✅ **Interactive** - Users can explore different skill areas  
✅ **Compact** - No wasted space, buttons are close together  
✅ **Animated** - Smooth, professional transitions  
✅ **Consistent** - Uses your site's red theme throughout  
✅ **Responsive** - Works on all screen sizes  
✅ **Accessible** - Keyboard navigable, clear focus states  
✅ **Performant** - CSS animations, hardware accelerated  

---

## 🚀 Future Enhancements (Optional)

Want to add more? You could:

1. **Keyboard navigation** - Arrow keys to switch categories
2. **Count badges** - Show skill count on each button
3. **Search/filter** - Filter skills across all categories
4. **Skill levels** - Add proficiency indicators
5. **Tooltips** - Show more info on hover
6. **Animation toggle** - Reduce motion for accessibility

---

## 📝 How to Update

### Adding a New Skill

```typescript
{
  name: "Languages",
  icon: "💬",
  skills: [
    "Python",
    // ... existing skills
    "Your New Language", // Add here
  ],
}
```

### Adding a New Category

```typescript
const skillCategories: SkillCategory[] = [
  // ... existing categories
  {
    name: "New Category",
    icon: "🎯",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
  },
];
```

### Changing Default Category

```typescript
const [selectedCategory, setSelectedCategory] = useState<number>(1);
// 0 = Languages, 1 = Frameworks, 2 = Data & DevOps, 3 = Tools
```

---

**Your skills section is now interactive, organized, and matches your resume perfectly!** 🎉
