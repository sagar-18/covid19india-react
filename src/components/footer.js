import React from 'react';
import * as Icon from 'react-feather';
import {useTranslation} from 'react-i18next';

function Footer(props) {
  const {t} = useTranslation();

  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h5>{t('We stand with everyone fighting on the frontlines')}</h5>

      <div className="link">
        <a
          href="https://www.coronacurfew.live"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.coronacurfew.live
        </a>
      </div>

    

      <a
        className="button excel"
        href="https://www.coronacurfew.live/demographics"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.Database />
        <span>LIVE INDIA CLUSTERS DATABASE&nbsp;</span>
      </a>

     

      <a
        href="https://global.coronacurfew.live"
        className="button telegram"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.MessageCircle />
        <span>LIVE COVID-19 GLOBAL TRACKER</span>
      </a>
    </footer>
  );
}

export default React.memo(Footer);
