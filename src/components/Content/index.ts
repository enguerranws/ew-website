import {
  getAppElement
} from "@/helpers/app";
import './index.scss'

export const getContent = () => {
  return document.querySelector('.content');
}

export const renderContent = (content: string) => {
  const app = getAppElement();
  const html = `
    <main class="content fader">
      ${content}
    </main>
  `;
  if (app) {
    app.innerHTML += html;
  }
  return getContent();
}

export const initContent = (content: string) => {
  renderContent(content);
}