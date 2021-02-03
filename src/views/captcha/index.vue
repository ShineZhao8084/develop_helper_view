<template>
  <div>
    <div id="components-form-demo-advanced-search">
      <a-form layout="inline" class="ant-advanced-search-form">
        <a-row :gutter="24">
          <a-col :span="8">
            <a-form-item label="发送者">
              <a-input v-model="source" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="接收者">
              <a-input v-model="receiver" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="NT账号">
              <a-input v-model="ntAccount" />
            </a-form-item>
          </a-col>

        </a-row>
        <a-row>
          <a-col :span="24" :style="{ textAlign: 'right' }">
            <a-button type="primary" html-type="submit" @click="fetch">搜索</a-button>
            <a-button :style="{ marginLeft: '8px' }" @click="clear">清空</a-button>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <a-table :columns="columns" :data-source="data" :pagination="pagination" :loading="loading" @change="fetch" style="margin-top: 15px" bordered>
    </a-table>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import moment from 'moment';
const columns = [
  {
    title: '发送者',
    dataIndex: 'source',
    key: 'source',
    ellipsis: true
  },
  {
    title: '接送者',
    dataIndex: 'receiver',
    key: 'receiver',
    ellipsis: true
  },
  {
    title: 'NT账号',
    dataIndex: 'ntAccount',
    key: 'ntAccount',
    ellipsis: true
  },
  {
    title: '验证码',
    dataIndex: 'captcha',
    key: 'captcha',
    ellipsis: true
  },
  {
    title: '短信内容',
    dataIndex: 'content',
    key: 'content',
    width: '40%',
    ellipsis: true
  },
  {
    title: '接收时间',
    width: '200px',
    dataIndex: 'receiveDate',
    key: 'receiveDate',
    customRender: (val) => {
      console.log(val);
      return moment(val).format('YYYY-MM-DD HH:mm:ss');
    },
    ellipsis: true
  },

];

export default {
  name: "captcha",
  data() {
    return {
      data: [],
      pagination: {
        total: 0,
        showQuickJumper: true,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "50", "100"],//每页中显示的数据
        showTotal: total => `共 ${total} 条数据`,  //分页中显示总的数据
      },
      source: "",
      receiver: "",
      ntAccount: "",
      loading: false,
      columns,
    };
  },
  mounted() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.loading = true;
      console.log(this.pagination)
      let bean = {
        "source": this.source,
        "receiver": this.receiver,
        "ntAccount": this.ntAccount
      }
      this.$axios({
        method: 'post',
        url: '/captcha',
        data: {
          "bean": bean,
          "pageNum": this.pagination.current,
          "pageSize": this.pagination.pageSize
        }
      }).then((response) => {
        let result = response.data.result;
        this.pagination.total = result.total;
        this.data = result.list;
        this.loading = false;
        //this.$router.go(-1);//返回上一层
      });
    },
    clear: function () {
      this.source = "";
      this.receiver = "";
      this.ntAccount = "";
    }
  }
}
</script>

<style>

.ant-advanced-search-form .ant-form-item {
  display: flex;
}
.ant-form-item-control-wrapper {
  flex: 1;
}
.ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
  border-right: none;
}
</style>