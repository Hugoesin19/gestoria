type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  /** Nivel del encabezado principal de la sección (h1 en páginas internas) */
  titleAs?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  titleAs: TitleTag = "h2",
}: Props) {
  const centered = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${
            light ? "text-sand/80" : "text-olive"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <TitleTag
        className={`text-2xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-olive-dark"
        }`}
      >
        {title}
      </TitleTag>
      <div
        className={`mt-4 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        <span className={`h-px w-10 ${light ? "bg-sand/50" : "bg-olive/40"}`} />
        <span className={`w-2 h-2 rotate-45 ${light ? "bg-sand" : "bg-olive"}`} />
        <span className={`h-px w-10 ${light ? "bg-sand/50" : "bg-olive/40"}`} />
      </div>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${
            centered ? "mx-auto" : ""
          } ${light ? "text-gray-300" : "text-olive-dark/70"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
