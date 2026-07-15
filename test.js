/**
 * tiny-state-core 測試
 */

const StateCore = require('./core.js');

// 建立狀態核心
const store = new StateCore({ count: 0 });

// 訂閱狀態變化
const unsubscribe = store.subscribe((state) => {
  console.log('狀態已更新:', state);
});

// 測試狀態更新
console.log('初始狀態:', store.getState());

store.setState({ count: 1 });
store.setState({ count: 2 });
store.setState({ count: 3 });

// 取消訂閱
unsubscribe();

store.setState({ count: 4 });

console.log('最終狀態:', store.getState());
console.log('測試完成');
