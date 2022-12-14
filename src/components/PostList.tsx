import React, {Dispatch, SetStateAction} from 'react';
import PostItem from "./PostItem";
import {Post} from "../types/types";
const PostList: React.FC<{
    posts:Post[],
    title:string,
    remove:(post: Post) => void,
    visible:boolean,
    setVisible:Dispatch<SetStateAction<boolean>>,
    edit:(post: Post) => void,
}>= ({posts, title, remove, visible, setVisible, edit}) => {
    if (!posts.length) {
        return <h1 style={{textAlign: "center"}}>Заметки не были найдены</h1>
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem
                    edit={edit}
                    remove={remove}
                    number={index + 1}
                    post={post}
                    key={post.id}
                    visible={visible}
                    setVisible={setVisible}
                />
            )}
        </div>
    );
};

export default PostList;