module.exports = {
  "*.{js,jsx,ts,tsx}": "tsc-files --noEmit",
  "*.{js,jsx,ts,tsx}": "eslint",
  "*.{js,jsx,ts,tsx,json,css,scss,html,md}": "prettier --write",
}
