// index.js
// const app = getApp()
const { envList } = require('../../envList.js');
import { campList, campMap} from '../../data/camp';
import { careerList, careerMap } from '../../data/career';
import { heroTypeList } from '../../data/heroType';
import { heroOriginList } from '../../data/hero';


Page({
  data: {
    campList,
    campMap,
    careerList,
    careerMap,
    heroTypeList,
    heroList: [],
    selectedCampType: 1,
    selectedCamps: [],
    selectedCareerType: 1,
    selectedCareers: [],
    bothOrAndList: [{code: 0, label: '满足其一'}, {code: 1, label: '同时满足'}],
    open: {
      camp: true,
      career: true,
    }
  },
  onLoad () {
    this.setData({
      heroList: JSON.parse(JSON.stringify(heroOriginList))
    })
  },
  handleChangeCampType (e) {
    this.setData({
      selectedCampType: Number(e.detail.value)
    })
    this.handleFilterCamp()
  },
  handleChangeCamp (e) {
    this.setData({
      selectedCamps: e.detail.value.map(item => Number(item))
    })
    this.handleFilterCamp()
  },
  handleFilterCamp () {
    if (this.data.selectedCampType) {
      this.updateVisible('campVisible', item => this.data.selectedCamps.length ? this.data.selectedCamps.every(tmp => item.camp.includes(tmp)) : true)
    } else {
      this.updateVisible('campVisible', item => this.data.selectedCamps.length ? this.data.selectedCamps.some(tmp => item.camp.includes(tmp)) : true)
    }
  },
  handleChangeCareerType (e) {
    this.setData({
      selectedCareerType: Number(e.detail.value)
    })
    this.handleFilterCareer()
  },
  handleChangeCareer (e) {
    this.setData({
      selectedCareers: e.detail.value.map(item => Number(item))
    })
    this.handleFilterCareer()
  },
  handleFilterCareer () {
    if (this.data.selectedCareerType) {
      this.updateVisible('careerVisible', item => this.data.selectedCareers.length ? this.data.selectedCareers.every(tmp => item.career.includes(tmp)) : true)
    } else {
      this.updateVisible('careerVisible', item => this.data.selectedCareers.length ? this.data.selectedCareers.some(tmp => item.career.includes(tmp)) : true)
    }
  },
  updateVisible (type, func) {
    this.data.heroList.forEach((item, index) => {
      item[type] = func(item)
    })
    this.setData({
      heroList: this.data.heroList
    })
    // const oldVisible = item[type] 
    // const newVisible = func(item) 
    // if (oldVisible !== newVisible) { 
    //   this.setData({ 
    //     [`heroList[${index}].${type}`]: newVisible 
    //   }) 
    // } 
  },
  handleTapHero (event) {
    const index = event.currentTarget.dataset.index
    const hero = event.currentTarget.dataset.hero
    this.setData({ 
      [`heroList[${index}].selected`]: !hero.selected
    })
  },
  toggle (event) {
    const type = event.currentTarget.dataset.type
    this.setData({
      [`open.${type}`]: !this.data.open[type]
    })
  }
});
