import React, {ChangeEvent} from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/Select/MySelect";
import {Filter} from "../types/types";

const PostFilter:React.FC<{filter:Filter, setFilter:any}> = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value:string={filter.search}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter({...filter, search: e.target.value})}
                placeholder="поиск"
            />
            <MySelect
                value:string={filter.sort}
                onChange={(selectedSort:any) => setFilter({...filter, sort: selectedSort})}
                defaultValue="Сортировка по"
                options={
                    [{value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                        {value: 'tag', name: 'По Тегу'}]
                }
            />
        </div>
    );
};

export default PostFilter;