<template>
  <div>
    <offline @detected-condition="handleConnectivityChange">
      <div slot="online"></div>
      <div slot="offline"></div>
    </offline>
  </div>
</template>

<script>
  import Offline from 'v-offline';

  export default {
    name: 'Connectivity',
    components: {
      Offline
    },
    methods: {
      handleConnectivityChange(status) {
        if (status === false) {
          M.toast({
            html: "Lost Connection: looks like you're offline",
            displayLength: 4000
          });
        };
      }
    }
  }
</script>
