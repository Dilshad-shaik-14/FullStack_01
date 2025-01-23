import React from "react";

export default function TermsAndCondition() {
    return (
        <div className="bg-white px-8 py-10 border-t-4 border-black">
            <div className="max-w-4xl mx-auto space-y-10">
                <Section 
                    title="Login" 
                    content="Users should log in using the provided email and password during registration. If the password is forgotten, we are not responsible."
                />
                <Section 
                    title="Signup" 
                    content="Users should sign up using their email ID, name, and confirm a password. If the password is forgotten, we are not responsible. Please remember your password or note it somewhere."
                />
                <Section 
                    title="Home" 
                    content="If the user is not logged in, they will be shown a request page with two options: login or signup. If logged in, the posts will be visible."
                />
                <Section 
                    title="Profile" 
                    content="Here you will see your profile at the top, containing a profile photo only visible to you, your registered date, your name, and your email. Please note that registered details like email and Name  cannot be edited once created due to server issues.
                    The additional feature that we have got you is the profile picture it can be edited as your posts 
                     We hope you understand. Thank you."
                />
                <Section 
                    title="Add Post" 
                    content="Here you can add your posts. Provide a title for your post and the content in the editor. You can set your photos as public or private, choose the photo, and click submit. If your internet is good, you will be redirected to the post. If there are any mismatches, please verify and submit your post again."
                />
                <Section 
                    title="Contact Us" 
                    content="Provide your registered email or, if not registered, your personal email ID and name. Convey your content or problem and click submit. If everything goes right, you will see an alert box showing 'Message sent successfully'."
                />
                <div className="border-b-2 border-gray-200"></div>
                <Section 
                    title="Copy Right" 
                    content="Copy Rights reserved by @Dilshad Shaik"
                />
            </div>
        </div>
    );
}

const Section = ({ title, content }) => (
    <div className="border-b-2 border-gray-200 pb-6">
        <h1 className="text-3xl sm:text-4xl text-gray-900 font-extrabold tracking-tight mb-2">
            {title}
        </h1>
        <p className="text-lg sm:text-xl font-medium text-gray-700">
            {content}
        </p>
    </div>
);
