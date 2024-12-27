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
        .from('ingredients')
        .select('*')
        
      if (error) throw error
      
      setIngredients(data)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

//   async function addIngredient(newIngredient) {
//     try {
//       const { data, error } = await supabase
//         .from('ingredients')
//         .insert([newIngredient])
//         .select()

//       if (error) throw error
      
//       setIngredients([...ingredients, ...data])
//       return data
//     } catch (error) {
//       setError(error.message)
//       return null
//     }
//   }

  useEffect(() => {
    fetchIngredients()
  }, [])

  return {
    ingredients,
    loading,
    error,
    // addIngredient,
    refreshIngredients: fetchIngredients
  }
}