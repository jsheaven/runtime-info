export const isBrowser = () => typeof window !== 'undefined' && typeof window.document !== 'undefined'
export const isServer = () => typeof window === 'undefined' || typeof window.document === 'undefined'
export const isWebWorker = () =>
  typeof self === 'object' && self.constructor && self.constructor.name === 'DedicatedWorkerGlobalScope'
