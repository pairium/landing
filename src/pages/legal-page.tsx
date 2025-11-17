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
  const panelToneClass = tone === "muted" ? "color-bg-surface-subtle" : "color-bg-surface";

  return (
    <section id={id} className="color-bg-base py-20" aria-labelledby={`${id}-heading`}>
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className={`rounded-3xl ${panelToneClass} border color-border-soft p-8 sm:p-12 shadow-sm space-y-8`}>
          <div className="space-y-3 text-center">
            <h1 id={`${id}-heading`} className="text-3xl font-bold tracking-tight sm:text-4xl color-text-base">
              {title}
            </h1>
            <p className="text-sm color-text-meta">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
          <div className="space-y-6 text-left">
            {sections.map((section) => (
              <article key={section.title} className="space-y-2">
                <h2 className="text-xl font-semibold color-text-base">{section.title}</h2>
                <p className="text-base leading-relaxed color-text-muted">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

