import ConfirmModal from '@/components/ConfirmModal'
import { trackGoal } from 'fathom-client'
import fathomGoals from '@/lib/fathomGoals'
import axios from 'axios'
import { log } from 'next-axiom'
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  FormEvent,
  Dispatch,
  SetStateAction,
  ChangeEvent,
  useEffect,
} from 'react'
import { v4 as uuidv4 } from 'uuid'
import type { RSVP, Dinner } from '@types'

type FormError = {
  field: 'firstName' | 'lastName' | 'email' | 'dinner' | 'restrictions'
  error: string
}

const GROUP_ID = uuidv4()

export type RSVPContext = Omit<RSVP, 'id'> & {
  rsvp?: RSVP
  onConfirm: () => void
  onSubmit: (e: FormEvent) => void
  onResetRsvp: () => void
  setIsAttending: Dispatch<SetStateAction<RSVP['isAttending']>>
  setFirstName: Dispatch<SetStateAction<RSVP['firstName']>>
  setLastName: Dispatch<SetStateAction<RSVP['lastName']>>
  setEmail: Dispatch<SetStateAction<RSVP['email']>>
  setDinner: Dispatch<SetStateAction<RSVP['dinner']>>
  setHasDietaryRestrictions: Dispatch<
    SetStateAction<RSVP['hasDietaryRestrictions']>
  >
  setRestrictions: Dispatch<SetStateAction<RSVP['restrictions']>>
  formError?: FormError
  setFormError: Dispatch<SetStateAction<FormError | undefined>>
  submitState: 'loading' | 'success' | 'error' | 'unsubmitted'
}

const RSVPContext = createContext<RSVPContext>({} as RSVPContext)

function RSVPs({ children }: { children: ReactNode }) {
  // modal states
  const [isConfirmOpen, setConfirmOpen] = useState(false)

  // form fields
  const [isAttending, setIsAttending] = useState<RSVP['isAttending']>(true)
  const [firstName, setFirstName] = useState<RSVP['firstName']>('')
  const [lastName, setLastName] = useState<RSVP['lastName']>('')
  const [email, setEmail] = useState<RSVP['email']>('')
  const [dinner, setDinner] = useState<RSVP['dinner']>()
  const [hasDietaryRestrictions, setHasDietaryRestrictions] =
    useState<RSVP['hasDietaryRestrictions']>(false)
  const [restrictions, setRestrictions] = useState<RSVP['restrictions']>('')

  // form states
  const [formError, setFormError] = useState<FormError>()

  // submission states
  const [submitState, setSubmitState] = useState<
    'loading' | 'success' | 'error' | 'unsubmitted'
  >('unsubmitted')

  const onResetRsvp = () => {
    setIsAttending(true)
    setFirstName('')
    setLastName('')
    setEmail('')
    setDinner(undefined)
    setHasDietaryRestrictions(false)
    setRestrictions('')
  }

  const onBlurConfirmModal = () => {
    if (submitState === 'unsubmitted') {
      setConfirmOpen(false)
    } else if (submitState === 'success') {
      onResetRsvp()
      setConfirmOpen(false)
    } else if (submitState === 'error') {
      setConfirmOpen(false)
    }
  }

  const onConfirm = async () => {
    setSubmitState('loading')
    trackGoal(fathomGoals.RSVPSubmit, 0)
    const rsvp = {
      isAttending,
      firstName,
      lastName,
      email,
      dinner: dinner?.id,
      hasDietaryRestrictions,
      restrictions,
      groupId: GROUP_ID,
    }

    log.debug('pending rsvp', rsvp)
    try {
      await axios.post('/api/rsvp', rsvp)
      setSubmitState('success')
      log.info('rsvp success', rsvp)
    } catch (e) {
      log.error('rsvp failed', rsvp)
      setSubmitState('error')
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    trackGoal(fathomGoals.RSVPConfirm, 0)
    if (isAttending) {
      if (!firstName) {
        setFormError({ field: 'firstName', error: 'First name is required' })
      } else if (!lastName) {
        setFormError({ field: 'lastName', error: 'Last name is required' })
      } else if (!dinner) {
        setFormError({
          field: 'dinner',
          error: 'A dinner selection is required',
        })
      } else if (hasDietaryRestrictions && !restrictions) {
        setFormError({
          field: 'restrictions',
          error: 'Dietary restriction details are required',
        })
      } else {
        setConfirmOpen(true)
      }
    } else {
      if (!firstName) {
        setFormError({ field: 'firstName', error: 'First name is required' })
      } else if (!lastName) {
        setFormError({ field: 'lastName', error: 'Last name is required' })
      } else {
        setConfirmOpen(true)
      }
    }
  }

  const handleConfirmModalClose = () => {
    trackGoal(fathomGoals.RSVPGoBack, 0)
    if (submitState === 'success') {
      onResetRsvp()
    }
    setConfirmOpen(false)
  }

  useEffect(() => {
    if (!isConfirmOpen && submitState !== 'unsubmitted') {
      setTimeout(() => {
        setSubmitState('unsubmitted')
      }, 300)
    }
  }, [submitState, isConfirmOpen])

  useEffect(() => {
    if (!isAttending) {
      setEmail('')
      setDinner(undefined)
      setHasDietaryRestrictions(false)
      setRestrictions(' ')
    }
    setFormError(undefined)
  }, [isAttending])

  return (
    <RSVPContext.Provider
      value={{
        onConfirm,
        onSubmit,
        onResetRsvp,
        isAttending,
        setIsAttending,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        dinner,
        setDinner,
        hasDietaryRestrictions,
        setHasDietaryRestrictions,
        restrictions,
        setRestrictions,
        formError,
        setFormError,
        submitState,
      }}
    >
      {children}
      <ConfirmModal
        open={isConfirmOpen}
        onConfirm={onConfirm}
        onClose={handleConfirmModalClose}
        onBlur={onBlurConfirmModal}
        submitState={submitState}
        rsvp={{
          isAttending,
          firstName,
          lastName,
          email,
          dinner,
          hasDietaryRestrictions,
          restrictions,
        }}
      />
    </RSVPContext.Provider>
  )
}

const useRSVPForm = () => {
  const { rsvp, onSubmit, formError } = useContext(RSVPContext)

  return {
    rsvp,
    onSubmit,
    formError,
  }
}

const useAttending = (): [RSVPContext['isAttending'], () => void] => {
  const { isAttending, setIsAttending } = useContext(RSVPContext)
  const onSetAttending = () => {
    setIsAttending((prev) => {
      const attending = !prev
      trackGoal(
        attending ? fathomGoals.RSVPConfirm : fathomGoals.RSVPDecline,
        0
      )
      return attending
    })
  }
  return [isAttending, onSetAttending]
}

const useFirstName = (): [
  RSVPContext['firstName'],
  (e: ChangeEvent<HTMLInputElement>) => void,
  FormError | undefined
] => {
  const { firstName, setFirstName, formError, setFormError } =
    useContext(RSVPContext)
  const onSetFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
    if (e.target.value !== '') {
      setFormError(undefined)
    }
  }
  return [
    firstName,
    onSetFirstName,
    formError?.field === 'firstName' ? formError : undefined,
  ]
}

const useLastName = (): [
  RSVPContext['lastName'],
  (e: ChangeEvent<HTMLInputElement>) => void,
  FormError | undefined
] => {
  const { lastName, setLastName, formError, setFormError } =
    useContext(RSVPContext)
  const onSetLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
    if (e.target.value !== '') {
      setFormError(undefined)
    }
  }
  return [
    lastName,
    onSetLastName,
    formError?.field === 'lastName' ? formError : undefined,
  ]
}

const useEmail = (): [
  RSVPContext['email'],
  (e: ChangeEvent<HTMLInputElement>) => void
] => {
  const { email, setEmail } = useContext(RSVPContext)
  const onSetEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  return [email, onSetEmail]
}

const useDinner = (): [
  RSVPContext['dinner'],
  (selection: Dinner) => void,
  FormError | undefined
] => {
  const { dinner, setDinner, formError, setFormError } = useContext(RSVPContext)

  const onSelectDinner = (selection: Dinner) => {
    setDinner(selection)
    if (dinner?.id === 'steak') {
      trackGoal(fathomGoals.RSVPSteak, 0)
    }
    if (dinner?.id === 'chicken') {
      trackGoal(fathomGoals.RSVPChicken, 0)
    }
    if (dinner?.id === 'vegetarian') {
      trackGoal(fathomGoals.RSVPVeg, 0)
    }

    setFormError(undefined)
  }

  return [
    dinner,
    onSelectDinner,
    formError?.field === 'dinner' ? formError : undefined,
  ]
}

const useDietaryRestriction = (): [
  RSVPContext['hasDietaryRestrictions'],
  () => void
] => {
  const { hasDietaryRestrictions, setHasDietaryRestrictions, setFormError } =
    useContext(RSVPContext)

  const onSetDietaryRestriction = () => {
    setHasDietaryRestrictions((prevVal) => {
      const hasRestrictions = !prevVal
      trackGoal(
        hasRestrictions
          ? fathomGoals.RSVPHasRestrictions
          : fathomGoals.RSVPNoRestrictions,
        0
      )
      return hasRestrictions
    })
    setFormError(undefined)
  }
  return [hasDietaryRestrictions, onSetDietaryRestriction]
}

const useRestrictions = (): [
  RSVPContext['restrictions'],
  (e: ChangeEvent<HTMLTextAreaElement>) => void,
  FormError | undefined
] => {
  const { restrictions, setRestrictions, formError, setFormError } =
    useContext(RSVPContext)

  const onSetRestriction = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setRestrictions(e.target.value)
    setFormError(undefined)
  }

  return [
    restrictions,
    onSetRestriction,
    formError?.field === 'restrictions' ? formError : undefined,
  ]
}

export {
  RSVPContext,
  useRSVPForm,
  // form fields
  useAttending,
  useFirstName,
  useLastName,
  useEmail,
  useDinner,
  useDietaryRestriction,
  useRestrictions,
}

export default RSVPs
