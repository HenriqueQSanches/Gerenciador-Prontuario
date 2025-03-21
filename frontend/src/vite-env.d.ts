/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_API_URL: string
  readonly VITE_API_BASE_URL: string
  readonly VITE_TIMEOUT: string
  readonly VITE_WITH_CREDENTIALS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
