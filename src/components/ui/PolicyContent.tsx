import type { ReactNode } from 'react'

interface PolicySection {
  title: string
  content: ReactNode
}

interface PolicyContentProps {
  sections: PolicySection[]
}

export function PolicyContent({ sections }: PolicyContentProps) {
  return (
    <div className="space-y-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">{section.title}</h3>
          <div className="space-y-2 text-sm">{section.content}</div>
        </div>
      ))}
    </div>
  )
}
