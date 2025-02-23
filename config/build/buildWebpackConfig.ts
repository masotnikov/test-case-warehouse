import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";
import webpack from "webpack";
import { BuildOptions } from "./types/types";

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode,
    devtool: "inline-source-map",
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    output: {
      filename: "[contenthash:8].js",
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    resolve: buildResolvers(options),
    devServer: buildDevServer(options)
  };
}