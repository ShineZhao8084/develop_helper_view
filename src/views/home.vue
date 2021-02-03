<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider v-model="collapsed" width="300px" :style="{ overflowX: 'hidden', height: '100vh', position: 'fixed', left: 0, background: '#ffffff', zIndex: 1000000 }">
      <div class="logo" />
      <a-menu theme="light" mode="inline" :default-selected-keys="['4']">

        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="appstore" /><span>项目工作台</span></span>
          <a-menu-item key="sub1-item1">
            <a-icon type="user" />
            <span class="nav-text">项目备忘录</span>
          </a-menu-item>
          <a-menu-item key="sub1-item2">
            <a-icon type="user" />
            <span class="nav-text">数据库信息</span>
          </a-menu-item>
          <a-menu-item key="sub1-item4">
            <a-icon type="user" />
            <span class="nav-text">项目文档</span>
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="appstore" /><span>周报</span></span>
          <a-menu-item key="sub2-item1">
            <a-icon type="user" />
            <span class="nav-text">周报填写</span>
          </a-menu-item>
          <a-menu-item key="sub2-item2">
            <a-icon type="user" />
            <span class="nav-text">周报周期维护</span>
          </a-menu-item>
          <a-menu-item key="sub2-item3">
            <a-icon type="user" />
            <span class="nav-text">周报查询统计</span>
          </a-menu-item>

        </a-sub-menu>
        <a-menu-item key="item3">
          <a-icon type="video-camera" />
          <span class="nav-text">验证码</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: collapsed ? '80px' : '300px', transition: '0.2s'}">
      <a-layout-header class="layout-header" :style="{ background: '#fff', padding: 0, width: '100%', overflow: 'auto', position: 'fixed', zIndex: '999999'}">
        <a-icon
            class="collapse_trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
        />
        <a-select style="width: 220px">
          <a-select-option value="male">
            中国移动发票服务平台项目
          </a-select-option>
          <a-select-option value="female">
            票据中心项目
          </a-select-option>
        </a-select>
      </a-layout-header>
      <a-layout-content :style="{ margin: '80px 16px 0', overflow: 'initial' }">
        <div :style="{ padding: '24px', background: '#fff'}">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer :style="{ textAlign: 'center' }">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>

<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(0, 0, 0, 0.7);
  margin: 16px;
}

.layout-header {
  box-shadow: 0 3px 16px #e8e8e8;
}

.collapse_trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.collapse_trigger:hover {
  color: #1890ff;
}

</style>