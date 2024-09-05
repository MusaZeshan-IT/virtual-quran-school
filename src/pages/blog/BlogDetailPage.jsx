import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../apis/api';
import HeroShared from '../../components/shared/Hero';
import Spinner from '../../components/Spinner';
import RecommendedPosts from '../../components/blog/RecommendedPosts';
import NotFoundPage from '../NotFoundPage';

const BlogDetailPage = () => {
    const { slug } = useParams();
    const [posts, setPosts] = useState(null); // Initialize as null
    const [loading, setLoading] = useState(true); // Add loading state

    const fetchPosts = () => {
        setLoading(true); // Set loading to true before fetching
        api.get(`/posts/${slug}/`)
            .then(response => {
                setPosts(response.data);
                setLoading(false); // Set loading to false after fetching
            })
            .catch(error => {
                console.error('Error fetching blog posts:', error);
                setLoading(false); // Set loading to false even if there's an error
            });
    };

    useEffect(() => {
        fetchPosts();
    }, [slug]); // Fetch new data when the slug changes

    if (loading) {
        return <Spinner message="Loading the post..." />; // Show spinner when loading
    }

    if (!posts) {
        return <NotFoundPage />
    }

    return (
        <div>
            <HeroShared pageName={posts.short_title} pageSecondName={posts.title} />
            <div className='my-28 2xl:px-24 xl-custom:px-20 xl:px-16 lg-custom:px-14 lg:px-12 md-custom:px-10 sm:px-8 px-6'>
                <div className='flex lg:flex-row flex-col lg:gap-10 gap-16'>
                    <div className="flex flex-col gap-y-12 lg:w-[73%]">
                        <div className='rounded-md bg-white shadow-[0_0_5px_1px_rgba(0,0,0,0.3)]'>
                            <img className='rounded-t-md w-full' src={posts.image} alt={posts.title} />
                            <div className='xs-custom:p-6 xs:p-5 p-4'>
                                <div className='flex flex-wrap gap-y-[3px] gap-x-5 text-gray-600'>
                                    <div className='flex items-center gap-x-2'>
                                        <i className='fa-regular fa-comment-dots'></i>
                                        <p>{posts.comment_count} Comments</p>
                                    </div>
                                    <div className='flex items-center gap-x-2'>
                                        <i className='fa-regular fa-clock'></i>
                                        <p>{posts.created_at}</p>
                                    </div>
                                </div>
                                <h1 className='mt-4 sm:text-[32px] xs:text-[26px] 2xs-custom:text-[22px] text-[20px] text-gray-950 sm:leading-[40px] xs:leading-[33px] 2xs-custom:leading-[28px] leading-[26px] font-black font-cinzel-decorative'>{posts.title}</h1>
                                <p className='text-gray-700 sm:text-[17px] xs:text-[15px] 2xs-custom:text-sm text-[13px] 2xs-custom:leading-normal leading-[18px] font-poppins mt-3'>{posts.main_description}</p>
                                <h2 className='text-gray-900 font-black font-cinzel-decorative tracking-tight sm:text-[26px] xs:text-[20px] 2xs-custom:text-[18px] text-[17px] 2xs-custom:leading-normal leading-[18px] mt-8'>{posts.sub_heading_1}</h2>
                                <p className='text-gray-700 tracking-[0.1px] sm:text-[15.5px] xs:text-[15px] 2xs-custom:text-sm text-[13px] 2xs-custom:leading-normal leading-[18px] font-poppins mt-2'>{posts.sub_description_1}</p>
                                <h2 className='text-gray-900 font-black font-cinzel-decorative tracking-tight sm:text-[26px] xs:text-[20px] 2xs-custom:text-[18px] text-[17px] 2xs-custom:leading-normal leading-[18px] mt-8'>{posts.sub_heading_2}</h2>
                                <p className='text-gray-700 tracking-[0.1px] sm:text-[15.5px] xs:text-[15px] 2xs-custom:text-sm text-[13px] 2xs-custom:leading-normal leading-[18px] font-poppins mt-2'>{posts.sub_description_2}</p>
                                <div className='mt-8 gap-5 flex md-custom:flex-row flex-col justify-between'>
                                    <div className='flex sm:flex-row flex-col sm:items-center gap-3'>
                                        <h3 className='text-gray-900 text-xl font-black font-inter'>Tags:</h3>
                                        <div className='flex flex-wrap gap-2'>
                                            {posts.tags.map((tag, index) => (
                                                <div className='px-4 py-2 bg-gray-100 rounded-md inline-block' key={index}>
                                                    <p className='font-poppins text-sm'>{tag}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-x-3'>
                                        <h3 className='text-gray-900 text-xl font-black font-inter'>Share post:</h3>
                                        <div className='flex gap-x-3'>
                                            <i className='grid text-[17px] cursor-pointer place-items-center fa-brands fa-instagram bg-[rgb(25,25,25)] text-white rounded-full h-10 w-10'></i>
                                            <i className='grid text-base cursor-pointer place-items-center fa-brands fa-facebook-f bg-[rgb(25,25,25)] text-white rounded-full h-10 w-10'></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
};

export default BlogDetailPage;
