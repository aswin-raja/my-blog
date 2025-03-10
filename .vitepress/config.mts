import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Documents",
  description: " ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    search: {
      provider: 'local',
    },
    outline: [2, 3],
    sidebar: [
      {
        text: 'Blogs',
        items: [
          { text: 'Development Tools', link: '/md_files/crops' },
          { text: 'Locale Configuration', link: '/md_files/locale' },
         
        ]
      },
      {
        text: 'Javascript',
        items: [
          { text: 'Js basics', link: '/md_files/java_script' },
         
        ]
      },
      {
        text:'Commands',
        items:[
          { text: 'Linux Commands', link: '/md_files/linux' },
          { text: 'Tmux', link: '/md_files/tmux' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aswin-raja' }
    ]
  }
})
