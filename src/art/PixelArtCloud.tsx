import React from "react";

interface PixelArtCloudProps {
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * PixelArtCloud - A retro pixel-style cloud SVG for MapleStory-inspired projects.
 *
 * @param size - The width in pixels (default: 64)
 * @param style - Optional inline style
 * @param className - Optional CSS class
 */
const PixelArtCloud: React.FC<PixelArtCloudProps> = ({
  size = 64,
  style,
  className,
}) => (
  <svg
    width={size}
    height={size / 2}
    viewBox="0 0 64 32"
    style={style}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="crispEdges"
  >
    <rect x="12" y="16" width="40" height="8" fill="#fff" />
    <rect x="16" y="12" width="32" height="8" fill="#fff" />
    <rect x="24" y="8" width="16" height="8" fill="#fff" />
    {/* Subtle shadow pixels for MapleStory feel */}
    <rect x="20" y="20" width="8" height="4" fill="#e0e6e9" />
    <rect x="36" y="20" width="8" height="4" fill="#e0e6e9" />
  </svg>
);

export default PixelArtCloud;
