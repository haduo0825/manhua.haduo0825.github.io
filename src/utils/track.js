import FingerprintJS from '@fingerprintjs/fingerprintjs';
const fpPromise = FingerprintJS.load();

// 打点上报函数
async function track(key, extraData = {}) {
    try {
      const fp = await fpPromise;
      const result = await fp.get();
      
      // 设备指纹ID
      const deviceId = result.visitorId;

      const data = {
        key,
        data: {
          ip: await getIp(), // 获取IP地址
          ua: navigator.userAgent, // 获取用户UA
          time: new Date().toISOString(), // 获取当前时间
          deviceId: deviceId, // 使用设备指纹ID
          ...extraData
        }
      };

  
      await fetch('https://explain-improved-mary-derby.trycloudflare.com/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    } catch (error) {
      console.error('Track error:', error);
    }
  }
  
  // 获取用户IP地址
  async function getIp() {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Get IP error:', error);
      return 'unknown';
    }
  }
  
  // 导出打点函数
  export const trackExposure = () => track('exposure');
  export const trackClose = () => track('exposure'); // 使用相同的key