# PawMart – Pet Adoption & Supplies Marketplace

**Live Client Site:** // reserve for live link and so on  
(Deployed on Netlify – Fully Responsive React + Tailwind CSS Frontend)

PawMart is a full-featured, beautiful, and user-friendly platform that connects pet lovers with local adopters and sellers. Whether someone wants to adopt a rescued pet for free or buy pet food, accessories, and care products — PawMart makes the process simple, safe, and heartwarming.

## Key Features

- **Free Pet Adoption + Paid Supplies in One Place**  
  Pets listed under the “Pets” category are always free for responsible adoption, while Food, Accessories, and Care Products have proper pricing – all handled automatically in forms and UI.

- **Powerful Search & Category Filtering**  
  Instantly search by name and filter by category (Pets, Food, Accessories, Care Products) on the “Pet & Supplies” page and category-specific routes.

- **User Dashboard & Listings Management**  
  Registered users can:
  - Add new listings
  - View, edit, and delete their own listings
  - See all orders/adoptions they’ve received
  - Download a PDF report of their orders

- **Secure Authentication**  
  Email/password login + Google Sign-In powered by Firebase Authentication. Protected routes ensure only logged-in users can add/edit listings or place orders.

- **Seamless Order / Adoption Flow**  
  Detailed listing page → “Adopt / Order Now” → Rich modal form → Order saved instantly. Quantity is locked to 1 for pets, and price shows “Free for Adoption” when applicable.

- **Stunning & Responsive UI**  
  Built with React 18, Tailwind CSS, DaisyUI, Framer Motion animations, Swiper carousel, react-hot-toast notifications, and a custom dark/light theme toggle that persists via localStorage.

- **Bonus Engaging Sections**  
  - Hero slider with typewriter effect
  - “Shop by Category” cards
  - Recent listings showcase
  - “Why Adopt from PawMart?” & “Meet Our Pet Heroes” emotional sections

## Tech Stack

- **Frontend:** React 18 + Vite, React Router v6, Tailwind CSS + DaisyUI
- **State Management:** Context API (AuthContext)
- **Backend (for this demo):** JSON server running on localhost:3000 (easily replaceable with Node/Express + MongoDB)
- **Authentication:** Firebase Auth (Email/Password + Google)
- **Other Libraries:** axios, react-hot-toast, swiper, framer-motion, jspdf + autotable, lucide-react icons, react-simple-typewriter
