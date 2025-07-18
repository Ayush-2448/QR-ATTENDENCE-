# QR-ATTENDENCE-
A web-based attendance management system that uses QR codes and geofencing to securely track classroom attendance, with real-time syncing to Google Sheets and an interactive faculty dashboard.
# 🎓 Smart Attendance System using QR Codes & Geofencing

A modern web-based attendance management system designed to eliminate manual roll calls and proxy attendance. This system leverages **QR codes**, **geofencing**, and **real-time Google Sheets integration** to ensure **secure**, **location-bound**, and **time-sensitive** attendance tracking. Faculty are equipped with an intuitive **dashboard** to monitor trends and generate detailed reports.

---

## 📌 Table of Contents

- [📖 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [⚙️ System Architecture](#️-system-architecture)
- [🚀 Getting Started](#-getting-started)
- [🖥️ Faculty Dashboard](#️-faculty-dashboard)
- [📊 Attendance Tracking](#-attendance-tracking)
- [📂 Project Structure](#-project-structure)
- [🛡️ Security Measures](#️-security-measures)
- [📈 Future Enhancements](#-future-enhancements)
- [📸 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📬 Contact](#-contact)

---

## 📖 Overview

This system automates classroom attendance with a secure, easy-to-use interface for both **students** and **faculty**:

- **Students** scan a unique QR code displayed during class.
- Their **location is verified** using the browser's Geolocation API.
- Attendance is marked only if they are within the allowed **geofence radius** and within the valid **time window**.
- Data is synced in real time to a **Google Sheet**, providing a centralized record.

---

## ✨ Features

- 🔐 **Geofenced Attendance**: Only mark attendance within a pre-defined physical area (classroom).
- ⏳ **Time-Bound QR Codes**: Each QR is valid for a short duration to prevent misuse.
- 📷 **Dynamic QR Generation**: Unique QR per lecture/session.
- 📈 **Faculty Dashboard**: View attendance analytics, filter by class/date/student.
- 🔄 **Google Sheets Sync**: Automatically logs all data for transparency and backup.
- 📱 **Mobile-Friendly**: Designed for both desktop and mobile browsers.
- 🧾 **Report Generation**: Export attendance data to CSV/PDF.

---

## 🛠️ Tech Stack

| Layer         | Technology                        |
|---------------|------------------------------------|
| **Frontend**  | HTML, CSS, JavaScript (React)      |
| **Backend**   | Node.js, Express.js                |
| **QR Library**| `qrcode` (NPM)                     |
| **Location**  | HTML5 Geolocation API              |
| **Database**  | Firebase or MongoDB (optional)     |
| **Google API**| Google Sheets API, OAuth2          |
| **Authentication** | Firebase Auth / JWT (optional) |

---

## ⚙️ System Architecture

[ Faculty Dashboard ]
|
[ Backend Server (Node.js) ]
|
[ QR Generator ] ←—— Timestamped + Geofenced QR
|
[ Student Device ]
| ← Scan QR
[ Location Check + Time Validation ]
|
[ Google Sheets Sync API ]
|
[ Google Sheet (Auto-updated) ]

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/qr-geofenced-attendance.git
cd qr-geofenced-attendance
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup Google Sheets API
Create a Google Cloud Project

Enable Google Sheets API and Google Drive API

Generate OAuth2 credentials

Share your Google Sheet with the service account email

Save credentials as credentials.json

4. Configure .env File
bash
Copy
Edit
PORT=5000
SHEET_ID=your_google_sheet_id
GEOFENCE_LAT=xx.xxxxx
GEOFENCE_LNG=yy.yyyyy
GEOFENCE_RADIUS=50 # in meters
QR_EXPIRY_MINUTES=5
5. Start the Server
bash
Copy
Edit
npm start
🖥️ Faculty Dashboard
View QR Codes per lecture

Monitor live attendance

Filter data by student, date, course

Generate downloadable reports

📊 Attendance Tracking
Students scan the QR

Location is captured and compared to geofence

QR expiry and timestamp are validated

Data (Name, Time, Location, Device Info) is logged to Google Sheets

📂 Project Structure
bash
Copy
Edit
qr-geofenced-attendance/
│
├── client/                  # Frontend React app
│   └── ...
├── server/                  # Node.js backend
│   ├── routes/
│   ├── controllers/
│   ├── utils/
│   └── app.js
├── credentials.json         # Google API credentials
├── .env
└── README.md
🛡️ Security Measures
QR codes are single-use and time-bound

Geofencing to block remote scans

Rate limiting on API endpoints

Google Sheets integration uses OAuth2 credentials

Optionally use student login with Firebase Authentication

📈 Future Enhancements
📲 Native mobile app (React Native / Flutter)

🔔 Real-time notifications for students/faculty

🎓 Student portal to view attendance history

🧠 AI-based proxy detection and alerts

📍 Admin interface for managing multiple classes

