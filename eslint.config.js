import js from '@eslint/js'
import svelte from 'eslint-plugin-svelte'
import prettier from 'eslint-config-prettier'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    rules: {
      // No base path configured for this project, so resolve() is not needed for internal hrefs
      'svelte/no-navigation-without-resolve': 'off',
      // {@html} is used only for Sanity Portable Text output which is trusted CMS content
      'svelte/no-at-html-tags': 'warn'
    }
  },
  {
    ignores: ['build/', '.svelte-kit/', 'dist/', 'package/', 'studio/', 'static/studio/']
  }
]
