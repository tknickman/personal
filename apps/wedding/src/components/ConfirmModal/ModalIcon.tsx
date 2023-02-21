import { CheckIcon, XIcon } from '@heroicons/react/outline'
import Hydrangea from '@components/icons/Hydrangea'
import { RSVPContext } from '@contexts/RSVP'
import useTailwind from '@hooks/useTailwind'

const ModalIcon = ({
  submitState,
}: {
  submitState: RSVPContext['submitState']
}) => {
  const { theme } = useTailwind()
  if (submitState === 'success') {
    return <CheckIcon className="h-12 w-12 text-primary" />
  }

  if (submitState === 'error') {
    return <XIcon className="h-12 w-12 text-red-700" />
  }

  return <Hydrangea stroke={theme.colors.primary} />
}

export default ModalIcon
