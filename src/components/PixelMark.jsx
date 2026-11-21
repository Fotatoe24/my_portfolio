// "LP" drawn in pixels — a small nod to Artdotica.
const L = ['1000', '1000', '1000', '1000', '1111']
const P = ['1110', '1001', '1110', '1000', '1000']

export default function PixelMark({ size = 4, className = '' }) {
  const cells = []
  ;[L, P].forEach((glyph, g) =>
    glyph.forEach((row, y) =>
      [...row].forEach((c, x) => {
        if (c === '1') cells.push([x + g * 5, y])
      }),
    ),
  )
  return (
    <svg
      viewBox="0 0 9 5"
      width={9 * size}
      height={5 * size}
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="currentColor" />
      ))}
    </svg>
  )
}
