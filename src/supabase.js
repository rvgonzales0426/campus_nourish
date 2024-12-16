import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xosoppxvvutpzwbgmzkf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhvc29wcHh2dnV0cHp3YmdtemtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MDMzODAsImV4cCI6MjA0NzQ3OTM4MH0.0zp1IgMRaC1fxMeFZoU8t07cp7Qa44xUssQZDUEv_vk';

export const supabase = createClient(supabaseUrl, supabaseKey);


