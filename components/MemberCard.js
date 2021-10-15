import { useState } from 'react';
import { useRouter } from 'next/router';

export default function MemberCard({ post }) {
    const [publishing, setPublishing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const router = useRouter();

    // Publish post
    const publishPost = async (postId) => {
        // change publishing state
        setPublishing(true);

        try {
            // Update post
            await fetch('/api/members', {
                method: 'PUT',
                body: postId,
            });

            // reset the publishing state
            setPublishing(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // Stop publishing state
            return setPublishing(false);
        }
    };
    // Delete post
    const deletePost = async (postId) => {
        //change deleting state
        setDeleting(true);

        try {
            // Delete post
            await fetch('/api/members', {
                method: 'DELETE',
                body: postId,
            });

            // reset the deleting state
            setDeleting(false);

            // reload the page
            return router.push(router.asPath);
        } catch (error) {
            // stop deleting state
            return setDeleting(false);
        }
    };
    return (
        <>
            <div dir='rtl'>
                <li>
                    <span>{post.title + ' ' +  post.first_name + ' ' + post.family_name}</span>
                    <br />
                    <span>{'כתובת: ' + post.street + ' ' + post.number}</span>
                    <br />
                    <span>{post.city + ' - ' + post.country}</span>
                    <br />
                    <span>{'מיקוד: ' + post.zip}</span>
                    <br />
                    <span>{'טלפון: ' + post.phone_number + ' '}</span>
                    <span>{'טלפון נייד: ' + post.mobile_phone}</span>
                    <br />
                    <span>{'חתן: ' + post.father_in_law + ' '}</span>
                    <span>{'בן: ' + post.father}</span>
                    <br />
                    <span>{'הערות: ' + post.notes}</span>
                    <hr />
                </li>
            </div>
        </>
    );
}