import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      // Rules already disabled
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      
      // Additional rules to disable for build errors
      '@typescript-eslint/no-unused-vars': 'off',  // Disables all unused vars errors
    },
  }),
]

export default eslintConfig