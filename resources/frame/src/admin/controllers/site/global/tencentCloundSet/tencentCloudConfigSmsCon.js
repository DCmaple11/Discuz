import Card from '../../../../view/site/common/card/card';
import CardRow from '../../../../view/site/common/card/cardRow';

export default {
  data:function () {
    return {
      sdkAppId:'',
      appKey:'',
      smsId:'',
      smsSignature:'',//短信签名

    }
  },
  created(){
    var type = this.$route.query.type;
    this.type = type;
    this.tencentCloudSms()
  },
  methods:{
    configClick(type){

    },
    tencentCloudSms(){
      this.appFetch({
        url:'forum',
        method:'get',
        data:{}
      }).then(res=>{
        console.log(res)
        this.sdkAppId = res.readdata._data.qcloud.qcloud_sms_app_id;
        this.appKey = res.readdata._data.qcloud.qcloud_sms_app_key;
        this.smsId = res.readdata._data.qcloud.qcloud_sms_template_id;
        this.smsSignature = res.readdata._data.qcloud.qcloud_sms_sign;
      })
    },
    Submission(){
      this.appFetch({
        url:'settings',
        method:'post',
        data:{
          'qcloud_sms_app_id':this.sdkAppId,
          'qcloud_sms_app_key':this.appKey,
          'qcloud_sms_template_id':this.smsId,
          'qcloud_sms_sign':this.smsSignature
        }
      }).then(res=>{
        this.$message('提交成功');
      })
    }

  },
  components:{
    Card,
    CardRow
  }
}
