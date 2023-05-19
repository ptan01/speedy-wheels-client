import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {

    const [ofRoads, setOfRoads] = useState([])
    const [electrics, setElectrics] = useState([])
    const [sports, setSports] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/category/off-road')
            .then(res => res.json())
            .then(data => setOfRoads(data))

    }, [])


    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Off-Road Vehicles</Tab>
                    <Tab>Electric Vehicles</Tab>
                    <Tab>Sports Cars</Tab>
                </TabList>

                <TabPanel>

                   <div className='grid lg:grid-cols-3 gap-4 mt-16'>
                   {
                        ofRoads.map(ofRoad => <div key={ofRoad._id} className="card card-compact w-96 h-96 bg-base-100 shadow-xl">
                            <figure><img className='h-[300px] w-[500px]' src={ofRoad.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-blue-500">{ofRoad.name}</h2>
                                <p className='text-xl'>Price: ${ofRoad.price}</p>
                                <p className='text-xl'>Rating: {ofRoad.rating}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>)
                    }
                   </div>


                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;