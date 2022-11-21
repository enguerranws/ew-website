import '@/assets/css/fonts.css';
import '@/assets/css/colors.css';
import '@/assets/css/reset.css';
import '@/assets/css/style.scss';

import { initContent, initLogo, initLinks, initFaders } from '@/components';
import { siteInitialContent } from '@/data/content';

const {
  content,
  links
} = siteInitialContent();

initLogo();
initContent(content)
initLinks(links);
initFaders();