module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'eslint'],
  '**/*.ts?(x)': () => 'pnpm check-types',
  '*.{html,css,scss,js,jsx,cjs,mjs,ts,tsx,md,mdx,json,yml,yaml,gql,graphql}': [
    'prettier --write',
  ],
}
