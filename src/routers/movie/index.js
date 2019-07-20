export default {
    path: "/movie",
    component: () =>
        import ("@/views/Movie"),
    children: [{
            path: "nowplaying",
            component: () =>
                import ("@/components/NowPlaying")
        }, {
            path: "playingsoon",
            component: () =>
                import ("@/components/PlayingSoon")
        }, {
            path: "search",
            component: () =>
                import ("@/components/Search")
        }, {
            path: "city",
            component: () =>
                import ("@/components/City")
        },
        // 重定向
        {
            path: "/movie",
            redirect: "/movie/nowplaying"
        }
    ]
}