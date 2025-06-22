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
        {/* Hide animation on xs, show on md+ */}
        <div className="hidden md:flex justify-center py-10">
            <ImageWithTextAnimation className="object-fit" />
        </div>
        <div className="w-full min-h-screen bg-white text-black py-4 sm:py-8">
            <Container>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-10 text-left tracking-tight text-black drop-shadow-lg'>
                    Latest Collection
                </h1>
                <div className="max-w-full sm:max-w-7xl mx-auto px-2 sm:px-4">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, idx) => (
                            <div
                                key={post.$id}
                                className={`bg-white border border-gray-200 rounded-2xl shadow-md 
                                    hover:shadow-xl hover:-translate-y-1 hover:border-black transition-all duration-300 p-4 sm:p-6 flex flex-col
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
