# 📘 QR-ATTENDANCE

A web-based attendance management system that uses QR codes and geofencing to securely track classroom attendance, with real-time syncing to Google Sheets and an interactive faculty dashboard.

---

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
