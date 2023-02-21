import { sendEmailConfirmation, sendInternalConfirmation } from '@/lib/email'
import sendZapierWebhook from '@/lib/zapier'
import { RSVP } from '@types'
import { supabase } from '@/lib/initSupabase'

import type { NextApiRequest, NextApiResponse } from 'next'

const handleRsvp = async (rsvp: RSVP) => {
  const isTest = rsvp.firstName === 'Pingdom' && rsvp.lastName === 'Check'

  // save the rsvp in the database first
  console.log('writing rsvp to supabase')
  const { error } = await supabase.from('rsvps').insert([
    {
      is_attending: rsvp.isAttending,
      email: rsvp.email,
      first_name: rsvp.firstName,
      last_name: rsvp.lastName,
      dinner: rsvp.dinner,
      restrictions: rsvp.restrictions,
      has_dietary_restriction: rsvp.hasDietaryRestrictions,
      // optional ID passed in to link rsvp submissions together
      group_id: rsvp.groupId,
    },
  ])
  if (error) {
    throw error
  } else {
    console.log('rsvp written to database', JSON.stringify(rsvp))
  }

  // send confirmation email
  console.log('sending confirmation email')
  await sendEmailConfirmation({
    rsvp,
  })

  // send the zapier webhook
  console.log('sending zapier webhook & internal email')
  try {
    await Promise.all([
      sendZapierWebhook({ rsvp, isTest }),
      sendInternalConfirmation({ rsvp, isTest }),
    ])
  } catch (err) {
    console.log('redundant tracking method failed')
  }
}

const rsvp = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' })
    }

    const { body: rsvp = {} } = req
    const {
      firstName,
      lastName,
      dinner,
      isAttending,
      hasDietaryRestrictions,
      restrictions,
    } = rsvp

    console.log('Received rsvp submission:', rsvp)

    // validate form fields
    if (isAttending) {
      if (!firstName) {
        return res.status(400).json({ error: 'First name is required' })
      } else if (!lastName) {
        return res.status(400).json({ error: 'Last name is required' })
      } else if (!dinner) {
        return res.status(400).json({ error: 'A dinner selection is required' })
      } else if (hasDietaryRestrictions && !restrictions) {
        return res
          .status(400)
          .json({ error: 'Dietary restriction details are required' })
      } else {
        await handleRsvp(rsvp)
      }
    } else {
      if (!firstName) {
        return res.status(400).json({ error: 'First name is required' })
      } else if (!lastName) {
        return res.status(400).json({ error: 'Last name is required' })
      } else {
        await handleRsvp(rsvp)
      }
    }

    res.status(200).json({ status: 'rsvp received' })
  } catch (err) {
    console.error(err)
    res.status(500).json({ status: 'unknown error', error: err })
  }
}

export default rsvp
