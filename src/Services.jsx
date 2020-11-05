import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 mx-auto">
                        <div className="row gy-3">
                            {
                                Sdata.map((val, index) => {
                                    return<Card key={index} imgsrc={val.imgsrc} title={val.title} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;