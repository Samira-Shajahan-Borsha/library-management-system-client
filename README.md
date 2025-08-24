````markdown
# Library Management System

A minimal **Library Management System** built with **React, Redux Toolkit Query (RTK Query), and TypeScript**.  
This frontend application allows users to **manage books, borrow books, and view borrow summaries**, all without authentication or payment integration.

> Designed with clean state management, simple UI, and responsive layout.

---

## Features

### 1. Public Routes

- All pages are accessible without authentication.
- Focused only on **book management** and **borrowing features**.

### 2. Book Management

- **Book List Table**: Displays all books with columns:
  - Title, Author, Genre, ISBN, Copies, Availability, and Actions.
- **Actions:**
  - Edit: Update book details via API (with live UI updates).
  - Delete: Confirmation dialog before removing a book.
  - Borrow: Open a borrow form.
- **Add New Book**:
  - Form fields: Title, Author, Genre, ISBN, Description, Copies, Availability.
  - Redirects to book list after creation.

### 3. Borrow Book

- Form includes:
  - Quantity (must not exceed available copies).
  - Due Date (calendar picker).
- Business rules:
  - If copies reach 0 → book marked as unavailable.
  - API request + success message.
- Redirects to **Borrow Summary** page.

### 4. Borrow Summary

- Aggregated summary of borrowed books.
- Columns: Book Title, ISBN, Total Quantity Borrowed.
- Data fetched from API aggregation endpoint.

---

## UI Components

- **Navbar** → Links to All Books, Add Book, Borrow Summary.
- **Book List/Table** → Display all books with actions.
- **Footer** → Simple footer with credits/info.
- **Forms** → Minimal & responsive forms for add, edit, and borrow.

## UI/UX Design

- **Minimalist UI** using Tailwind CSS and shadcn component library.
- **Responsive Layout** for mobile, tablet, and desktop.
- **Clear Navigation** and simple forms.
- **Toast Notification** for success message.

### 🎁 Bonus Features (Implemented)

- ✅ Optimistic UI updates
- ✅ Toast notifications
- ✅ Responsive layout
- ✅ Type-safe forms

---

## Tech Stack

| Layer       | Technology                         |
| ----------- | ---------------------------------- |
| Frontend    | React + TypeScript                 |
| State Mgmt  | Redux Toolkit + RTK Query          |
| Styling     | Tailwind CSS / shadcn              |
| Backend API | Node.js + Express.js + Typescriptt |
| Database    | MongoDB + Mongoose                 |

---

## API Integration

- All API calls handled with **Redux Toolkit Query (RTK Query)**.
- Fully **typed endpoints** and **stateful caching**.
- Automatic refetch after create/update/delete.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Samira-Shajahan-Borsha/library-management-system-client.git
cd library-management-frontend
```
````

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the App

```bash
npm run dev
```

Frontend will be available at: **http://localhost:5173** (default Vite port).


## 🌐 Live Demo

🔗 [Frontend Live Link](#)  
🔗 [Backend Live Link](#https://library-management-system-server-xi.vercel.app/)

---
