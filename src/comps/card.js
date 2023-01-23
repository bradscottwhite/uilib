/**
 * Card styles
 */

module.exports = {
  '.card': {
    '@apply relative block overflow-hidden rounded-lg border border-gray-100 p-8 bg-base-100': true
  },
  '.card-border': {
    '@apply absolute inset-x-0 bottom-0 h-2 bg-primary': true
  },
  '.border-gradient': {
    '@apply bg-gradient-to-r from-primary to-secondary': true
  },
  '.card-title': {
    '@apply text-xl font-bold text-neutral': true
  },
  '.card-body': {
    '@apply mt-4 sm:pr-8': true
  },
  '.card-text': {
    // change to have lighter shade of neutral
    '@apply text-sm text-neutral': true
  }
};
