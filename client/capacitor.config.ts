import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.xoxo.app',
  appName: 'XOXO',
  webDir: 'out',
  server: {
    url: 'http://192.168.29.192:3000',
    cleartext: true
  }
};


export default config;
