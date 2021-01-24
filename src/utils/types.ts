import ApiContractor from '@/data/contractors/api.contractor'

export interface ToasterOptions {
  message?: string
  type?: 'default' | 'success' | 'info' | 'warning' | 'error'
  position?:
    | 'top'
    | 'bottom'
    | 'top-right'
    | 'bottom-right'
    | 'top-left'
    | 'bottom-left'
  duration?: number
  dismissible?: boolean
  onClick?(): void
  onClose?(): void
  queue?: boolean
  pauseOnHover?: boolean
  useDefaultCss?: boolean
}

export interface Toaster {
  clear(): void

  show(message: string, options?: ToasterOptions): void
  success(message: string, options?: ToasterOptions): void
  error(message: string, options?: ToasterOptions): void
  info(message: string, options?: ToasterOptions): void
  warning(message: string, options?: ToasterOptions): void
}

export type InjectionType = {
  api: {
    value: ApiContractor
  }
  // api: ApiContractor
  toast: Toaster
}

interface CustomTarget extends EventTarget {
  value: string | number
}
export interface CustomEvent extends Event {
  target: CustomTarget
}

export type ButtonType = 'submit' | 'reset' | 'button'
