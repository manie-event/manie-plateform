import eslint from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // ✅ Règles Prettier
      'prettier/prettier': 'error',

      // ✅ Règles TypeScript strictes
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',

      // ✅ ESLint Core Rules — fais bien attention qu'elles existent dans la version Flat
      'no-console': 'warn',
      'no-debugger': 'error',
      eqeqeq: ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],

      // ❌ Supprimé : "curly" → non reconnu ici dans ce contexte
      // Si tu veux la garder, utilise une config personnalisée avec le plugin adapté

      // 🔁 Désactivation des règles de style (gérées par Prettier)
      semi: 'off',
      quotes: 'off',
      indent: 'off',
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/quotes': 'off',

      // 🔁 Désactivation des délimiteurs car Prettier les gère aussi
      '@typescript-eslint/member-delimiter-style': 'off',
      '@typescript-eslint/type-annotation-spacing': 'off',
    },
  }
);
