import { useState } from 'react'
import Image from 'next/image'
import Engage from '../images/engage1.jpg'
import Heading from '@components/Heading'
import Section from '@components/Section'

import { RadioGroup } from '@headlessui/react'
import { DINNER } from '@content/dinner'

import clsx from 'clsx'
import {
  useRSVPForm,
  useFirstName,
  useLastName,
  useEmail,
  useDinner,
  useDietaryRestriction,
  useRestrictions,
  useAttending,
} from '@contexts/RSVP'
import FoodDetail from '@components/FoodDetail'
import EmailDetail from '@components/EmailDetail'
import { getCapitalWord } from '@tek/utils'

export function FoodSelection({
  viewDetails,
  isDisabled = false,
}: {
  viewDetails: () => void
  isDisabled?: boolean
}) {
  const [dinner, setDinner, dinnerError] = useDinner()

  return (
    <>
      <div className="flex items-center justify-between">
        <h2
          className={clsx('text-sm font-medium', {
            'text-red-700': dinnerError,
            'text-primary': !dinnerError,
          })}
        >
          Dinner Selection
        </h2>
        <button
          type="button"
          onClick={viewDetails}
          className="text-xs font-medium text-gold hover:underline"
        >
          See details
        </button>
      </div>

      <RadioGroup value={dinner} onChange={setDinner} className="mt-2">
        <div className="dinner-selection flex flex-col space-y-2">
          {DINNER.map((item) => (
            <RadioGroup.Option
              key={item.name}
              value={item}
              data-choice={item.id}
              className={({ active, checked }) =>
                clsx(
                  'flex cursor-pointer rounded-md border px-3 py-3 text-xs font-medium uppercase focus:outline-none sm:flex-1',
                  {
                    'cursor-not-allowed opacity-75': isDisabled,
                    'ring-2 ring-primary ring-offset-2': active,
                    'border-gold bg-primary text-gold hover:bg-primary':
                      checked,
                    'border-primary bg-white text-primary hover:bg-gray-50':
                      !checked,
                    'border-red-700': dinnerError,
                  }
                )
              }
              disabled={isDisabled}
            >
              <item.Icon
                selected={item.id === dinner?.id}
                disabled={isDisabled}
              />
              <RadioGroup.Label className="ml-4 flex items-center" as="div">
                {item.shortName}
              </RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </>
  )
}

const RSVPForm = () => {
  const [viewFoodDetails, setViewFoodDetails] = useState(false)
  const [viewEmailDetails, setViewEmailDetails] = useState(false)
  const { onSubmit, formError } = useRSVPForm()
  const [isAttending, setIsAttending] = useAttending()
  const [firstName, setFirstName, firstNameError] = useFirstName()
  const [lastName, setLastName, lastNameError] = useLastName()
  const [email, setEmail] = useEmail()
  const [hasDietaryRestriction, setHasDietaryRestriction] =
    useDietaryRestriction()
  const [restriction, setRestriction, restrictionsError] = useRestrictions()

  const isDisabled = !isAttending

  return (
    <Section
      id="rsvp"
      className="relative bg-egg py-16 px-4 font-sans sm:px-6 lg:px-8"
    >
      <div className="hidden lg:absolute lg:inset-0 lg:block">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            alt="Beach Mountain Maine"
            src={Engage}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: '60% bottom',
            }}
          />
        </div>
      </div>
      <div className="relative px-4 sm:py-8 sm:px-6 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:pr-8">
          <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
            <Heading>RSVP</Heading>
            <p className="font-display text-lg font-light uppercase text-gray-500">
              Kindly reply by{' '}
              <span className="font-medium">September 9, 2022</span>.
            </p>
            <div className="relative mt-16 mb-4">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-primary" />
              </div>
              <div className="relative flex justify-center">
                <span
                  className={clsx(
                    'bg-egg px-2 font-display text-sm font-light uppercase text-primary',
                    {
                      'font-normal text-red-700': firstName
                        .toLowerCase()
                        .includes(' and '),
                    }
                  )}
                >
                  please complete for each attendee
                </span>
              </div>
            </div>
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-x-8"
            >
              <div className="col-span-4">
                <fieldset className="mt-4">
                  <div className="flex items-center space-y-0 space-x-10">
                    <div className="flex items-center">
                      <input
                        id="accept"
                        name="attending"
                        checked={isAttending}
                        onChange={setIsAttending}
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="accept"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Accept
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="decline"
                        name="attending"
                        checked={!isAttending}
                        onChange={setIsAttending}
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="decline"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Decline
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className={clsx('block text-sm font-medium', {
                    'text-red-700': firstNameError,
                    'text-primary': !firstNameError,
                  })}
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    onChange={setFirstName}
                    value={firstName}
                    type="text"
                    name="first-name"
                    id="first-name"
                    placeholder={
                      firstNameError ? firstNameError.error : 'first name'
                    }
                    autoComplete="given-name"
                    className={clsx(
                      'block w-full rounded-md shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50 sm:text-sm',
                      {
                        'border-red-700': firstNameError,
                        'border-primary': !firstNameError,
                      }
                    )}
                  />
                </div>
              </div>
              <div className="col-span-4 sm:col-span-2">
                <label
                  htmlFor="last-name"
                  className={clsx('block text-sm font-medium', {
                    'text-red-700': lastNameError,
                    'text-primary': !lastNameError,
                  })}
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    onChange={setLastName}
                    value={lastName}
                    type="text"
                    name="last-name"
                    id="last-name"
                    placeholder={
                      lastNameError ? lastNameError.error : 'last name'
                    }
                    autoComplete="family-name"
                    className={clsx(
                      'block w-full rounded-md shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50 sm:text-sm',
                      {
                        'border-red-700': lastNameError,
                        'border-primary': !lastNameError,
                      }
                    )}
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <button
                    type="button"
                    onClick={() => setViewEmailDetails(true)}
                    className="text-xs font-medium text-gold hover:underline"
                  >
                    Why?
                  </button>
                </div>
                <div className="mt-1">
                  <input
                    id="email"
                    value={email}
                    onChange={setEmail}
                    disabled={isDisabled}
                    name="email"
                    placeholder="email (optional)"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50 sm:text-sm"
                  />
                </div>
              </div>
              <fieldset className="col-span-4 sm:col-span-2">
                <FoodSelection
                  viewDetails={() => setViewFoodDetails(true)}
                  isDisabled={isDisabled}
                />
              </fieldset>
              <fieldset className="col-span-2">
                <legend className="block text-sm font-medium text-gray-700">
                  Any Dietary Restrictions?
                </legend>
                <div className="mt-4 grid grid-cols-1 gap-y-4">
                  <div className="flex items-center">
                    <input
                      checked={hasDietaryRestriction}
                      onChange={setHasDietaryRestriction}
                      disabled={isDisabled}
                      id="dietary-yes"
                      name="dietary"
                      type="radio"
                      defaultValue="yes"
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary disabled:opacity-50"
                    />
                    <label htmlFor="dietary-yes" className="ml-3">
                      <span className="block text-sm text-gray-700">Yes</span>
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked={!hasDietaryRestriction}
                      onChange={setHasDietaryRestriction}
                      disabled={isDisabled}
                      id="dietary-no"
                      name="dietary"
                      type="radio"
                      defaultValue="no"
                      className="h-4 w-4 border-gray-300 text-primary focus:ring-primary disabled:opacity-50"
                    />
                    <label htmlFor="dietary-no" className="ml-3">
                      <span className="block text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              </fieldset>

              <div
                className={clsx('col-span-4', {
                  hidden: !hasDietaryRestriction,
                  block: hasDietaryRestriction,
                })}
              >
                <div className="flex justify-between">
                  <label
                    htmlFor="how-can-we-help"
                    className={clsx('block text-sm font-medium', {
                      'text-red-700': restrictionsError,
                      'text-primary': !restrictionsError,
                    })}
                  >
                    Please list any dietary restrictions below
                  </label>
                </div>
                <div className="mt-1">
                  <textarea
                    id="how-can-we-help"
                    name="how-can-we-help"
                    disabled={isDisabled}
                    aria-describedby="how-can-we-help-description"
                    rows={2}
                    value={restriction}
                    onChange={setRestriction}
                    placeholder="Gluten-Free, Vegan, etc."
                    className={clsx(
                      'block w-full rounded-md border shadow-sm focus:border-primary focus:ring-primary disabled:opacity-50 sm:text-sm',
                      {
                        'border-red-700': restrictionsError,
                        'border-primary': !restrictionsError,
                      }
                    )}
                  />
                </div>
              </div>
              <div className="col-span-4 flex h-16 items-center">
                <button
                  type="submit"
                  className={clsx(
                    'inline-flex w-full justify-center rounded-md border-2  py-2 px-4 text-sm font-medium text-egg shadow-sm hover:bg-egg focus:outline-none focus:ring-2 focus:ring-offset-2',
                    {
                      'border-primary bg-primary hover:text-primary focus:ring-primary':
                        !formError,
                      'border-red-700 bg-red-700 hover:text-red-700 focus:ring-red-700':
                        formError,
                    }
                  )}
                >
                  {!formError
                    ? `Confirm RSVP ${
                        firstName ? `for ${getCapitalWord(firstName)}` : ''
                      }`
                    : formError.error}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FoodDetail
        open={viewFoodDetails}
        onClose={() => setViewFoodDetails(false)}
      />
      <EmailDetail
        open={viewEmailDetails}
        onClose={() => setViewEmailDetails(false)}
      />
    </Section>
  )
}

export default RSVPForm
