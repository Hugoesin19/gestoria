type Props = {
  className?: string;
  opacity?: string;
};

export default function Grain({ className = "", opacity = "opacity-[0.07]" }: Props) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${opacity} ${className}`}
      style={{
        backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
      }}
      aria-hidden
    />
  );
}
