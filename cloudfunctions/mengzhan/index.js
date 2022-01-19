const getCamp = require('./getCamp/index');

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getCamp':
      return await getCamp.main(event, context);
  }
};
