// hooks/useIngredients.ts
import { useState, useEffect } from 'react'
import { supabase } from '../supabase/client'

export function useIngredients() {
  const [ingredients, setIngredients] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function fetchIngredients() {
    try {
      const { data, error } = await supabase
        .from('Ingredient')
        .select('*')
        
      if (error) throw error
      
      setIngredients(data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function addIngredient(newIngredient: string, amount:string,unit:string) {
    const amountWithUnit=amount+unit
    try {
      const { data, error } = await supabase
        .from('Ingredient')
        .insert({'ingredient':newIngredient,'amount':amountWithUnit})
        .select()

      if (error) throw error
      
      setIngredients([...ingredients, ...data])
      return data
    } catch (error:any) {
      setError(error.message)
      return null
    }
  }

  const checkIngredient = async (id: string,done:boolean) => {
    try{
      const { data, error } = await supabase
        .from('Ingredient')
        .update({ done: !done })
        .eq('id', id)
        .select()
      if (error) throw error
      setIngredients(ingredients.map((t) =>
        t.id === id ? { ...t, done: !done } : t
      ))
    }catch(error:any){
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchIngredients()
  }, [])

  return {
    ingredients,
    loading,
    error,
    addIngredient,
    checkIngredient,
    refreshIngredients: fetchIngredients,
  }
}