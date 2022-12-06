import {useMemo} from "react";
import {Post} from "../types/types";

const useSortedPosts = (posts: Post[], sort: keyof Post | null) => {
    const sortedPosts = useMemo(() => {
            if (sort) {
                // console.log("VIZVANO");
                return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
            }
            return posts;
        }
        , [sort, posts]);
    return sortedPosts;
}

export const usePosts = (posts: Post[], sort: keyof Post | null, search: string) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search))
    }, [search, sortedPosts])

    return sortedAndSearchedPosts;
}