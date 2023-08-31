import logo1 from '../../assets/images/offer-icon1.svg';
import logo2 from '../../assets/images/offer-icon2.svg';

export const mockTextContent = {
    title: <h2></h2>,
    subtitle: 'We are now seeing a strong and effective push for local, state, and federal governments around the world to establish,' +
        ' regulate, and encourage an open and fair market for the use and sale of cannabis and' +
        ' cannabis related products.',
    subtitle2: 'We have consulted with governments, dispensaries, growers, manufacturers,' +
        '  patients, and consumers to create the perfect solution.',
    text:
        <p className='text'>
            All the pieces have fallen into place: the cannabis industry can blossom
            and the right technologies can thrive. 
            
        </p>
}

export const mockOffers = [
    {
        logo: logo1,
        text: <p> Budbo offers <span>safe and secure transactions for cannabis businesses and
            users.</span> Bringing together all relevant parties in the cannabis
            <span> industry to increase standardization, transparency, and efficiency across all channels.</span></p>
    },
    {
        logo: logo2,
        text: <p>The missing piece of the pie, <span>Budbo is a global solution for all stakeholders of
            the cannabis industy.</span></p>
          
    }
]
