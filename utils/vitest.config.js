// vitest.config.ts
import { defineConfig } from 'vitest'

export default defineConfig({
  test: {
    include: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts'],
  },
})
