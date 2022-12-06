import React, {useState} from "react";

import './styles/App.scss'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/ModalWindow/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePost";
import EditForm from "./components/EditForm";
import {Filter, Post} from "./types/types";



function App() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [filter, setFilter] = useState<Filter>({sort: null, search: ''});
    const [modal, setModal] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);
    const [postForEdit, setPostForEdit] = useState<Post | null>(null);


    function createPost(newPost: Post) {
        setPosts([...posts, newPost])
        setModal(false)
    }

    function removePost(post : Post) {
        const filteredPosts = posts.filter(p => p.id !== post.id);
        setPosts(filteredPosts);
    }

    function savePosts() {
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    function loadPosts() {
        const loadedPosts = JSON.parse(localStorage.getItem('posts')|| '[]');
        setPosts([...loadedPosts]);
    }

    function editPost(post : Post):void {
        const postIndex = posts.findIndex(p => p.id === post.id);
        if (postIndex !== -1) {
            const copyPosts = [...posts];
            copyPosts[postIndex] = post;
            setPosts([...copyPosts]);
            setModalEdit(false);
        }
    }

    function openEditModal(post : Post) {
        setPostForEdit(post);
        setModalEdit(true);
    }


    return (
        <div className="App">
            <MyButton onClick={savePosts}>Save</MyButton>
            <MyButton onClick={loadPosts}>Load</MyButton>
            <MyButton onClick={() => setModal(true)}>Создать заметку</MyButton>
            <MyModal
                visible={modal}
                setVisible={setModal}
            >
                <PostForm create={createPost}/>
            </MyModal>

            <MyModal
                visible={modalEdit}
                setVisible={setModalEdit}
            >
                <EditForm initial={postForEdit} edit={editPost}/>
            </MyModal>


            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />

            <PostList
                edit={openEditModal}
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title="Заметки"
                visible={modal}
                setVisible={setModal}
            />


        </div>
    );
}

export default App;
