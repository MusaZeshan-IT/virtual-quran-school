import React, { useEffect, useState } from 'react';
import api from '../../apis/api';
import { Link } from 'react-router-dom';

const RecommendedPosts = ({ detailsPost }) => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        api.get('/posts/')
            .then(response => {
                // Filter posts that don't match the detailsPost title
                const filteredPosts = response.data.filter(post => post.title !== detailsPost.title);
                setPosts(filteredPosts);
            })
            .catch(error => {
                console.error('Error fetching recommended posts:', error);
            });
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className={`bg-gray-50 rounded-[3px] mt-10 border border-gray-300 lg:w-full sm:w-1/2`}>
            <div className='p-4 border-b border-gray-300'>
                <h1 className='font-bold text-[22px] font-inter tracking-wide'>Recommended Blog Posts</h1>
            </div>
            <div className='pb-4 px-4'>
                <div className={`grid grid-cols-1 gap-6 ${posts.length === 1 ? 'gap-6' : ''}`}>
                    {posts.slice(0, 3).map((post, index) => (
                        <div key={index} className='h-fit'>
                            <Link to={`/blog/${post.slug}`}>
                                <div className={`border-b border-gray-300 pb-4 flex mt-8 flex-col cursor-pointer`}>
                                    <img className='w-full lg:h-32 md:h-40 sm:h-36 xs-custom:h-44 2xs-custom:h-40 h-36 rounded shadow-[0_0_2px_0.5px_rgba(0,0,0,0.3)]' src={post.image} alt="" />
                                    <div>
                                        <h1 className='text-[14px] font-bold text-gray-500 font-poppins mt-3'>{post.created_at}</h1>
                                        <p className='text-[17px] mt-[3px] leading-[21px] font-bold font-poppins text-gray-800'>{post.title}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecommendedPosts;
