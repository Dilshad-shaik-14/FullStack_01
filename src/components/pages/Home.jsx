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
            <div className="w-full mt-4 text-center bg-white text-black border-black border py-6 min-h-[60vh] flex items-center justify-center">
                <Container>
                    <div className='flex flex-wrap justify-center'>
                        <div className='p-2 w-full'>
                            <h1 className='text-3xl font-extrabold text-black animate-pulse'>
                                Login/Signup To Acquire the Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <>
        <div className="hidden md:flex justify-center py-20">
            <ImageWithTextAnimation className="object-fit" />
        </div>
        <div className="w-full min-h-screen bg-white text-black py-10">
            <Container>
                <h1 className='text-4xl md:text-5xl font-extrabold mb-12 text-left tracking-tight text-black drop-shadow-lg'>
                    Latest Collection
                </h1>
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 [column-gap:2.5rem]">
                        {posts.map((post, idx) => (
                            <div
                                key={post.$id}
                                className={`break-inside-avoid mb-8 bg-white border border-gray-200 rounded-3xl shadow-lg 
                                    hover:shadow-2xl hover:-translate-y-2 hover:border-black transition-all duration-300 p-8 flex flex-col
                                    opacity-0 animate-fade-in`}
                                style={{ animationDelay: `${idx * 60}ms`, animationFillMode: 'forwards' }}
                            >
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
        </>
    );
};

export default Home;

/* Add this to your global CSS (e.g., index.css or tailwind.css) for the fade-in animation:
@keyframes fade-in {
  to { opacity: 1; }
}
.animate-fade-in {
  animation: fade-in 0.7s ease forwards;
}
*/
