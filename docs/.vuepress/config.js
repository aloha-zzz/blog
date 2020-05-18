module.exports = {
    description: 'Just playing around',
    themeConfig: {
        sidebar: [
            {
              title: '数据结构与算法',   // 必要的
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                ['/algorithm/a', '筛法']
              ]
            },
            {
              title: '学习笔记',   // 必要的
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                '/note/a'
              ]
            },
            {
              title: '设计思想',   // 必要的
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                '/'
              ]
            },
            {
              title: '学习资料',   // 必要的
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                ['/study/a', 'TODO']
              ]
            },
          ]
    },

}