import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import { ViteAliases } from "./node_modules/vite-aliases";
import myViteAliases from "./plugins/myViteAliases";
import myCreateHtmlPlugin from "./plugins/myCreateHtmlPlugin";
import { createHtmlPlugin } from "vite-plugin-html";
import {viteMockServe } from 'vite-plugin-mock'
import myVitePluginMock from "./plugins/myVitePluginMock";
import checker from 'vite-plugin-checker'

export default defineConfig({
    envPrefix: 'ENV',
    css:{
        preprocessorOptions:{
            less:{

            }
        }
    },
    plugins: [
        myViteAliases(),
        myCreateHtmlPlugin({
            inject:{
                data: {
                    title: 'hihi'
                }
            }
        }),
        viteMockServe(),
        myVitePluginMock(),
        checker({
            typescript: true
        }),
        createHtmlPlugin({
            inject:{
                data:{
                    title: 'shouye'
                }
            }
        }),
        ViteAliases()
    ],
    resolve:{
        alias:{
            '@': './src'
        }
    }
})