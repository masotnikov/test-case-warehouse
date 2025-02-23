import type { StorybookConfig } from "@storybook/react-webpack5";
import { Configuration } from "webpack";
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/types";

const config: StorybookConfig = {
  stories: [
    "../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-babel"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: async (config: Configuration) => {
    const paths: BuildPaths = {
      html: "",
      output: "",
      entry: "",
      src: path.resolve(__dirname, "..", "..", "src")
    };

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": paths.src,
      };
    }

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push(".ts", ".tsx", ".js");
    config.module.rules.push(buildCssLoader(true));

    return config;
  }
};
export default config;
