/**
 * @name
 * @author MingShined
 */
import React, { useState } from 'react';
import { Card, Row, Col, Icon } from 'antd';
import styles from './index.less';
interface PlaygroundProProps {
  title: string;
  desc: string;
  code: React.ReactNode;
  component: React.ReactNode;
}
const PlaygroundPro: React.FC<PlaygroundProProps> = props => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Card style={{ marginBottom: 16 }} bodyStyle={{ padding: 0, overflow: 'hidden' }}>
      <div className={styles.component}>{props.component}</div>
      <Row type="flex" align="middle" gutter={16}>
        <Col className={styles.borderLeft} />
        <Col>
          <span className={styles.cardTitle}>{props.title}</span>
          <Icon style={{ marginLeft: 3 }} type="edit" />
        </Col>
        <Col className={styles.borderRight} />
      </Row>
      <div className={styles.desc}>{props.desc}</div>
      <div
        className={styles.footer}
        style={{ borderBottom: visible && '1px dashed #ebedf0' }}
      >
        <Icon type="codepen" className={styles.icon} />
        <Icon type="code-sandbox" className={styles.icon} />
        {/* <Icon type="copy" className={styles.icon} /> */}
        <span className={styles.icon} onClick={() => setVisible(!visible)}>
          &lt;&gt;
        </span>
      </div>
      {visible && <div className={styles.code}>{props.code}</div>}
    </Card>
  );
};
export default PlaygroundPro;
