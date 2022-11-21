import {
  getAppElement
} from "@/helpers/app";
import './index.css'

export const getLogo = () => {
  return document.querySelector('.logo');
}

export const renderLogo = () => {
  const app = getAppElement();
  const html = `
    <div class="logo fader">
      <div class="logo__circle"></div>
      <div class="logo__image">
        <svg width="250" height="248" viewBox="0 0 250 248" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_7)">
          <path d="M180.733 247.222H69.2674L0 158.256L24.7122 48.847L124.951 0L225.299 48.156L250 158.386L180.733 247.222ZM80.3532 225.628H169.654L225.496 153.44L205.556 64.1828L125.031 25.3989L44.451 64.5895L24.5181 153.379L80.3532 225.628Z" fill="white"/>
          <path d="M115.652 102.15H134.355L142.477 149.561H142.699L148.262 102.15H168.296L154.72 170.669H132.016L125.113 124.612H124.89L117.991 170.669H95.2839L81.7042 102.15H101.738L107.969 149.561H108.192L115.652 102.15Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_2_7">
          <rect width="250" height="247.222" fill="white"/>
          </clipPath>
          </defs>
        </svg>

      
      </div>
    </div>
  `;
  if (app) {
    app.innerHTML += html;
  }
  return getLogo();
}

export const initLogo = () => {
  renderLogo();
}