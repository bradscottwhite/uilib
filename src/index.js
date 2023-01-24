/**
 * UILib
 */

const plugin = require('tailwindcss/plugin');

const colors = require('./colors/index');
const base = require('./base/index');
const comps = require('./comps/index');

const fn = ({ theme, addBase, addComponents }) => {
  addBase(base(theme));
  addComponents(comps);
};

module.exports = plugin(fn, {
  theme: { extend: { colors } },
  variants: [ 'responsive', 'hover' ]
});
