import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: true
    },
    {
        userName: 'kazuma',
        name: 'Juan Garzon',
        isFollowing: false
    },
    {
        userName: 'sergio',
        name: 'Sergio',
        isFollowing: true
    },
    
]
export function App () {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initianilIsFollowing={isFollowing}
                            >
                            {name}
                        </TwitterFollowCard>
            ))
                
            }
        </section> 
    )
}