import React, { useEffect, useState } from 'react';
import appwriteService from '../../appwrite/config';
import { Container, PostCard } from '../index';
import ImageWithTextAnimation from '../../ImageWithTextAnimation';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full mt-4 text-center bg-white text-black border-black border py-6">
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold'>Login/Signup To Acquire the Posts</h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <>
        <div className="flex justify-center py-20">
            <ImageWithTextAnimation className=" object-fit" />
        </div>
        <div className="w-full bg-white text-black">
            <Container>
                <h1 className='text-2xl text-left text-bold-4x1 '>Latest Collection  </h1>
                <div className="flex flex-wrap ">
                    <div className='w-full'>
                    </div>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full md:w-1/2 lg:w-1/4 px-10'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
        </>
    );
};

export default Home;
