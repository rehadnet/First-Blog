import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {postByCategory} from "../APIRequest/APIRequest.js";
import Loader from "../Components/Loader.jsx";
import BlogList from "../Components/BlogList.jsx";
import { useParams } from 'react-router-dom';

const ByCategoryPage = () => {
    let {ID} = useParams();

    let [list, setList] = useState(null);

    useEffect(()=>{
        (async ()=>{
            let res = await postByCategory(ID);
            setList(res)
        })()
    },[ID])
    return (
        <>
            <Layout>
                {list === null?<Loader/>:<BlogList list={list}/>}
            </Layout>
        </>
    );
};

export default ByCategoryPage;