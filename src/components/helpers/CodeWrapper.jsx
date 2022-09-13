export default function CodeWrapper({ sections, children }) {
  const styling = {
    gridTemplateColumns: `repeat(${sections}, 1fr)`,
  };

  return (
    <article className="grid code-wrapper" style={styling}>
      {children}
    </article>
  );
}
