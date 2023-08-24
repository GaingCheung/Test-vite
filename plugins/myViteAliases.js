const fs = require('fs')
const path = require('path')

module.exports = () => {
    function diffDirAndFile(srcDirs = [], basePath = ''){
        // 用于区分是文件还是文件夹
        const result = {
            dir: [],
            file: []
        }
        srcDirs.forEach((srcDir) => {
            const currentFileStatue = fs.statSync(path.resolve(__dirname, basePath + '/' + srcDir))
            if(currentFileStatue.isDirectory()){
                result.dir.push(srcDir)
            }else{
                result.file.push(srcDir)
            }
        })
        return result
    }
    function getSrcDir(){
        // 用于读取src下的目录
        const result = fs.readdirSync(path.resolve(__dirname, '../src'))
        const diffResult = diffDirAndFile(result, '../src')
        const aliasList = {
            '@': './src'
        }
        diffResult.dir.forEach((dir) => {
            const key = `@${dir}`
            const value = path.resolve(__dirname, '../src' + '/' + dir)
            aliasList[key] = value
        }) 
        // console.log(aliasList)
        return aliasList
    }
    return {
        config(config, env){
            // console.log('configconfig', config, env)
            return{
                resolve:{
                    alias: getSrcDir()
                }
            }
        }
    }
}