import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDinner } from '@contexts/RSVP'
import { DINNER } from '@content/dinner'
import clsx from 'clsx'

export default function FoodDetail({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [dinner] = useDinner()
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-primary bg-opacity-75 transition-opacity" />
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-md sm:p-6">
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-primary"
                  >
                    Dinner Selections
                  </Dialog.Title>
                  <div className="mt-2 text-center sm:text-left">
                    <ul role="list" className="divide-y divide-gray-200">
                      {DINNER.map((choice) => (
                        <li
                          key={choice.id}
                          className="relative bg-white py-5 px-4"
                        >
                          <div className="flex justify-between space-x-3">
                            <div className="min-w-0 flex-1">
                              <span
                                className="absolute inset-0"
                                aria-hidden="true"
                              />
                              <p
                                className={clsx(
                                  'truncate text-sm font-medium ',
                                  {
                                    'text-primary': dinner?.id !== choice.id,
                                    'text-gold': dinner?.id === choice.id,
                                  }
                                )}
                              >
                                {choice.name}
                              </p>
                            </div>
                            <div className="flex-shrink-0 whitespace-nowrap text-sm text-primary">
                              {
                                <choice.Icon
                                  selected={dinner?.id === choice.id}
                                />
                              }
                            </div>
                          </div>
                          <div className="mt-1">
                            <p className="line-clamp-2 text-sm text-gray-500">
                              {choice.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:text-sm"
                    onClick={onClose}
                  >
                    Back
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
