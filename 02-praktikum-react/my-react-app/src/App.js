import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './Counter';

// Komponen Header
function Header() {
  return (
    <header>
      <h1>Aplikasi React Mayori</h1>
    </header>
  );
}

// Komponen Main
function Main() {
  return (
    <main>
      <h2>Selamat datang di Aplikasi React Mayori!</h2>
      <p>Ini adalah area konten utama.</p>
    </main>
  )
}

// Komponen Footer
function Footer() {
  return (
    <footer>
      <p>&copy; 2025, Aplikasi React Mayori</p>
    </footer>
  )
}

// Komponen App yang menggunakan ketiga komponen di atas
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
