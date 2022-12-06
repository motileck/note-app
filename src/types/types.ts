import React, {ReactNode} from "react";

export interface Post{
    title: string,
    body: string,
    tag: string,
    id: string
}

export interface Filter{
    search: string,
    sort: keyof Post | null
}

export interface buttoProps{
    onClick: ()=> void,
}



