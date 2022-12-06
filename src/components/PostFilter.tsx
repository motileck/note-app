import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/Select/MySelect";
import {Filter} from "../types/types";

const PostFilter = ({filter, setFilter} : {filter:Filter, setFilter:void}) => {
    return (
        <div>
            <MyInput
                value={filter.search}
                onChange={e => setFilter({...filter, search: e.target.value})}
                placeholder="поиск"
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
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