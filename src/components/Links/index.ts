import {
  getAppElement
} from "@/helpers/app";
import {
  Links
} from "@/types/links";
import './index.scss'

export const getLinks = () => {
  return document.querySelector('.links');
}


export const renderLinks = (links: Links) => {
  const app = getAppElement();
  const html = `
    <nav aria-labelledBy="nav-label">
      <span class="links__label" id="nav-label">Lien vers mes différents comptes / réseaux sociaux</span>
      <ul class="links">
        ${links.map(link => `<li class="links__item">
          <a class="links__anchor links__anchor--${link.type} fader" title="${link.title}" href="${link.url}" target="_blank">
            ${link.type}
          </a>
        </li>`).join('')}
      </ul>
    </nav>
  `;
  if (app) {
    app.innerHTML += html;
  }
  return getLinks();
}

export const initLinks = (links: Links) => {
  renderLinks(links);
}