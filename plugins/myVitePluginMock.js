const fs = require('fs')
const path = require('path')

module.exports = () => {
    return {
        configureServer(server){
            function getMockApi (){
                // 先判断mock是否文件夹
                const mockStat = fs.statSync('mock')
                const isDir = mockStat.isDirectory()
                let mockApis = []
                if(isDir){
                    const result = require(path.resolve(process.cwd(), 'mock/index.js'))
                    mockApis = result
                }
                return mockApis
            }
            
            const mockApis = getMockApi();
            
            server.middlewares.use((req, res, next) => {
                const matchItem = mockApis.find((mockObj) => mockObj.url === req.url)
                if(matchItem){
                    const responseData = matchItem.response(req)
                    res.end(JSON.stringify(responseData))
                }else{
                    next()
                }
            })
        }
    }
}