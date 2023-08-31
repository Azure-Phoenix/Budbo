import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useInView } from 'react-hook-inview';

import { StyledBlockChainTechnology } from './styles'
import { mockBlockchainTechnologies } from './constants';

function BlockchainTechnology({ setCurrentLink }) {
    const blockchainTechnologyRef = useRef()
    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    const [inView, setInView] = useState(false)
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('blockchain')
        }
        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInView(true)
            }
        })
        obs.observe(blockchainTechnologyRef.current)
        return () => {
            obs.disconnect()
        }
    }, [isVisible, blockchainTechnologyRef])
    return (
        <StyledBlockChainTechnology ref={blockchainTechnologyRef}>
            <div className="container col-12 col-xl-10" id="blockchain" ref={ref}>
                <div className="width-wrapper col-12 col-xl-10">
                    <div style={{ maxWidth: '860px' }}>
                        <h2 className="mb-5" >Blockhain and Budbo <br />
                            </h2>
                        <ul className='blockchain-list'>
                            {mockBlockchainTechnologies.map((blockchainTechnology, index) => (
                                inView ? (
                                    <li key={index}>
                                        <img className='mb-4 mb-md-5 logo' src={blockchainTechnology.logo} alt={index} />
                                        {blockchainTechnology.title}
                                        <div className='bg-white p-3 my-5' style={{ maxHeight: '860px', borderRadius: '48px' }}>
                                            <picture className="d-flex">
                                                <source srcSet={blockchainTechnology.image} media="(min-width: 992px)" />
                                                <img src={blockchainTechnology.image2} alt={index} className="w-75 mx-auto" />
                                            </picture>
                                        </div>

                                        {blockchainTechnology.description}
                                    </li>
                                ) : 'Loading...'
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </StyledBlockChainTechnology>
    )
}

export default BlockchainTechnology
