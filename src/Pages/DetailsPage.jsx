import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import {postDetails} from "../APIRequest/APIRequest.js";
import {useParams} from "react-router-dom";
import Loader from "../Components/Loader.jsx";
import BlogDetails from "../Components/BlogDetails.jsx";

const DetailsPage = () => {
    let {ID} = useParams();

    let [list, setList] = useState(null);

    useEffect(()=>{
        (async ()=>{
            let res = await postDetails(ID);
            setList(res);
        })()
    },[ID])
    return (
        <>
            <Layout>
                {list === null?<Loader/>:<BlogDetails list={list}/>}
            </Layout>
        </>
    );
};

export default DetailsPage;