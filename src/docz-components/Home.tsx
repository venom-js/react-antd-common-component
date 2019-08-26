/**
 * @name
 * @author MingShined
 */
import React, { Fragment } from 'react';
import styles from './index.less';
import { Button } from 'antd';
interface Props {}
const IndexPage: React.FC<Props> = props => {
  return (
    <div className={styles.indexWrap}>
      <h2>RACC</h2>
      <div className={styles.content}>
        <h1>让组件编写更具效率化</h1>
        <Button>
          <a href="/quick-start">继续了解</a>
        </Button>
      </div>
    </div>
  );
};
export default IndexPage;
