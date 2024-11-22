import React from 'react';
import { NavLink } from 'react-router-dom';
import Routes from '../../routes';
import FooterFlowers from './footer.svg';
import { AUTHOR_SITE } from '../../constants';
import styles from './AppFooter.less';

const AppFooter = () => (
  <footer className={styles.root}>
    <div>
      <NavLink className={styles.logo} to={Routes[0].path}>
        <img
          src={FooterFlowers}
          height="80"
          alt=""
        />
      </NavLink>
      <p className={styles.copyright}>
        ©2017-2019 Natalia Biriouk
      </p>
      made by <a
          href={`http://${AUTHOR_SITE}`}
          target="_blank"
          rel="noopener noreferrer"
          >{AUTHOR_SITE}</a>
    </div>
  </footer>
);

export default AppFooter;
