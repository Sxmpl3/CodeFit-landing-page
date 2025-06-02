import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function addEmail(email: string, setError?: (msg: string) => void) {
    try {
        let hash = generateUnsubscribeToken()

        if (!email || !email.includes('@')) {
            setError?.('Introduce un correo válido.');
            return null;
        }

        // Verificar si el email ya existe
        const exists = await emailExists(email);
        if (exists) {
            setError?.('Este correo ya está registrado.');
            return null;
        }

        const { data, error } = await supabase
        .from('subscribers')
        .insert([
          { email: email, hash_baja: hash }
        ])
        .select();

        if (error) {
            console.error('Error Supabase:', error);
            setError?.('Hubo un error al registrar tu correo.');
            return null;
        }

        setError?.('');
        return hash;
    } catch (generalError) {
        console.error('General error adding email:', generalError);
        setError?.('Ocurrió un error inesperado. Inténtalo de nuevo.');
        return null;
    }
}

export async function emailExists(email: string): Promise<boolean> {
    const cleanEmail = email.trim().toLowerCase(); // Normaliza el email
    
    const { data, error } = await supabase
      .from('subscribers')
      .select('email')
      .eq('email', cleanEmail)
      .limit(1);
  
    if (error) {
      console.error('Error checking email existence:', error);
      return false;
    }
  
    return (data?.length || 0) > 0;
}

export async function deleteSubscription(hash: string): Promise<boolean> {
    const { data, error } = await supabase
      .from('subscribers')
      .delete()
      .eq('hash_baja', hash);
  
    if (error) {
      console.error('Error deleting subscription:', error);
      return false;
    }
  
    return Boolean(data);
}
  
function generateUnsubscribeToken(length = 24): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
  
