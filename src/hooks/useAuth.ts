import { useState } from 'react';
import { supabase } from '../api/supabaseClient';
import { UserProfile } from '../models/User';

export const useAuth = () => { // <--- Mantén este export
  const [loading, setLoading] = useState(false);

  const login = async (email: string, pass: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('usuarios')
        .select('*, estudiantes (grado_id, paralelo)')
        .eq('email', email)
        .eq('password', pass)
        .single();

      if (error || !data) throw new Error('Credenciales incorrectas');

      return { user: data as UserProfile, error: null };
    } catch (err: any) {
      return { user: null, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useAuth; 