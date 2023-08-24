import { defineConfig, loadEnv  } from "vite"
import viteProdConfig from './vite.prod.config.js'
import viteBaseConfig from './vite.base.config.js'
import viteDevConfig from './vite.dev.config.js'

const envResolve = {
    "build": () => {
        console.log('当前为生产环境')
        return {...viteBaseConfig, ...viteProdConfig}
    },
    "serve": () => {
        console.log('当前为开发环境')
        // console.log(process.env, 'process.env2')
        return {...viteBaseConfig, ...viteDevConfig}
    }
}

export default defineConfig(({command, mode}) => {
    // console.log(mode, 'mode')
    // const env = loadEnv(mode, process.cwd(), '')
    // console.log(env, 'process.env1')
    return envResolve[command]()
})