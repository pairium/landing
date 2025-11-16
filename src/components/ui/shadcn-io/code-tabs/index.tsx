'use client';

import * as React from 'react';
import { useTheme } from '@/stubs/next-themes';

import { motion } from 'motion/react';

import { cn } from '@/lib/utils';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TabsContents,
  useTabs,
  type TabsProps,
} from '@/components/ui/shadcn-io/tabs';
import { CopyButton } from '@/components/ui/shadcn-io/copy-button';
import { ExternalLinkIcon } from 'lucide-react';

type CodeEntryLink = string | { href: string; label?: string };
type CodeEntry = string | { code: string; lang?: string; link?: CodeEntryLink };
type CodesRecord = Record<string, CodeEntry>;
type ExternalLinkDetails = { href: string; label?: string };

type CodeTabsProps = {
  codes: CodesRecord;
  lang?: string;
  themes?: {
    light: string;
    dark: string;
  };
  copyButton?: boolean;
  onCopy?: (content: string) => void;
} & Omit<TabsProps, 'children'>;

function CodeTabsContent({
  codes,
  lang = 'bash',
  themes = {
    light: 'github-light',
    dark: 'github-dark',
  },
  copyButton = true,
  onCopy,
}: {
  codes: CodesRecord;
  lang?: string;
  themes?: { light: string; dark: string };
  copyButton?: boolean;
  onCopy?: (content: string) => void;
}) {
  const { resolvedTheme } = useTheme();
  const { activeValue } = useTabs();

  // Extract raw codes for initial rendering
  const getRawCode = (codes: CodesRecord, key: string): string => {
    const entry = codes[key];
    return typeof entry === 'string' ? entry : entry.code;
  };

  // Extract external link for current tab
  const resolveLink = (link?: CodeEntryLink): ExternalLinkDetails | undefined => {
    if (!link) return undefined;
    if (typeof link === 'string') return { href: link };
    if (link?.href) return { href: link.href, label: link.label };
    return undefined;
  };

  const getExternalLink = (
    codes: CodesRecord,
    key: string,
  ): ExternalLinkDetails | undefined => {
    const entry = codes[key];
    if (typeof entry === 'string') return undefined;
    return resolveLink(entry.link);
  };

  const initialCodes: Record<string, string> = {};
  Object.keys(codes).forEach(key => {
    initialCodes[key] = getRawCode(codes, key);
  });

  const [highlightedCodes, setHighlightedCodes] = React.useState<Record<
    string,
    string
  >>(initialCodes); // Start with raw codes for instant rendering

  React.useEffect(() => {
    async function loadHighlightedCode() {
      try {
        const { codeToHtml } = await import('shiki');
        const newHighlightedCodes: Record<string, string> = {};

        for (const [command, entry] of Object.entries(codes)) {
          const code = typeof entry === 'string' ? entry : entry.code;
          const codeLang = typeof entry === 'string' ? lang : (entry.lang || lang);

          const highlighted = await codeToHtml(code, {
            lang: codeLang,
            themes: {
              light: themes.light,
              dark: themes.dark,
            },
            defaultColor: resolvedTheme === 'dark' ? 'dark' : 'light',
          });

          // Remove background-color inline styles from Shiki output
          const cleanedHtml = highlighted.replace(/background-color:[^;]+;?/g, '');

          newHighlightedCodes[command] = cleanedHtml;
        }

        setHighlightedCodes(newHighlightedCodes);
      } catch (error) {
        console.error('Error highlighting codes', error);
      }
    }
    loadHighlightedCode();
  }, [resolvedTheme, lang, themes.light, themes.dark, codes]);

  return (
    <>
      <TabsList
        data-slot="install-tabs-list"
        className="w-full relative justify-between rounded-none h-10 bg-muted border-b border-border/75 dark:border-border/50 text-current py-0 px-4"
        activeClassName="rounded-none shadow-none bg-transparent tab-indicator"
      >
        <div className="flex gap-x-3 h-full">
          {Object.keys(codes).map((code) => (
            <TabsTrigger
              key={code}
              value={code}
              className="text-muted-foreground data-[state=active]:text-current px-0"
            >
              {code}
            </TabsTrigger>
          ))}
        </div>

        <div className="flex gap-1">
          {(() => {
            const externalLink = getExternalLink(codes, activeValue);
            return externalLink ? (
              <motion.a
                href={externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-0.5 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-8 w-auto px-1.5 bg-transparent hover-color-bg-interactive"
                title="Open in external app"
                aria-label={externalLink.label ?? externalLink.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLinkIcon className="h-4 w-4" />
                <span className="text-xs font-medium leading-none">
                  {externalLink.label ?? externalLink.href}
                </span>
              </motion.a>
            ) : null;
          })()}

          {copyButton && (
            <CopyButton
              content={getRawCode(codes, activeValue)}
              size="default"
              variant="ghost"
              className="bg-transparent hover-color-bg-interactive h-8 w-auto px-1.5 gap-0.5"
              label="Copy"
              labelClassName="text-xs"
              onCopy={onCopy}
            />
          )}
        </div>
      </TabsList>
      <TabsContents data-slot="install-tabs-contents">
        {Object.entries(codes).map(([code, entry]) => {
          const rawCode = getRawCode(codes, code);
          return (
            <TabsContent
              data-slot="install-tabs-content"
              key={code}
              className="w-full text-sm flex items-center px-4 py-2 overflow-auto"
              value={code}
            >
              <div className="w-full [&>pre]:m-0 [&>pre]:p-0 [&>pre]:bg-transparent! [&>pre]:border-none [&>pre]:text-[13px] [&>pre]:leading-relaxed [&>pre]:[--shiki-light-bg:transparent] [&>pre]:[--shiki-dark-bg:transparent] [&_code]:text-[13px] [&_code]:leading-relaxed [&_code]:bg-transparent! [&_.shiki]:bg-transparent!">
                {highlightedCodes[code] !== rawCode ? (
                  <div dangerouslySetInnerHTML={{ __html: highlightedCodes[code] }} />
                ) : (
                  <pre>
                    <code>{rawCode}</code>
                  </pre>
                )}
              </div>
            </TabsContent>
          );
        })}
      </TabsContents>
    </>
  );
}

function CodeTabs({
  codes,
  lang = 'bash',
  themes = {
    light: 'github-light',
    dark: 'github-dark',
  },
  className,
  defaultValue,
  value,
  onValueChange,
  copyButton = true,
  onCopy,
  ...props
}: CodeTabsProps) {
  const firstKey = React.useMemo(() => Object.keys(codes)[0] ?? '', [codes]);

  // Handle controlled vs uncontrolled properly
  const tabsProps = value !== undefined 
    ? { value, onValueChange } 
    : { defaultValue: defaultValue ?? firstKey };

  return (
    <Tabs
      data-slot="install-tabs"
      className={cn(
        'w-full gap-0 bg-transparent rounded-xl border overflow-hidden',
        className,
      )}
      {...tabsProps}
      {...props}
    >
      <CodeTabsContent
        codes={codes}
        lang={lang}
        themes={themes}
        copyButton={copyButton}
        onCopy={onCopy}
      />
    </Tabs>
  );
}

export { CodeTabs, type CodeTabsProps };