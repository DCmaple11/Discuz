/*
* 内容分类控制器
* */

import Card from '../../../view/site/common/card/card';


export default {
  data:function () {
    return {
      tableData: [{
        theme:'主题内容主题内容主题内容主题内容主题内容主题内容主题内容主题内容',
        author: '站长',
        prply: '1',
        browse:'12',
        finalPost:'2018-11-11'
      }, {
        theme:'主题内容主题内容主题内容主题内容主题内容主题内容主题内容主题内容',
        className: '攻城狮',
        prply: '2',
        browse:'12',
        finalPost:'2019-11-11'
      }, {
        theme:'主题内容主题内容主题内容主题内容主题内容主题内容主题内容主题内容',
        className: '版主',
        prply: '3',
        browse:'12',
        finalPost:'2020-11-11'
      }],

      deleteStatus:true,
      multipleSelection:[],

      operatingList:[
        {
          name:'批量移动到分类',
          option:''
        },
        {
          name:'批量置顶',
          option:''
        },
        {
          name:'批量删除',
          option:''
        },
        {
          name:'批量设置精华',
          option:''
        }
      ],  //操作列表

      radio:[],  //操作单选选择

      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }],   //选择圈子列表

      value: '',  //选择圈子选中

      toppingRadio:1,  //是否置顶

      essenceRadio:2   //是否精华

    }
  },

  methods:{
    handleSelectionChange(val) {
      this.multipleSelection = val;

      if (this.multipleSelection.length >= 1){
        this.deleteStatus = false
      } else {
        this.deleteStatus = true
      }

    },

  },
  components:{
    Card
  }

}