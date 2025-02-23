import type { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/types";
import path from "path";


export default (env: BuildEnv): Configuration => {

  const paths: BuildPaths = {
    html: path.resolve(__dirname, "public", "index.html"),
    entry: path.resolve(__dirname, "src", "main.tsx"),
    output: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const port = env.port || 3000;
  const isDev = env.mode === "development";
  const platform = env.platform || "desktop";

  const config: Configuration = buildWebpackConfig({
    paths,
    mode,
    port,
    isDev,
    platform,
  });

  return config;
};