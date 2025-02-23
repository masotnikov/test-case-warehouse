import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildCssLoader = (isDev: boolean) => {
  return {
    test:  /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            exportLocalsConvention: "as-is",
            auto: (resPath: string): boolean => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]--[local]--[hash:base64:4]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };
};