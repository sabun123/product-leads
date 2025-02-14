export const Gradient = {
  RadialBlue: ({ className = "" }: { className?: string }) => (
    <div
      className={`absolute mix-blend-multiply filter blur-[100px] opacity-50 ${className}`}
      style={{
        background:
          "radial-gradient(circle at center, rgba(30, 64, 175, 0.2), rgba(0, 0, 0, 0) 70%)",
      }}
    />
  ),
  RadialGreen: ({ className = "" }: { className?: string }) => (
    <div
      className={`absolute mix-blend-multiply filter blur-[100px] opacity-50 ${className}`}
      style={{
        background:
          "radial-gradient(circle at center, rgba(16, 185, 129, 0.2), rgba(0, 0, 0, 0) 70%)",
      }}
    />
  ),
}