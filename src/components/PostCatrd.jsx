import React from 'react';
import appwriteService from '../appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredimages, name }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full max-w-2xl mx-auto bg-white border border-gray-400 rounded-lg shadow-md hover:shadow-black transition-shadow duration-300 overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={appwriteService.getFilePreview(featuredimages)}
          alt={title}
        />
        <div className="p-6">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
          <p className="mb-3 font-normal text-gray-700">{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
