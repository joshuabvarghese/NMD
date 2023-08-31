const nextBuildId = require("next-build-id");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  webpack: (config, { webpack, buildId, isServer }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.CONFIG_BUILD_ID": JSON.stringify(buildId)
      })
    );

    return config;
  }
}
