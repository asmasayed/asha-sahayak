<div align="center">
  <h1>
    आशा सहायक 
  </h1>
  <p>
    ASHA Voice Assistant.
  </p>
</div>

An empathetic voice-first web app empowering India’s ASHA (Accredited Social Health Activist) workers. It simplifies patient data entry, manages visit logs, and provides health scheme info — all via a natural Hindi voice interface.
Built for riidl HACK Somaiya Incuverse 1.0.

🎯 Problem

ASHA workers are key to rural healthcare but face heavy paperwork, complex follow-ups, and limited digital tools — often in low-connectivity areas.
Hackathon challenge: Build a vernacular, empathetic voice assistant to simplify data entry, scheduling, and access to government health schemes.

💡 Solution

आशा सहायक is a smart Hindi voice assistant running on any browser (desktop or mobile).
Workers can simply speak in Hindi, and the app automatically transcribes, parses, and saves structured data securely to the cloud.

✨ Key Features

- 🔐 Secure Login: Firebase Authentication ensures user privacy.
- 🎙️ Voice-First Input: Web Speech API enables real-time Hindi (hi-IN) transcription.
- 🧠 Intelligent Parser: Converts natural Hindi phrases into structured JSON (basic info, vitals, symptoms, maternal health).
- ☁️ Cloud Firestore: Real-time sync with offline support for rural areas.
- 📋 Visit Management: View past visits with detailed, version-safe modals.
- 📚 Health Schemes: Dedicated page to explore government healthcare programs.

🎬 Demo Preview
Here's a quick look at the app in action:

![gif2](https://github.com/user-attachments/assets/d1f5417f-1e52-4cbb-ae68-f0d089fac518)

![gif3](https://github.com/user-attachments/assets/03281f93-7fee-40f4-9720-d9eae7d9b2b2)

![gif4](https://github.com/user-attachments/assets/d7b47690-ef2d-4da2-aab8-7545be0ecd83)


💻 Tech Stack

- Frontend: React (Vite)
- Backend: Firebase (Auth + Firestore)
- Voice API: Web Speech API
- Styling: Plain CSS, mobile-first

⚙️ Run Locally
```sh
git clone https://github.com/your-username/asha-voice-app.git
cd asha-voice-app
npm install
npm run dev
```

Set up Firebase (Auth + Firestore) and update firebase.js with your config.
App runs at http://localhost:5173

🚀 Future Enhancements

- Multilingual Support: Add regional languages like Marathi, Tamil, and Bengali for wider accessibility.
- AI-Powered Insights: Suggest next steps or reminders based on patient history and symptoms.
- Smart Analytics Dashboard: Visualize health trends and follow-ups for better planning.

👥 Team

Built with ❤️ by CodeCrafters for riidl HACK Somaiya Incuverse 1.0
