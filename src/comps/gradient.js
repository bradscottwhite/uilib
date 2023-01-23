module.exports = {
  '.text-gradient-to-r': {
    '@apply text-transparent bg-clip-text': true,
    '@apply bg-gradient-to-r': true,
    '@apply from-primary to-secondary': true,
    '&:hover': {
      '@apply text-blue-300': true
    }
  }
};
