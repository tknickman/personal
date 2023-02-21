import axios from 'axios'
import { RSVP } from '@types'

const ZAPIER_WEBOOK_URL = process.env.ZAPIER_WEBOOK_URL as string

const sendZapierWebhook = async ({
  rsvp,
  isTest,
}: {
  rsvp: RSVP
  isTest: boolean
}) => {
  if (isTest) {
    return null
  }

  try {
    return axios.post(ZAPIER_WEBOOK_URL, rsvp)
  } catch (error) {
    console.log(error)
    return null
  }
}

export default sendZapierWebhook
