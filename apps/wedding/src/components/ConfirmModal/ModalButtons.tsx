import { MutableRefObject } from 'react'
import { RSVPContext } from '@contexts/RSVP'
import clsx from 'clsx'

const ModalButtons = ({
  submitState,
  onClose,
  onConfirm,
  submitButtonRef,
}: {
  submitState: RSVPContext['submitState']
  onConfirm: RSVPContext['onConfirm']
  onClose: () => void
  submitButtonRef: MutableRefObject<null>
}) => {
  if (submitState === 'success') {
    return (
      <button
        ref={submitButtonRef}
        type="button"
        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:col-span-2 sm:mt-0 sm:text-sm"
        onClick={onClose}
      >
        Done
      </button>
    )
  }
  if (submitState === 'error') {
    return (
      <button
        ref={submitButtonRef}
        type="button"
        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:col-span-2 sm:mt-0 sm:text-sm"
        onClick={onClose}
      >
        Try Again
      </button>
    )
  }
  return (
    <>
      <button
        type="button"
        disabled={submitState === 'loading'}
        className={clsx(
          'inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:col-start-2 sm:text-sm',
          {
            'cursor-not-allowed opacity-75': submitState === 'loading',
            'hover:opacity-75': submitState !== 'loading',
          }
        )}
        onClick={onConfirm}
        ref={submitButtonRef}
      >
        {submitState === 'loading' ? 'Saving...' : 'Submit RSVP'}
      </button>
      <button
        type="button"
        disabled={submitState === 'loading'}
        className={clsx(
          'mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm',
          {
            'cursor-not-allowed opacity-75': submitState === 'loading',
            'hover:bg-gray-50': submitState !== 'loading',
          }
        )}
        onClick={onClose}
      >
        Go Back
      </button>
    </>
  )
}

export default ModalButtons
