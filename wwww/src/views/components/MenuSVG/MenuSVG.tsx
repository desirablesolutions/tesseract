export default function MenuSVG() {
    return (
        <svg
        className="navbar-burger"
        width={18}
        height={17}
        viewBox="0 0 18 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={5} height={5} rx="2.5" fill="black" />
        <rect x={13} width={5} height={5} rx="2.5" fill="black" />
        <rect x={13} y={12} width={5} height={5} rx="2.5" fill="black" />
        <rect y={12} width={5} height={5} rx="2.5" fill="black" />
      </svg>
    )
}