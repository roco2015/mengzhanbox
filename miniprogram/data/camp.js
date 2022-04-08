const campList = [
  { id: 1001, name: '主角', fullname: '主角光环', color: 'red', img: '/images/camp/主角光环.png'},
  { id: 1002, name: '光辉', fullname: '光辉军团', color: 'green', img: '/images/camp/光辉军团.png'},
  { id: 1003, name: '帝国', fullname: '帝国之辉', color: 'yellow', img: '/images/camp/帝国之辉.png'},
  { id: 1004, name: '公主', fullname: '公主联盟', color: 'yellow', img: '/images/camp/公主联盟.png'},
  { id: 1005, name: '起源', fullname: '光之起源', color: 'yellow', img: '/images/camp/光之起源.png'},
  { id: 1006, name: '传说', fullname: '传说彼端', color: 'yellow', img: '/images/camp/传说彼端.png'},
  { id: 1007, name: '战略', fullname: '战略大师', color: 'yellow', img: '/images/camp/战略大师.png'},
  { id: 1008, name: '流星', fullname: '流星直击', color: 'yellow', img: '/images/camp/流星直击.png'},
  { id: 1009, name: '黑暗', fullname: '黑暗轮回', color: 'yellow', img: '/images/camp/黑暗轮回.png'},
  { id: 1010, name: '超凡', fullname: '超凡领域', color: 'yellow', img: '/images/camp/超凡领域.png'},
  { id: 1011, name: '转生', fullname: '梦幻转生', color: 'yellow', img: '/images/camp/梦幻转生.png'},
  { id: 1012, name: '时空', fullname: '时空枢纽', color: 'yellow', img: '/images/camp/时空枢纽.png'}
]
const campMap = {}
campList.forEach(item => {
  campMap[item.id] = item
})

export { campList, campMap };