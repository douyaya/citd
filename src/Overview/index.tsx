/**
 * @file src/Overview
 * @author anyue.gy
 */
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Descriptions, Tooltip } from 'antd';
import classNames from 'classnames';
import _ from 'lodash';
import React, { CSSProperties } from 'react';

import { ConfigContext } from 'antd/es/config-provider';

import './index.less';

interface DataItem {
  label: string;
  value: string;
  linkUrl?: string | undefined;
  extra?: string;
  span?: number;
}

type DescriptionsProps = {
  bordered: boolean;
  colon: boolean;
  column: number;
  contentStyle: CSSProperties;
  extra: React.ReactNode;
  labelStyle: CSSProperties;
  layout: 'horizontal' | 'vertical';
  size: 'default' | 'middle' | 'small';
  title: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  prefixCls?: string;
};

type OverviewProps = {
  data: DataItem[];
  title?: React.ReactNode;
} & DescriptionsProps;

const Overview: React.FC = (props: OverviewProps) => {
  const {
    data,
    title = '概要',
    className = '',
    style,
    prefixCls: customizePrefixCls,
    ...descriptionsProps
  } = props;

  const { getPrefixCls } = React.useContext(ConfigContext);

  const prefixCls = getPrefixCls('overview', customizePrefixCls);
  const classString = classNames(prefixCls, className);

  const getLabel = (dataItem: DataItem) => {
    return dataItem.extra ? (
      <>
        {dataItem.label}
        <Tooltip title={dataItem.extra}>
          <QuestionCircleOutlined style={{ margin: 4 }} />
        </Tooltip>
      </>
    ) : (
      dataItem.label
    );
  };

  return data && data.length ? (
    <Descriptions
      title={title}
      style={style}
      {...descriptionsProps}
      className={classString}
    >
      {_.map(data, (dataItem, index) => {
        return (
          <Descriptions.Item
            key={index}
            span={dataItem.span}
            label={getLabel(dataItem)}
          >
            {dataItem.linkUrl ? (
              <a href={dataItem.linkUrl} target="_blank" rel="noreferrer">
                {dataItem.value}
              </a>
            ) : dataItem.value ? (
              dataItem.value
            ) : (
              '--'
            )}
          </Descriptions.Item>
        );
      })}
    </Descriptions>
  ) : null;
};

export default Overview;
