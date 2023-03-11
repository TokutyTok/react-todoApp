module.exports = {
    roots: ["<rootDir>/test"],
    transform: {
        '^.+\\.js$': './test/config/babel.config.js',
      },
    moduleFileExtensions: ['js', 'jsx'],
    verbose: true,
    testPathIgnorePatterns: ['<rootDir>/node_modules/','<rootDir>/src'],
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  }