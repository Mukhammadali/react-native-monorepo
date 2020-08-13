module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.tsx',
          '.ts',
          '.json',
          '.web.js',
          '.android.js',
          '.ios.js',
          '.web.ts',
          '.android.ts',
          '.ios.ts',
          'svg',
        ],
        root: ['./apps/mobile'],
        alias: {
          src: './apps/mobile/src',
        },

        cacheDirectory: true,
      },
    ],
  ],
};
