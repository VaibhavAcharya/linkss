export function HSLA(hue, saturation, lightness, alpha = 1.0) {
  return `hsla(${hue}deg, ${saturation}%, ${lightness}%, ${alpha})`;
}
