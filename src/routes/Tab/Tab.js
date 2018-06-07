import React, { Component, Fragment } from 'react';
import { Tabs, Icon } from 'antd';
import styles from './Tab.less';

const TabPane = Tabs.TabPane;

const images = [
  { text: 'tab1', active: './src/assets/508421.png', inactive: './src/assets/508417.png'},
  { text: 'tab2', active: './src/assets/1180555.png', inactive: './src/assets/1180363.png'}
]

export default class Tab extends Component {
  state = {
    selected: '0',
  }

  handleChange = (key) => {
    this.setState({ selected: key })
  }

  render() {
    const { selected } = this.state;

    return (
      <div className={styles.tabList}>
        <Tabs 
          onChange={this.handleChange}
        >
          {images.map((item, index) => {
            return <TabPane tab={<span><img src={index == selected ? item.active : item.inactive } />{item.text}</span>} key={index}>
              {item.text}
            </TabPane>
          })}
        </Tabs>
        <Tabs>
          <TabPane tab={<span className="tab1">Tab 1</span>} key="1">
            Tab 1
          </TabPane>
          <TabPane tab={<span className="tab2">Tab 2</span>} key="2">
            Tab 2
          </TabPane>
        </Tabs>
      </div>
    );
  }
}