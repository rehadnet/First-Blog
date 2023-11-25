import React from 'react';

const BlogDetails = (props) => {
    return (
        <>
            <div className='container mx-auto my-16 p-9'>
                <div className='p-x-9 mt-2'>
                    <div className='card w-100 glass'>
                        {/* eslint-disable-next-line react/prop-types */}
                        <figure><img src={props.list['postDetails']['img']} alt="Not_Found" /></figure>
                        <div className="card-body">
                            {/* eslint-disable-next-line react/prop-types */}
                            <h2 className="card-title">{props.list['postDetails']['title']}</h2>
                            {/* eslint-disable-next-line react/prop-types */}
                            <p>{props.list['postDetails']['content']}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;