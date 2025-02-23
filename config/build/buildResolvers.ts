import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/types";

export function buildResolvers(options: BuildOptions):  ResolveOptions {
    return {
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src,
        },
    }
}