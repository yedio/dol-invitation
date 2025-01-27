import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.url,
});

export default [
  ...compat.extends(
    "eslint:recommended", // 기본 ESLint 권장 규칙
    "plugin:@typescript-eslint/recommended", // TypeScript 권장 규칙
    "next/core-web-vitals", // Next.js 핵심 규칙
    "next/typescript" // Next.js 타입스크립트 규칙
  ),
  {
    files: ["**/*.ts", "**/*.tsx"], // TypeScript 파일만 검사
    languageOptions: {
      parser: "@typescript-eslint/parser",
      ecmaVersion: 2020,
      sourceType: "module",
    },
    rules: {
      // 규칙 커스터마이징
      "@typescript-eslint/no-explicit-any": "off", // any 허용
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "none",
          ignoreRestSiblings: true,
        },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-imports": "off",
    },
  },
];
