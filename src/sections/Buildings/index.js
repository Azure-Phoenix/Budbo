
import { useEffect } from 'react';
import { useInView } from 'react-hook-inview';

import { StyledBuildings } from './styles';

function Buildings({ setCurrentLink }) {

    const [ref, isVisible] = useInView({
        threshold: 1,
    })
    useEffect(() => {
        if (isVisible) {
            setCurrentLink('ecosystem')
        }

    }, [isVisible])

    return (
        <StyledBuildings className='position-relative'>
            <div className="container" >
                <div className='width-wrapper col-12 col-xl-10'>
                    <div style={{ maxwidth: '850px' }}>
                        <h1 id="ecosystem" ref={ref}>Let's unpack the<br />
                            Budbo Ecosystem 
                        </h1>
                    </div>
                </div>
            </div>
        </StyledBuildings>
    )
}

export default Buildings;
