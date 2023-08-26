import { html } from "common-tags";

const placeholders = {
    about: html`
        There are many great README templates available on GitHub; however, I didn't find one that really suited my needs so I created this enhanced one. I want to create a README template so amazing that it'll be the last one you ever need -- I think this is it.

        Here's why:
        * Your time should be focused on creating something amazing. A project that solves a problem and helps others
        * You shouldn't be doing the same tasks over and over like creating a README from scratch
        * You should implement DRY principles to the rest of your life :smile:
        
        Of course, no one template will serve all projects since your needs may be different. So I'll be adding more in the near future. You may also suggest changes by forking this repo and creating a pull request or opening an issue. Thanks to all the people have contributed to expanding this template!
        
        Use the ${'`'}BLANK_README.md${'`'} to get started.
    `,
    roadmap: html`
        - [x] Add Changelog
        - [x] Add back to top links
        - [ ] Add Additional Templates w/ Examples
        - [ ] Add "components" document to easily copy & paste sections of the readme
        - [ ] Multi-language Support
            - [ ] Chinese
            - [ ] Spanish
    `,
    contributing: html`
        Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

        If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
        Don't forget to give the project a star! Thanks again!
        
        1. Fork the Project
        2. Create your Feature Branch (${'`'}git checkout -b feature/AmazingFeature${'`'})
        3. Commit your Changes (${'`'}git commit -m 'Add some AmazingFeature'${'`'})
        4. Push to the Branch (${'`'}git push origin feature/AmazingFeature${'`'})
        5. Open a Pull Request
    `,
    acknowledgments: html`
        I've included a few of my favorites to kick things off!

        * [Choose an Open Source License](https://choosealicense.com)
        * [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
        * [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
        * [Malven's Grid Cheatsheet](https://grid.malven.co/)
        * [Img Shields](https://shields.io)
        * [GitHub Pages](https://pages.github.com)
        * [Font Awesome](https://fontawesome.com)
        * [React Icons](https://react-icons.github.io/react-icons/search)
    `
}

export default placeholders