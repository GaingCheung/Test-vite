module.exports = (option) => {
    return {
        transformIndexHtml: {
            enforce: 'pre',
            transform: (html) => {
                // console.log('html', html)
                return html.replace(/<%= title %>/g, option.inject.data.title)
            }
        }
    }
}