export default function ThemeToggle({ dark, setDark }) {
  return (
    <button className="theme-toggle" onClick={() => setDark(!dark)}>
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
