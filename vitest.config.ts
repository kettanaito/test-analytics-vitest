import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      name: 'chromium',
      screenshotFailures: true,
    },
    reporters: ['default', 'junit'],
    outputFile: './test-report.junit.xml',
  },
})
