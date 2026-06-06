declare module '*.jsx' {
  import type { ComponentType } from 'react'
  const component: ComponentType
  export default component
}

declare module '@/widgets/NotificationProvider.jsx' {
  import type { ReactNode } from 'react'

  export function NotificationProvider(props: { children: ReactNode }): ReactNode
  export function useNotification(): {
    success: (content: string) => void
    error: (content: string) => void
    warning: (content: string) => void
    info: (content: string) => void
    celebrate: (content: string) => void
    showLoading: (content?: string) => void
    hideLoading: () => void
    loading: boolean
  }
}
