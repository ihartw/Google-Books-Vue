<template>
    <div>
        <!-- @detected-condition fires when the connectivity status of the device changes -->
        <offline @detected-condition="handleConnectivityChange">
            <!-- Only renders when the device is online -->
            <div slot="online"></div>
            <!-- Only renders when the device is offline -->
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
                if(status === false) {
                    M.toast({ html: "Lost Connection: looks like you're offline", displayLength: 4000 });
                };
            }
        }
    }
</script>