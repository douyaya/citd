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
    { key: 'batchName', label: '普通展示', value: '普通内容展示' },
    {
      key: 'creatorName',
      label: '带链接的展示',
      value: '淘宝网',
      linkUrl: 'https://ai.taobao.com/',
    },
    {
      key: 'appName',
      label: '带提示的展示',
      value: '展示内容',
      extra: '提示信息',
    },
    {
      key: 'planName',
      label: (
        <span>
          自定义label
          <StarOutlined />
        </span>
      ),
      value: '展示内容',
    },
    {
      key: 'planName',
      label: '跨多列展示',
      value:
        '跨2列展示很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文本',
      span: 2,
    },
    { key: 'planName', label: '自定义展示内容', value: <Text /> },
  ];
  return <Overview title="标题" data={overviewData} />;
};
