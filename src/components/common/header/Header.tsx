import React, { FunctionComponent, ReactElement, memo, useContext } from 'react';
import classNames from 'classnames';
import { AppContextModel, AppContext } from '../../context';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

const Header: FunctionComponent = memo(
    (): ReactElement<void> => {
        const { state } = useContext<AppContextModel>(AppContext);
        const { t, i18n } = useTranslation();

        return (
            <nav className={styles.header}>
                <div className={classNames('container', styles.content)}>
                    <div>{t('header.logo')}</div>
                    <ul className={styles.navbar}>
                        <li>{t('header.item1')}</li>
                        <li>{t('header.item2')}</li>
                    </ul>

                    <ul className={styles.languages}>
                        <li
                            className={`${state.generic.languageCode === 'en' ? styles.active : ''}`}
                            onClick={() => {
                                i18n.changeLanguage('en');
                            }}
                        >
                            EN
                        </li>
                        <li>Other</li>
                    </ul>
                </div>
            </nav>
        );
    }
);

export default Header;
