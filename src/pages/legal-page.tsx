import type { JSX } from "react";

export type LegalSection = {
  title: string;
  body: string;
};

export type LegalPageProps = {
  id: string;
  title: string;
  sections: LegalSection[];
  tone?: "default" | "muted";
};

export function LegalPage({ id, title, sections, tone = "default" }: LegalPageProps): JSX.Element {
  const backgroundClass = tone === "muted" ? "color-bg-canvas-muted" : "color-bg-canvas-default";

  return (
    <section id={id} className={`${backgroundClass} py-20`} aria-labelledby={`${id}-heading`}>
      <div className="container mx-auto max-w-4xl space-y-6 px-4 sm:px-6">
        <div className="space-y-3 text-center">
          <h1 id={`${id}-heading`} className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h1>
          <p className="text-sm color-text-meta">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
        <div className="space-y-6 text-left color-text-secondary-strong">
          {sections.map((section) => (
            <article key={section.title} className="space-y-2">
              <h2 className="text-xl font-semibold">{section.title}</h2>
              <p className="text-sm leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

