// index.js
// const app = getApp()
const { envList } = require('../../envList.js');
import { campList } from '../../data/camp';
import { careerList } from '../../data/career';
import { heroTypeList } from '../../data/heroType';
import { heroOriginList } from '../../data/hero';


Page({
  data: {
    campList,
    careerList,
    heroTypeList,
    heroList: [],
    bothOrAndList: [{code: 0, label: '满足其一'}, {code: 1, label: '同时满足'}]
  },
  onLoad () {
    this.setData({
      heroList: JSON.parse(JSON.stringify(heroOriginList))
    })
  },
  handleChangeCamp (e) {
    const selectedCamps = e.detail.value.map(item => Number(item))
    this.updateVisible('campVisible', item => item.camp.some(tmp => selectedCamps.includes(tmp)))
  },
  updateVisible (type, func) {
    this.data.heroList.forEach((item, index) => {
      item[type] = func(item)
      // const oldVisible = item[type]
      // const newVisible = func(item)
      // if (oldVisible !== newVisible) {
      //   this.setData({
      //     [`heroList[${index}].${type}`]: newVisible
      //   })
      // }
    })
    this.setData({
      heroList: this.data.heroList
    })
  }
});
