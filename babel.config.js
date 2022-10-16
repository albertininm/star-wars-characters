// eslint-disable-next-line no-undef
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    'babel-plugin-transform-scss',
    '@babel/plugin-transform-typescript'
  ]
};
