import { SiteContent } from "../types/site-content"

export const siteInitialContent = ():SiteContent => ({
  content: `Je m'appelle <strong>Enguerran</strong>, je suis <strong>développeur web front-end</strong>, et je travaille actuellement pour <a href="#">beta.gouv.fr</a> au sein de l'équipe <a href="https://immersion-facile.beta.gouv.fr/" target="_blank">Immersion Facilitée</a>. <small>#React #TypeScript #Redux #CSS #HTML #a11y</small>`,
  links: [
    {
      type: 'github',
      url: 'https://github.com/enguerranws',
      title: 'Lien vers mon Github'
    },
    {
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/enguerran-weiss/',
      title: 'Lien vers ma page Linkedin'
    },
    {
      type: 'twitter',
      url: 'https://twitter.com/enguerranws',
      title: 'Lien vers mon compte Twitter'
    },
    {
      type: 'stackoverflow',
      url: 'https://stackoverflow.com/users/2054977/enguerranws',
      title: 'Lien vers mon profil StackOverflow'
    },
    {
      type: 'email',
      url: 'mailto:enguerran@pm.me',
      title: 'Lien vers mon mail'
    }
  ]
})