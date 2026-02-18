# Mental Health & Behaviour Tracker

A privacy-first, accessible web application for tracking mood, stress, and well-being. Built for students and working professionals to support mood awareness, stress tracking, relapse prevention, and behavior insights.

## ⚠️ Important Disclaimer

**This app is not a medical service or device.** It is designed for personal tracking and awareness purposes only. If you are in crisis, please seek professional help.

## 🚀 Features

- **Daily Check-Ins**: Track mood, stress, sleep, energy, and journal entries
- **Journal**: Search, filter, and review your entries over time
- **Trends & Insights**: Visualize patterns with charts and analytics
- **Well-Being Toolkit**: Access grounding techniques, breathing exercises, and resources
- **Relapse Awareness**: Personal warning signals and coping strategies (non-clinical)
- **Privacy-First**: All data stored locally on your device
- **Dark Mode**: Comfortable viewing in any lighting
- **Accessible**: WCAG-compliant with keyboard navigation
- **Mobile-First**: Responsive design for all devices

## 🛠️ Tech Stack

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **Zustand** for state management
- **date-fns** for date handling
- **lucide-react** for icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
├── app/
│   ├── dashboard/      # Main dashboard page
│   ├── checkin/        # Daily check-in page
│   ├── journal/        # Journal entries page
│   ├── insights/       # Trends and insights
│   ├── toolkit/        # Well-being toolkit
│   ├── relapse/        # Relapse awareness (non-clinical)
│   ├── settings/       # Settings and preferences
│   ├── onboarding/     # Initial setup
│   ├── layout.tsx      # Root layout
│   └── globals.css     # Global styles
├── components/         # Reusable components
├── lib/
│   └── store.ts        # Zustand state management
└── public/             # Static assets
```

## 🎨 Design Principles

- **Calm & Minimal**: Soft blues and greens, rounded corners, subtle shadows
- **Accessible**: WCAG AA compliant, keyboard navigation, screen reader support
- **Non-Judgmental**: Supportive language, no clinical labels
- **Privacy-First**: Local storage, user-controlled data

## 📱 Pages

1. **Onboarding**: Collect user preferences with consent
2. **Dashboard**: Overview of check-ins, streaks, and quick actions
3. **Check-In**: Daily mood, stress, sleep, energy, and journal entry
4. **Journal**: List and detail view with search and filters
5. **Insights**: Charts showing trends, patterns, and gentle suggestions
6. **Toolkit**: Grounding techniques, breathing exercises, journaling prompts
7. **Relapse Awareness**: Personal warning signals and coping strategies
8. **Settings**: Profile, notifications, theme, privacy, data management

## 🔒 Privacy & Security

- All data stored locally in browser storage
- No data sent to external servers
- Optional passcode protection (frontend only)
- Data export functionality
- Clear data deletion option

## ♿ Accessibility

- Keyboard navigation throughout
- ARIA labels for icons and interactive elements
- Color contrast compliant
- Screen reader friendly
- Focus indicators visible

## 🧪 Sample Data Mode

Toggle sample data mode in Settings or Insights page to populate charts with mock data for demonstration purposes.

## 📝 Development

```bash
# Development
npm run dev

# Build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## ⚠️ Scope Limitations

This app does NOT:
- Provide medical diagnoses
- Promise specific outcomes
- Model suicide risk
- Show alarming messaging
- Replace professional mental health care

## 📄 License

This project is for personal/educational use.

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome.

---

**Remember**: This app is a tool for self-awareness and tracking, not a replacement for professional mental health care. If you're experiencing significant distress, please reach out to qualified professionals.

