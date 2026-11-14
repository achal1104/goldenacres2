export default function Logo({ onClick }) {
  return (
    <a className="logo" href="/" onClick={onClick} aria-label="Goldenacres home">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 2l12 14-12 14L4 16z" fill="none" stroke="#B99752" strokeWidth="1.6" />
        <path d="M16 9l6.5 7-6.5 7-6.5-7z" fill="#D4AF70" />
        <path d="M9.5 16h13" stroke="#12382D" strokeWidth="1" opacity=".5" />
      </svg>
      <span>GOLDEN<b>ACRES</b></span>
    </a>
  );
}
