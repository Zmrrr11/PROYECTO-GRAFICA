import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bazshfqynhlbwohminxu.supabase.co';
const supabaseAnonKey = 'sb_publishable_UyMfBGQ5FNbgCwue1Ne-xA_bW9xwG26';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);