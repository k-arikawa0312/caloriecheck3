import Constants from 'expo-constants';

// config.ts として設定ファイルを作成
const Config = {
  API_URL: Constants.expoConfig?.extra?.apiUrl
};

export default Config;
