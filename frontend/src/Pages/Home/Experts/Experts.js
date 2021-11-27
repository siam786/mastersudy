import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {
        img: "https://i.ibb.co/1fdVHpL/Home-blog-2.jpg",
        name: 'Rich & healthy burgers',
        expertize: 'Augue neque gravida in fermentum et sollicitudin tempor nec? San: Massa tempor nec feugiat nisl pretium fusce id velit. Facilisis mauris sit amet m...'
    },
    {
        img: "https://i.ibb.co/88GX3dT/Home-blog-3.jpg",
        name: 'Get addict for taste',
        expertize: 'Nunc mattis enim ut tellus eleme ntum sagittis. In tellus integer feugiat sceler isque varius morbi enim nunc. Suspendisse faucibus interdum posuer...'
    },
    {
        img: "https://i.ibb.co/Xt1XRMq/Home-blog-1.jpg",
        name: 'Tasty & yummy flavors',
        expertize: 'Facilisis volu tpat est velit egestas dui Ipsum dolorsitamet conse ctetur adipiscing elitpellen tesque habit antmorbi. Pharetra vel turpis nunc ege...'
    }
   
]

const Experts = () => {
    return (
        <div id="experts" className="container pb-5">
            <h2 className="text-black my-5 text-start text-uppercase text-center">OUR LATEST FOOD ITEM</h2>
            <div className="row">
                
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;