export default function Navbar() {
  return (
    <div className="flex justify-between py-5 px-10 w-full ">
      <div className="flex items-center justify-center gap-3">
        <svg
          width="31"
          height="27"
          viewBox="0 0 31 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="7.39491"
            height="26.6217"
            rx="3.69746"
            transform="matrix(-0.866025 -0.5 -0.5 0.866025 20.3555 3.82129)"
            fill="#06143D"
          />
          <rect
            x="10.644"
            y="3.82129"
            width="7.39491"
            height="26.6217"
            rx="3.69746"
            transform="rotate(-30 10.644 3.82129)"
            fill="#2253E6"
            fill-opacity="0.9"
          />
        </svg>
        <h2 className="font-bold text-xl font-montserrat">REPH</h2>
      </div>
    </div>
  );
}
