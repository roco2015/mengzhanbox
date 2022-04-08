const careerList = [
  { id: 2001, name: '步', fullname: '步兵', color: 'red', img: '/images/career/步.png'},
  { id: 2002, name: '枪', fullname: '枪兵', color: 'green', img: '/images/career/枪.png'},
  { id: 2003, name: '骑', fullname: '骑兵', color: 'blue', img: '/images/career/骑.png'},
  { id: 2004, name: '飞', fullname: '飞兵', color: 'yellow', img: '/images/career/飞.png'},
  { id: 2005, name: '水', fullname: '水兵', color: 'gray', img: '/images/career/水.png'},
  { id: 2006, name: '弓', fullname: '弓兵', color: 'purple', img: '/images/career/弓.png'},
  { id: 2007, name: '刺', fullname: '刺客', color: 'gray', img: '/images/career/刺.png'},
  { id: 2008, name: '僧', fullname: '僧侣', color: 'gray', img: '/images/career/僧.png'},
  { id: 2009, name: '法', fullname: '法师', color: 'gray', img: '/images/career/法.png'},
  { id: 2010, name: '魔', fullname: '魔物', color: 'gray', img: '/images/career/魔.png'},
  { id: 2011, name: '龙', fullname: '龙', color: 'gray', img: '/images/career/龙.png'},
]
const careerMap = {}
careerList.forEach(item => {
  careerMap[item.id] = item
})

export { careerList, careerMap };
