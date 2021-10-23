import MemberCard from './MemberCard';
import styles from '../styles/Home.module.css';

export default function Table({ members }) {
    return (
        <>
            {members == null ? (
                <h2>No added members</h2>
            ) : (
                <ul>
                    {members.map((post, i) => (
                        <MemberCard post={post} key={i} />
                    ))}
                </ul>
            )}
        </>
    );
}
