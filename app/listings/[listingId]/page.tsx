import getCurrentUser from '@/app/actions/getCurrentUser'
import getListingById from '@/app/actions/getListingById'
import getReservations from '@/app/actions/getReservations'
import ClientOnly from '@/app/components/ClientOnly'
import EmptyState from '@/app/components/EmptyState'
import ListingClient from './ListingClient'

interface IParams {
  listingId?: string
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingById(params)
  const reservations = await getReservations(params)
  const currentUser = await getCurrentUser()

  return (
    <ClientOnly>
      {!listing ? (
        <EmptyState />
      ) : (
        <ListingClient listing={listing} reservations={reservations} currentUser={currentUser} />
      )}
    </ClientOnly>
  )
}

export default ListingPage
