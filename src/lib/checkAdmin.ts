import { supabase } from './supabaseClient';

export async function checkIsAdmin(userId: string) {
    if (!userId) return false;

    try {
        const { data, error } = await supabase
            .from('admins')
            .select('id')
            .eq('id', userId)
            .single();

        if (error) {
            if (error.code !== 'PGRST116') {
                // Only log real errors, ignore "Row not found" (PGRST116)
                console.error("Error checking admin status:", error.message || error);
            }
            return false;
        }

        return !!data;
    } catch (e) {
        console.error("Exception checking admin status:", e);
        return false;
    }
}
