import React from 'react';

const Loader = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <span className="loading loading-spinner text-neutral"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loader;