import { useSession, signIn, signOut } from 'next-auth/client';

export default function Home() {
  const [ session, loading ] = useSession()
  return <>
      <div>
        {!session ? 
          <button onClick={() => signIn()}>Sign in</button>
          : 
          (
            <div>
            <p>Hello, {session.user!.name}</p>
            <button onClick={() => signOut()}>Sign out</button>
            </div>
          )
          
        }
      </div>
  </>
}