import React, { useEffect, useState } from 'react';
import api from '../../apis/api';
import HeroShared from '../../components/shared/Hero'
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import RecommendedPosts from '../../components/blog/RecommendedPosts';

const BlogPage = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        api.get('/posts/')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching blog posts:', error);
            })
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    if (posts.length === 0) {
        return <Spinner message="Loading blog posts..." />;
    }

    return (
        <div>
            <HeroShared pageName='Our Blog' pageSecondName='Blog' />
            <div className='my-28 2xl:px-24 xl-custom:px-20 xl:px-16 lg-custom:px-14 lg:px-12 md-custom:px-10 sm:px-8 px-6'>
                <div className='flex lg:flex-row flex-col lg:gap-10 gap-16'>
                    <div className="flex flex-col gap-y-12 lg:w-[73%]">
                        {posts.map((post, index) => (
                            <div key={index} className='rounded-md bg-white shadow-[0_0_5px_1px_rgba(0,0,0,0.3)]'>
                                <img className='rounded-t-md w-full' src={post.image} alt={`Post ${index}`} />
                                <div className='xs-custom:p-6 xs:p-5 p-4'>
                                    <div className='flex flex-wrap gap-y-[3px] gap-x-5 text-gray-600'>
                                        <div className='flex items-center gap-x-2'>
                                            <i className='fa-regular fa-comment-dots'></i>
                                            <p>{post.comment_count} Comments</p>
                                        </div>
                                        <div className='flex items-center gap-x-2'>
                                            <i className='fa-regular fa-clock'></i>
                                            <p>{post.created_at}</p>
                                        </div>
                                    </div>
                                    <h1 className='mt-4 sm:text-[32px] xs:text-[26px] 2xs-custom:text-[22px] text-[20px] text-gray-950 sm:leading-[40px] xs:leading-[33px] 2xs-custom:leading-[28px] leading-[26px] font-black font-cinzel-decorative'>{post.title}</h1>
                                    <p className='text-gray-700 sm:text-base xs:text-[15px] 2xs-custom:text-sm text-[13px] 2xs-custom:leading-normal leading-[18px] font-poppins mt-3'>{post.main_description}</p>
                                    <Link to={`/blog/${post.slug}`}>
                                        <button type='button' className='mt-8 text-sm tracking-wide bg-[rgb(255,208,80)] font-inter mx-auto text-black hover:bg-[rgb(29,142,90)] hover:text-white hover:font-medium font-bold text-center rounded-[3px] w-32 py-[10px]'>Read More</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='lg:w-[27%]'>
                        <div className='flex items-center border border-gray-300 rounded-[3px] py-3 px-5'>
                            <input
                                className='w-full font-semibold text-gray-700 font-sans tracking-[0.01em] outline-none'
                                type="text"
                                placeholder='Search Resources'
                            />
                            <i className='fa fa-search ps-3 text-gray-500'></i>
                        </div>
                        <RecommendedPosts detailsPost={posts} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPage;
