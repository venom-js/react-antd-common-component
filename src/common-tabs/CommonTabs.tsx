/**
 * @name 组件名
 * @author MingShined
 */
import React, { Component } from 'react';
import { Tabs, Spin } from 'antd';
import { TabsProps, TabPaneProps } from 'antd/lib/tabs';

interface CommonTabsProps {
  onRender: (
    item: any,
    index: number,
    initActivityKey: number
  ) => React.ReactNode;
  tabsProps?: TabsProps;
  onChange?: (activeKey: string) => void;
  dataSource: any[];
}

export default class CommonTabs extends Component<CommonTabsProps> {
  static TabPane: React.ClassicComponentClass<TabPaneProps> = Tabs.TabPane;
  handleChange = activeKey => {
    const onChange = this.props.onChange;
    if (!onChange) {
      return;
    }
    onChange(activeKey);
  };
  render() {
    return (
      <Spin spinning={!this.props.dataSource.length}>
        <Tabs
          type="line"
          tabBarStyle={{ backgroundColor: '#fff' }}
          {...this.props.tabsProps}
          onChange={this.handleChange}
        >
          {this.props.dataSource.map((item, index) =>
            this.props.onRender(item, index, this.props.dataSource[0].brandId)
          )}
        </Tabs>
      </Spin>
    );
  }
}
