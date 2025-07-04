import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ID } from "appwrite";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredimages);
            }
            console.log(data);
            
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                userid : userData.$id ,
                featuredimages: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredimages = fileId;
                data.slug = ID.unique();
                data.name = userData.name;
                data.userid = userData.$id; 


                const dbPost = await appwriteService.createPost({ ...data, userid: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap w-full">
            <div className="w-full lg:px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="lg:px-2 w-full">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                <div className="w-full">
                    {post && (
                        <>
                            {console.log('EditForm featuredimages:', post.featuredimages)}
                            {console.log('EditForm viewUrl:', appwriteService.getFileView(post.featuredimages))}
                            <div className="w-full mb-4">
                                <img
                                    src={appwriteService.getFileView(post.featuredimages)}
                                    alt={post.title}
                                    className="rounded-lg"
                                />
                            </div>
                        </>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className="mb-4 w-full"
                        {...register("status", { required: true })}
                    />
                </div>
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}