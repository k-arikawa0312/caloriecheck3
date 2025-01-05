import { supabase } from "@/supabase/client"
import { useEffect, useState } from "react"

export const useMenu = () => {
    const [menus, setMenus] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    async function fetchAllMenus() {
        try {
        const { data, error } = await supabase
            .from('Menu')
            .select('*')
            
        if (error) throw error
        
        setMenus(data)
        } catch (error: any) {
        setError(error.message)
        } finally {
        setLoading(false)
        }
    }
    
    async function addMenu(newMenu: string, calorie: number) {
        try {
        const { data, error } = await supabase
            .from('Menu')
            .insert({'menu':newMenu,'calorie':calorie})
            .select()
    
        if (error) throw error
        
        setMenus([...menus, ...data])
        return data
        } catch (error:any) {
        setError(error.message)
        return null
        }
    }
    
    const fetchUniqueMenu = async (ateAt: Date,timeZone:string):Promise<string> => {
        try {
        const { data, error } = await supabase
            .from('Menu')
            .select('menu')
            .eq('ateAt', ateAt)
            .eq('timeZone', timeZone)
            
        if (error) throw error
        
        return data[0]?.menu
        } catch (error: any) {
        setError(error.message)
        return ""
        }
    }
    
    useEffect(() => {
        fetchAllMenus()
    }, [])
    
    return { menus, loading, error, addMenu, fetchUniqueMenu}
    }