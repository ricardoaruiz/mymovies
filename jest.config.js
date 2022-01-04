module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts(x)?',
        '!src/**/*stories.tsx',
        '!src/components/**/index.ts',
        '!src/templates/**/index.ts',
        '!src/pages/**/*.tsx',
        '!src/styles/**/*.ts',
        '!**/*.d.ts',
        '!src/utils/apollo.ts',
        '!src/graphql/**/*',
        '!src/**/types.ts',
    ],
}
