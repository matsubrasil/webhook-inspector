import DOMPurify from 'dompurify'
import { type ComponentProps, useEffect, useMemo, useState } from 'react'
import { codeToHtml } from 'shiki'
import { twMerge } from 'tailwind-merge'

interface CodeBlockProps extends ComponentProps<'div'> {
  code: string
  language?: string
}

export function CodeBlock({
  code,
  language = 'json',
  className,
  ...props
}: CodeBlockProps) {
  const [parsedCode, setParsedCode] = useState<string>('')
  useEffect(() => {
    if (code) {
      codeToHtml(code, { lang: language, theme: 'vesper' }).then((parsed) =>
        setParsedCode(parsed),
      )
    }
  }, [code, language])

  const sanitizedContent = useMemo(
    () => ({
      __html: DOMPurify.sanitize(parsedCode),
    }),
    [parsedCode],
  )

  return (
    <div
      className={twMerge(
        'relative overflow-x-auto rounded-lg border border-zinc-700',
        className,
      )}
      {...props}
    >
      <div
        className="[&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:leading-relaxed"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: sanitized content.
        dangerouslySetInnerHTML={sanitizedContent}
      />
    </div>
  )
}
