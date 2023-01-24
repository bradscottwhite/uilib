/**
 * Buttons
 */

module.exports = {
  '.btn': {
    '@apply text-base-100 bg-neutral hover:bg-base-100 hover:text-neutral border border-neutral focus:ring-4 focus:ring-neutral font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none transition ease-in-out delay-150 duration-150': true
  },


  '.btn-primary': { '@apply bg-primary border-primary focus:ring-primary': true },
  '.btn-secondary': { '@apply bg-secondary border-secondary focus:ring-secondary': true },
  '.btn-accent': { '@apply bg-accent border-accent focus:ring-accent': true },
  '.btn-info': { '@apply bg-info border-info focus:ring-info': true },
  '.btn-success': { '@apply bg-success border-success focus:ring-success': true },
  '.btn-warning': { '@apply bg-warning border-warning focus:ring-warning': true },
  '.btn-error': { '@apply bg-error border-error focus:ring-error': true },



  '.btn-gradient': { '@apply border-none hover:text-base-100 bg-gradient-to-r from-neutral to-base-100 hover:bg-gradient-to-br shadow-lg shadow-neutral/50': true },
  '.btn-gradient.btn-primary': { '@apply from-primary shadow-primary/50': true },
  '.btn-gradient.btn-secondary': { '@apply from-secondary shadow-primary/50': true },
  '.btn-gradient.btn-accent': { '@apply from-accent shadow-accent/50': true },
  '.btn-gradient.btn-info': { '@apply from-info shadow-info/50': true },
  '.btn-gradient.btn-success': { '@apply from-success shadow-success/50': true },
  '.btn-gradient.btn-warning': { '@apply from-warning shadow-warning/50': true },
  '.btn-gradient.btn-error': { '@apply from-error shadow-error/50': true },


};

