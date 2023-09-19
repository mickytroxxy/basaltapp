module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'react-native-reanimated/plugin',
      {
        globals: ['__scanCodes'],
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@molecule': './src/component/molecule',
          '@atom': './src/component/atom',
          '@organisms': './src/component/organisms',
          '@zod': './src/utils/zod',
          '@': './src',
        },
      },
    ]
  ],
};
