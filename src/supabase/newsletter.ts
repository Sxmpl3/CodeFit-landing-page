import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function addEmail(email: string, setError?: (msg: string) => void) {
    try {
        if (!email || !email.includes('@')) {
            setError?.('Introduce un correo válido.');
            return null;
        }

        const { data, error } = await supabase
            .from('subscribers')
            .insert([{ email }]);

        if (error) {
            console.error('Error Supabase:', error);
            setError?.('Hubo un error al registrar tu correo.');
            return null;
        }

        setError?.('');
        return data;
    } catch (generalError) {
        console.error('General error adding email:', generalError);
        setError?.('Ocurrió un error inesperado. Inténtalo de nuevo.');
        return null;
    }
}
