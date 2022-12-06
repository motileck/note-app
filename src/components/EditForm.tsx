import React, {ChangeEvent, useEffect, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {Post} from "../types/types";



const EditForm: React.FC<{edit:any, initial: Post | null}> = ({edit, initial}) => {

    useEffect(() => {
        setPost({
            title: initial?.title || '',
            body: initial?.body || '',
            tag: initial?.tag || '',
            id : initial?.id || ''
        })
    }, [initial])

    const [post, setPost] = useState<Post>({
        title: initial?.title || '',
        body: initial?.body || '',
        tag: initial?.tag || '',
        id : initial?.id || ''
    });

    function editPost(e : ChangeEvent<HTMLInputElement>) {
        e.preventDefault();

        const newPost = {
            ...post,
            id: initial?.id,
        }
        edit(newPost);
        setPost({title: '', body: '', tag: '', id: ''})

    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({...post, title: e.target.value})}
                type="text"
            />
            <MyInput
                value={post.body}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({...post, body: e.target.value})}
                type="text"
            />
            <MyInput
                value={post.tag}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({...post, tag: e.target.value})}
                type="text"
            />
            <MyButton onClick={editPost}>Сохранить</MyButton>
        </form>
    );
};

export default EditForm;