import React, { ReactElement, useContext, useEffect, FunctionComponent } from 'react';
import { Button } from '../common/elements/button/Button';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { AppContext, AppContextModel } from '../context';

const Home: FunctionComponent = (): ReactElement<void> => {
    const { state } = useContext<AppContextModel>(AppContext);
    const { t } = useTranslation();

    useEffect(() => {
        console.log('Access to global state or dispach', state.generic);
    }, []);

    return (
        <div className={styles.home}>
            <div className={styles.content}>
                <h1 className={styles.title}>{t('home.title')}</h1>
                <div>
                    <Button onClick={() => alert('clicked')} label={t('home.testBtn')} />
                </div>
            </div>
        </div>
    );
};

export default Home;
