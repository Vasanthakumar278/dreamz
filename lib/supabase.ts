import { createClient, SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.warn('Supabase env vars not configured. Falling back to placeholder client.');
    }
    _supabase = createClient(url, key);
  }
  return _supabase;
}

// Convenience re-export for direct use
export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    try {
      const client = getSupabase();
      return (client as any)[prop];
    } catch (err) {
      console.error("Error accessing Supabase client:", err);
      return () => Promise.resolve({ data: null, error: err });
    }
  },
});
