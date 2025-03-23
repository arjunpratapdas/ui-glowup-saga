
import { createClient } from '@supabase/supabase-js';

// Supabase credentials - these are public keys
const supabaseUrl = 'https://rzeevbprnlfitqbzuvco.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6ZWV2YnBybmxmaXRxYnp1dmNvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MDYyNTUsImV4cCI6MjA1ODI4MjI1NX0.bjVOcr5_fgt2-3DXLDUXpHqF-20bqmunB9DeLM3aOC8';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
