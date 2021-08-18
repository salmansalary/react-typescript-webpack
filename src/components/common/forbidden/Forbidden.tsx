import React, { FunctionComponent, ReactElement, memo } from 'react';
import { useTranslation } from "react-i18next";
import styles from "./styles.module.scss";

const Forbidden: React.FunctionComponent = React.memo(
  (): React.ReactElement<void> => {
    const { t } = useTranslation();

    return (
      <div className={styles.errorContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t("forbidden.title")}</h1>
          <p className={styles.desc}>{t("forbidden.desc")}</p>
        </div>
      </div>
    );
  }
);

export default Forbidden;
