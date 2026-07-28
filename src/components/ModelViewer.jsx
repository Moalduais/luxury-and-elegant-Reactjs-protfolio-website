/**
 * Thin React wrapper around Google's <model-viewer> web component.
 * The @google/model-viewer package is imported once in main.jsx to register the custom element.
 */
export default function ModelViewer({ src, alt, className = '' }) {
  return (
    <model-viewer
      src={src}
      alt={alt}
      class={className}
      auto-rotate
      camera-controls
      shadow-intensity="1"
      environment-image="neutral"
      exposure="1.2"
      disable-zoom
      touch-action="none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
