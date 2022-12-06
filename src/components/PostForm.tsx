import React, {ChangeEvent, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm: React.FC<{create:any}> = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
        tag: '',
    });


    function addNewPost(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        const subString = post.body.match(/#\w+/g)
        const newPost = {
            ...post,
            tag: subString,
            id: Date.now(),
        }

        create(newPost);
        setPost({title: '', body: '', tag: ''})
    }


    return (
        <form>
            <MyInput
                value={post.title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название заметки"/>
            <MyInput
                value={post.body}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание заметки"/>

            <MyButton onClick={addNewPost}>Создать заметку</MyButton>
        </form>
    );
};

export default PostForm;