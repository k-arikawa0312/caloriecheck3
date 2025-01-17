import 'dotenv/config';
import { withEnv } from 'expo-env';

export default {
  expo: {
    name: 'your-app-name',
    slug: 'your-app-slug',
    version: '1.0.0',
    // その他の設定
    extra: {
      supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.EXPO_PUBLIC_SUPABASE_KEY,
      eas: {
        projectId: "feb25cbf-6664-43d1-95b0-23b498d365bb"
      }
    },
  },
};