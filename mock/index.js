module.exports = [
    {
    url: '/api/getList',
    method: 'get',
    response: ({query}) => {
        return {
            code: 200,
            msg: 'success',
            data: {
                list: []
                }
            }
        }
    }
]