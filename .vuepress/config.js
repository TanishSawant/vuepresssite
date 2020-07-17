module.exports = {
    title : 'Motivación',
    description: 'Start your browser with motivation to learn spanish',
    themeConfig: {
        nav: [
            {text: 'Home' , link: '/'},
            {text: 'Significance' , link: '/use/'},
            {text: 'Guide' , link: '/guide/'},
            {text: 'Blog' , link: 'https://infocrumbers.blogspot.com/'},
        ],
        sidebar: {
            '/guide/' : 'auto',
            '/use/' : 'auto'
        }
    }
}

