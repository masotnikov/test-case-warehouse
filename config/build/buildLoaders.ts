import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
import {buildCssLoader} from "./loaders/buildCssLoader";

export function buildLoaders ({ isDev }: BuildOptions): ModuleOptions["rules"] {

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
    },
  };
  
  const assetLoader = {
    test: /\.(png|jpe?g|woff2?)$/i,
    type: "asset/resource",
  };


  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: "convertColors",
                params: {
                  currentColor: true,
                }
              }
            ]
          }
        }
      }
    ],
  };


  const cssLoader = buildCssLoader(isDev);

  return [
    assetLoader,
    babelLoader,
    cssLoader,
    svgrLoader
  ];
}
