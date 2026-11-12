# Liturgies — Historic Service Books

> *A clean, dignified digital reader for historic liturgical texts as approved for use in the Evangelical and Reformed Synod.*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff.svg)](https://vitejs.dev/)

---

## Overview

**Liturgies** is an archival digital library and reading application designed for worship, pastoral ministry, and liturgical study. It provides faithful, complete, and typographical digital editions of four historic prayer and worship books:

1. **1662 Book of Common Prayer** — *Church of England* (Americanized according to Sparks & Long, with statutory lectionary)
2. **1917 Common Service Book of the Lutheran Church** — *The United Lutheran Church in America*
3. **1928 Book of Common Prayer** — *Protestant Episcopal Church in the United States of America*
4. **1947 Book of Worship** — *Evangelical and Reformed Church (General Synod)*

The application combines authentic liturgical typesetting—vermilion red rubrics, versicle/response symbols, classical drop caps, and choral pauses—with a modern, distraction-free reading interface.

---

## Included Liturgies & Services

The four service books are presented in chronological order:

### 1. 1662 Book of Common Prayer
- **Daily Offices**: Order for Morning Prayer, Order for Evening Prayer, The Litany, Prayers and Thanksgivings
- **Holy Communion**: The Order for the Administration of the Lord's Supper
- **Church Year Collects, Epistles, and Gospels**: Complete liturgical year propers
- **Pastoral & Occasional Offices**: Holy Baptism (Public, Private, Adult), Catechism, Order of Confirmation, Solemnization of Matrimony, Visitation and Communion of the Sick, Burial of the Dead, Churching of Women, A Commination
- **The Psalter**: Complete 150 Psalms pointed with colon (` : `) for chanting
- **Historical Documents & Ordinal**: Prefaces, Concerning the Service of the Church, Of Ceremonies, The Ordinal (Deacons, Priests, Bishops), and the Thirty-Nine Articles of Religion

### 2. 1917 Common Service Book of the Lutheran Church
- **Main Services**: The Service (Holy Communion), Matins, Vesages (Vespers), The Litany & Suffrages, The Bidding Prayer
- **Introits, Collects, Epistles & Gospels**: Full Church Year according to the historic Western lectionary
- **General Prayers & Thanksgivings**: Collects for peace, church, civil authorities, missions, and times of distress
- **Luther's Small Catechism**: The Ten Commandments, The Creed, The Lord's Prayer, The Sacrament of Holy Baptism, The Office of the Keys, and The Sacrament of the Altar
- **All Occasional Services**:
  - Baptism of Infants & Adults
  - Confirmation
  - Reception of Communicants
  - Restoration to Church Fellowship
  - Confession & Absolution
  - Solemnization of Matrimony
  - Visitation & Communion of the Sick
  - Commendation of the Dying & Burial of the Dead
  - Ordination of Ministers & Installation of Pastors
  - Installation of a Church Council
  - Commissioning of Missionaries & Workers
  - Laying of a Corner-Stone & Dedication of a Church
  - Opening and Closing of Synods

### 3. 1928 Book of Common Prayer
- **Daily Offices**: Morning and Evening Prayer, The Litany, Prayers and Thanksgivings
- **Holy Communion**: The Order for the Administration of the Lord's Supper
- **Church Year Propers**: Collects, Epistles, and Gospels
- **Pastoral Offices**: Holy Baptism, Offices of Instruction, Catechism, Confirmation, Holy Matrimony, Thanksgiving after Child-Birth, Visitation and Communion of the Sick, Ministry to the Dying, Burial of the Dead
- **The Psalter**: Complete 150 Psalms with asterisk (` * `) choral caesuras
- **Ordination & Institution**: The Form and Manner of Making, Ordaining, and Consecrating Bishops, Priests, and Deacons, and the Litany for Ordinations

### 4. 1947 Book of Worship (Evangelical and Reformed)
- **General Worship**: The Order of Worship, Sunday School Orders, Morning and Evening Prayers
- **The Lord's Supper**: The Holy Communion and Communion of the Sick
- **Sacraments & Rites**: Holy Baptism of Infants and Adults, Confirmation, Public Confession, Receiving Communicants, Restoration
- **Pastoral Ministry**: Solemnization of Matrimony, Visitation of the Sick, Burial of the Dead
- **Ecclesiastical & Church Offices**:
  - Ordination of Christian Ministers & Installation of a Minister
  - Ordination & Installation of Elders and Deacons
  - Commissioned Workers & Commissioned Missionaries
  - Church School Officers & Teachers
  - Congregation Organizations
  - Licensure & Inauguration
  - Laying of the Corner-Stone
  - Dedication of a Church & Dedication of Appointments
- **Treasury of Prayers & Church Year Propers**: Historic collects, prayers, and passion history

---

## Liturgical Typographical Principles

The reader faithfully preserves historical printing conventions:

- **Rubric Red (Vermilion)**: Rubrical directions and spoken dialogue labels are set in traditional vermilion red (`#8A211D` on light paper / `#E86558` in dark mode).
- **Response Symbols (`℟.`, `℟`, `Answer.`, `Response.`)**: Spoken response signs and versicles (`℣.`) are highlighted in rubric red bold serif, while the congregational words themselves remain indented in clean standard ink italics.
- **Catechism Answers**: Answers in catechisms are formatted with bold rubric red labels and indented roman text without italics, distinguishing instructional answers from responsive prayers.
- **Choral Caesuras**: Canticles and Psalms feature breathing pauses with liturgical spacing—colon (` : `) for 1662 and asterisk (` * `) for 1928.
- **Drop Caps & Small Caps**: Major liturgical sections and prayers open with 2-line or 3-line drop capitals set in EB Garamond, smoothly transitioning into small caps.
- **Reading Environment**:
  - **Typeface**: EB Garamond font with optical kerning and historical ligatures.
  - **Paper Palette**: Warm parchment (`#FAF8F5`) for daylight and rich obsidian (`#1C1B18`) for night offices.
  - **Line Measure**: Standard reading line width (`~70ch`) to reduce eye fatigue during recitation.
- **Print Fidelity**: A dedicated print stylesheet strips screen controls and outputs high-contrast, book-quality typography with authentic vermilion rubrics.

---

## Tech Stack

- **Framework**: React 19 (Vite)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Typography**: EB Garamond (Google Fonts)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer)
- npm (version 9 or newer)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/liturgies.git
cd liturgies
npm install
```

### Running Locally

Start the Vite development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Compile TypeScript and bundle assets:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting & Type Checking

Validate TypeScript and syntax without emitting files:

```bash
npm run lint
```

---

## Project Structure

```text
├── public/
│   └── assets/             # Historical seals, logos, and reference materials
├── src/
│   ├── components/         # React UI components
│   │   ├── HomePage.tsx            # Chronological landing page with Synod seal
│   │   ├── LiturgicalReader.tsx    # Master liturgical typography reader
│   │   ├── ServiceViewer.tsx       # Structured block service viewer
│   │   ├── AboutModal.tsx          # Bibliographical sources & credits
│   │   ├── PsalmJumpSelector.tsx   # Fast 150-Psalm navigator
│   │   └── PropersJumpSelector.tsx # Church Year propers navigator
│   ├── data/               # Structured metadata, indexes, and lectionary data
│   │   ├── bcp1662/        # 1662 Book of Common Prayer
│   │   ├── csb1917.ts      # 1917 Common Service Book index
│   │   ├── bcp1928/        # 1928 Book of Common Prayer
│   │   └── er1947.ts       # 1947 Book of Worship index
│   ├── services/           # Liturgical texts and service modules
│   │   ├── bcp1662/        # 1662 service texts
│   │   ├── csb1917/        # 1917 CSB services (29 complete services)
│   │   ├── bcp1928/        # 1928 service texts
│   │   └── er1947/         # 1947 E&R services
│   ├── types/              # TypeScript types and interfaces
│   ├── App.tsx             # Root application and routing
│   ├── index.css           # Global Tailwind and liturgical rubric styles
│   └── main.tsx            # React application entry point
├── index.html              # HTML entry point with metadata and fonts
├── metadata.json           # AI Studio applet configuration
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Repository documentation
```

---

## Historical Sources & Bibliography

- **1662 Book of Common Prayer**:
  - Statutory Prayer Book source: [Society of Archbishop Justus](https://justus.anglican.org/resources/bcp/1662/statutory.htm)
  - Americanized usage guidelines: *How to Use the 1662 Book of Common Prayer in the United States* (Daniel Sparks & C. W. Long)
- **1917 Common Service Book of the Lutheran Church**:
  - Authorized by The United Lutheran Church in America (1917/1918), based upon the 1888 Common Service Rule: *"The common consent of the pure Lutheran Liturgies of the sixteenth century."*
  - Digital Source: [Google Books](https://www.google.com/books/edition/Common_Service_Book_of_the_Lutheran_Chur/6jp5plsvXWEC)
- **1928 Book of Common Prayer**:
  - Digital Source: [Society of Archbishop Justus](https://justus.anglican.org/resources/bcp/1928/BCP_1928.htm)
- **1947 Book of Worship (Evangelical and Reformed Church)**:
  - Authorized by the General Synod of the Evangelical and Reformed Church (1947).
  - Digital Source: [Internet Archive (Claremont School of Theology scan)](https://archive.org/details/bookofworshipapp0000evan/)
- **Seal**:
  - Evangelical and Reformed Synod (2023).

---

## License & Dedication

The liturgical texts contained herein are historic public domain treasures of the Christian Church. This software reader is dedicated to the glory of God and the renewal of liturgical prayer and worship.
