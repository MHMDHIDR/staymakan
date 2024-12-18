// app/favorites/page.tsx
import getCurrentUser from '@/app/actions/getCurrentUser'
import getFavoriteListings from '@/app/actions/getFavoriteListings'
import ClientOnly from '@/app/components/ClientOnly'
import EmptyState from '@/app/components/EmptyState'
import FavoritesClient from './FavoritesClient'

const ListingPage = async () => {
  const listings = await getFavoriteListings()
  const currentUser = await getCurrentUser()

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title='No favorites found'
          subtitle='Looks like you have no favorite listings.'
        />
      </ClientOnly>
    )
  }

  // Convert createdAt from string to Date
  const formattedListings = listings.map(listing => ({
    ...listing,
    createdAt: new Date(listing.createdAt)
  }))

  return (
    <ClientOnly>
      <FavoritesClient listings={formattedListings} currentUser={currentUser} />
    </ClientOnly>
  )
}

export default ListingPage
