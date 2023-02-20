import { RSVP } from '@/types'
import sendGrid, { MailDataRequired } from '@sendgrid/mail'

sendGrid.setApiKey(process.env.EMAIL_SENDGRID_API_KEY as string)

const FROM_ADDRESS = process.env.EMAIL_FROM_ADDRESS as string
const TEMPLATE_ID = process.env.EMAIL_TEMPLATE_ID as string
const INTERNAL_ADDRESS = process.env.EMAIL_INTERNAL_ADDRESS as string

const sendInternalConfirmation = async ({
  rsvp,
  isTest,
}: {
  rsvp: RSVP
  isTest: boolean
}) => {
  if (isTest) {
    return null
  }

  const msg: MailDataRequired = {
    to: INTERNAL_ADDRESS,
    from: FROM_ADDRESS,
    subject: 'New Wedding RSVP',
    text: JSON.stringify(rsvp, null, 2),
  }

  try {
    const result = await sendGrid.send(msg)
    console.log('internal email:sent', result)
  } catch (error) {
    console.log('internal email:error', error)
  }
}

const sendEmailConfirmation = async ({ rsvp }: { rsvp: RSVP }) => {
  if (rsvp.email) {
    const msg: MailDataRequired = {
      templateId: TEMPLATE_ID,
      to: rsvp.email,
      from: FROM_ADDRESS,
      dynamicTemplateData: { rsvp },
    }

    try {
      const result = await sendGrid.send(msg)
      console.log('email:sent', result)
    } catch (error) {
      console.log('email:error', error)
    }
  } else {
    console.log(
      'No email provided for rsvp, skipping confirmation',
      JSON.stringify(rsvp)
    )
  }
}

export { sendEmailConfirmation, sendInternalConfirmation }
