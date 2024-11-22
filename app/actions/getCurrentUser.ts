// app/actions/getCurrentUser.ts
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/nextauthOptions'
import prisma from '@/app/libs/prismadb'
import { SafeUser } from '@/app/types'

export async function getSession() {
  return await getServerSession(authOptions)
}

export default async function getCurrentUser(): Promise<SafeUser | null> {
  const session = await getSession()

  if (!session?.user?.email) {
    return null
  }

  const currentUser = await prisma.user.findUnique({
    where: {
      email: session.user.email as string
    }
  })

  if (!currentUser) {
    return null
  }

  const safeUser: SafeUser = {
    id: currentUser.id,
    name: currentUser.name,
    email: currentUser.email,
    hashedPassword: currentUser.hashedPassword,
    emailVerified: currentUser.emailVerified ? currentUser.emailVerified.toISOString() : null,
    image: currentUser.image,
    createdAt: currentUser.createdAt.toISOString(),
    updatedAt: currentUser.updatedAt.toISOString(),
    favoriteIds: currentUser.favoriteIds || []
  }

  return safeUser
}
