import MemberCard from './MemberCard';

export default function Table({ members }) {
    return (
        <>
            {members == null ? (
                <h2>No added members</h2>
            ) : (
                <ul>
                    {console.log(members)}
                    {members.map((post, i) => (
                        <MemberCard post={post} key={i} />
                    ))}
                </ul>
            )}
        </>
    );
}
