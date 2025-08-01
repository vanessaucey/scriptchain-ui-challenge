# 🏥 Patient Search & Management Dashboard

This project is an **Angular-based web interface** designed to help doctors and medical staff **search, view, and manage patient information**. It provides an intuitive UI for daily workflows, with features to filter patients, view today’s appointments, and toggle between search results and scheduled visits.

---

## 🚀 Features

**Patient Search Bar**
- **Basic Search:** Filter by first name, last name, date of birth, and appointment range.
- **Advanced Search:** Filter by hospital, department, and physician.
- Instant search updates (typing filters the list automatically).

**Tabbed Patient View**
- **Today’s Patients Tab:** Automatically loads and displays all patients with appointments today.
- **Search Results Tab:** Shows patients based on filters entered in the search bar.

**Patient Card Layout**
- Displays **key patient details**: DOB, sex, residence, ID, MRN, contact info, hospital info, and conditions.
- **Clean, consistent styling** with labels and values aligned for easy scanning.
- Highlights the **next appointment time** clearly at the top right.

**Responsive Design**
- Works across desktop and mobile.
- Uses SCSS grid layouts for consistent spacing and alignment.

---

## 🛠️ Tech Stack

- **Framework:** [Angular 17+](https://angular.dev/)
- **Language:** TypeScript
- **Styling:** SCSS (custom styling, responsive)
- **Components:**
  - `SearchBar` – emits filter criteria
  - `PatientList` – handles tab logic and filtering
  - `PatientCard` – displays patient information

---

## ⚙️ Setup Instructions

1️⃣ **Clone the repository**
```bash
git clone https://github.com/yourusername/patient-dashboard.git
cd patient-dashboard
```

2️⃣ **Install dependencies**
```bash
npm install
```
3️⃣ **Run the development server**
```bash
ng serve
```
Visit http://localhost:4200 in your browser.

## 👩‍💻 Author
**Vanessa Vega**
Software Engineer | Passionate about building clean, user-friendly web apps

## 📄 License
This project is for demonstration purposes only.
