import Mock from 'mockjs';

export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      // 使用Mock.js生成动态数据
      return {
        code: 200,
        data: {
          // 生成随机姓名
          name: Mock.Random.cname(),
          // 生成18到60之间的随机年龄
          age: Mock.Random.integer(18, 60),
          // 生成随机邮箱地址
          email: Mock.Random.email(),
        },
        message: 'success',
      };
    },
  },
];

