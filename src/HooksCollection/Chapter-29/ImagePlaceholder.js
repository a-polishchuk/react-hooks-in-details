export default function ImagePlaceholder({ size }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        border: '1px dashed #000',
      }}
    />
  );
}
