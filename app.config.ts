// app.config.js
import 'dotenv/config';

export default {
  expo: {
    // その他の設定
    extra: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
       apiUrl: process.env.API_URL ?? 'http://localhost:8081/api'
    },
  },
};