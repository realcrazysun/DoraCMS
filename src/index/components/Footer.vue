<template>
    <footer class="footer">
        <div class="container text-left" v-once>
            <ul>
                <li>自豪的采用&nbsp;
                    <a href="https://github.com/doramart/DoraCMS" rel="nofollow" target="_blank" title="代码在这里">{{codeVersion}}
                    </a>&nbsp;Copyright (c) 2017 &nbsp;
                  </li>
                <li class="sitemap">
                    <router-link to="/sitemap.html" class="">站点地图</router-link>&nbsp;
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
let packageJson = require("../../../package.json");

import { mapGetters, mapActions } from "vuex";
export default {
  name: "Footer",
  async asyncData({ store, route }, config = {}) {
    const { params: path } = route;
    const base = {
      ...config,
      path
    };
    await store.dispatch("global/footerConfigs/getSystemConfig");
  },
  serverCacheKey: props => "footer",
  computed: {
    ...mapGetters({
      systemConfig: "global/footerConfigs/getSystemConfig"
    }),
    codeVersion() {
      return "DoraCMS " + packageJson.version;
    }
  }
};
</script>
<style lang="scss">

</style>
