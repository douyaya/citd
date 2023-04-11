import { StarOutlined } from '@ant-design/icons';
import { Overview } from 'citd';

const Text = () => {
  return (
    <span>
      text <StarOutlined />
    </span>
  );
};

export default () => {
  const overviewData = [
    { key: 'UserName', label: 'UserName', value: 'Zhou Maomao' },
    { key: 'Telephone', label: 'Telephone', value: '1810000000' },
    { key: 'Live', label: 'Live', value: 'Hangzhou, Zhejiang' },
    { key: 'Remark', label: 'Remark', value: 'empty' },
  ];
  return (
    <Overview
      bordered
      size={'small'}
      column={2}
      extra={<StarOutlined />}
      title={
        <span>
          其他参数配置，同antd的
          <a href="https://ant-design.antgroup.com/components/descriptions-cn#descriptions">
            Descriptions
          </a>
          配置（bordered、size、column、extra等）
        </span>
      }
      data={overviewData}
    />
  );
};
