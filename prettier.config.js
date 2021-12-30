module.exports = {
  printWidth: 80,
  semi: false,
  trailingComma: "all",
  overrides: [
    {
      files: "**/*.json",
      options: {
        trailingComma: "none",
      },
    },
  ],
}
