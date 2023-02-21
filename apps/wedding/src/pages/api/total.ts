import { supabase } from '@/lib/initSupabase'

import type { NextApiRequest, NextApiResponse } from 'next'

const total = async (_: NextApiRequest, res: NextApiResponse) => {
  const { error, count } = await supabase
    .from('rsvps')
    .select('first_name', { count: 'exact' })
    .not('first_name', 'eq', 'Pingdom')

  if (error) {
    return res.status(500).json({ error: error.message })
  }

  return res.status(200).json({ total: count })
}

export default total
