import React from 'react';

const About = (props) => {
    return (
        <div
            style={{
                background: 'linear-gradient(to right, #F5F5DC 50%, #212539 50%)',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: '#212539'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'center' ,
                margin:"10rem"}}>
                <div
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        textShadow: '2px 0 0 #F5F5DC',
                        color:'#212539'
                    }}
                >
                    About Sor
                </div>
                <div
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        color: "#F5F5DC"
                    }}
                >
                    in and Edi
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
                <div style={{ width: '45%', textAlign: 'left', color: '#212539', background: '#F5F5DC' }}>
                    <h2 id={"about"}>Sorin</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget tortor mauris.
                        Phasellus scelerisque mi a leo varius, sit amet suscipit odio bibendum.
                    </p>
                </div>
                <div style={{ width: '45%', textAlign: 'left', color: '#F5F5DC', background: '#212539'}}>
                    <h2>Edi</h2>
                    <p>
                        Fusce egestas arcu a odio tristique feugiat. Donec et turpis a purus egestas ultrices
                        quis vitae magna. Pellentesque habitant morbi tristique senectus et netus et malesuada
                        fames ac turpis egestas.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
