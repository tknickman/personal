import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RSVP } from '@types'
import { RSVPContext } from '@contexts/RSVP'
import { getCapitalWord } from '@tek/utils/server'
import ModalContent from './ModalContent'
import ModalIcon from './ModalIcon'
import ModalButtons from './ModalButtons'

export default function ConfirmModal({
  open,
  onBlur,
  onClose,
  onConfirm,
  submitState,
  rsvp,
}: {
  open: boolean
  onBlur: (open: boolean) => void
  onClose: () => void
  onConfirm: RSVPContext['onConfirm']
  submitState: RSVPContext['submitState']
  rsvp: RSVP
}) {
  const submitButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={submitButtonRef}
        onClose={onBlur}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                data-modal="confirm-modal"
                className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
              >
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center">
                    <ModalIcon submitState={submitState} />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {getCapitalWord(rsvp.firstName)}{' '}
                      {getCapitalWord(rsvp.lastName)}
                    </Dialog.Title>
                    <div className="mt-2 flex min-h-[150px] items-center justify-center">
                      <ModalContent rsvp={rsvp} submitState={submitState} />
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <ModalButtons
                    submitState={submitState}
                    onClose={onClose}
                    onConfirm={onConfirm}
                    submitButtonRef={submitButtonRef}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
