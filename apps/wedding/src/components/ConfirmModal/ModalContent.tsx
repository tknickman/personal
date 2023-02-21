import Cow from '@components/icons/Cow'
import Carrot from '@components/icons/Carrot'
import Chicken from '@components/icons/Chicken'
import { RSVP, DinnerChoice } from '@types'
import { RSVPContext } from '@contexts/RSVP'
import { getCapitalWord } from '@tek/utils'

const FoodChoice = ({
  choice,
  className,
}: {
  className?: string
  choice?: DinnerChoice
}) => {
  if (choice === 'steak') {
    return <Cow className={className} />
  }

  if (choice === 'vegetarian') {
    return <Carrot className={className} />
  }

  if (choice === 'chicken') {
    return <Chicken className={className} />
  }

  return null
}

const Subtitle = ({ rsvp }: { rsvp: RSVP }) => {
  let text = 'You will be missed'
  if (rsvp.isAttending) {
    if (rsvp.hasDietaryRestrictions && rsvp.restrictions) {
      text = rsvp.restrictions
    } else {
      text = 'No dietary restrictions'
    }
  }

  return <span>{text}</span>
}

const ModalContent = ({
  rsvp,
  submitState,
}: {
  rsvp: RSVP
  submitState: RSVPContext['submitState']
}) => {
  if (submitState === 'success') {
    if (rsvp.isAttending) {
      return (
        <div>
          <p className="text-sm text-gray-500">Your RSVP is confirmed!</p>
          <p className="text-sm text-gray-500">
            We look forward to seeing you on September 30th, at 5PM.
          </p>
        </div>
      )
    } else {
      return (
        <div>
          <p className="text-sm text-gray-500">
            Thank you for letting us know!
          </p>
          <p className="text-sm text-gray-500">
            You will be missed, if your schedule should change - please reach
            out by September 9th.
          </p>
        </div>
      )
    }
  }
  if (submitState === 'error') {
    return (
      <div>
        <p className="text-sm text-gray-500">Something went wrong!</p>
        <p className="text-sm text-gray-500">
          We couldn&apos;t submit your RSVP successfully. Please try again, or
          contact the family of the Bride or Groom to confirm your attendance.
        </p>
      </div>
    )
  }
  return (
    <div className="block">
      <p className="text-sm text-gray-500">
        Please ensure all details are correct before submitting. If you need to
        RSVP for any additional members of your party, fill out this form again
        after submission.
      </p>
      <ul role="list" className="divide-y divide-gray-200">
        <li key={rsvp.email} className="flex flex-grow py-4">
          <FoodChoice choice={rsvp.dinner?.id} className="self-center" />
          <div className="ml-3 flex-1 overflow-hidden text-left">
            <p className="text-left font-normal text-gray-900">
              <span>{getCapitalWord(rsvp.firstName)}</span>
              <span className="font-bold">
                {rsvp.isAttending ? ' is ' : ' is not '}
              </span>
              <span>attending</span>
            </p>
            <p className="text-sm text-gray-500">{rsvp.email}</p>
            <p className="truncate text-sm text-gray-500">
              <Subtitle rsvp={rsvp} />
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ModalContent
