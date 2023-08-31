import ideaImage from '../../assets/images/billion-idea.png';
import ideaImageMob from '../../assets/images/billion-idea-mob.png';
import solutionImage from '../../assets/images/billion-solution.png';
import solutionImageMob from '../../assets/images/billion-solution-mob.png';
export const mockBillionIdea = {
  title: '',
  image: ideaImage,
  imageMob: ideaImageMob,
  description: (
    <h3>
      The global cannabis market (regulated and illicit) is currently estimated
      at <span className="text-primary">$344 billion USD. </span> The regulated
      market in the US alone{' '}
      <span className="text-primary">will grow at a 25.5% CAGR</span> between
      2022 and 2030. The global blockchain market will grow from $7.18 billion
      in 2022 to $163.83 billion by 2029, at a{' '}
      <span className="text-primary">CAGR of 56.3%.</span>
    </h3>
  ),
  text: (
    <p className="text text-colored">
      By combining these two markets, Budbo empowers the cannabis industry to
      grow at an even faster pace and removes inefficiencies and challenges
      cannabis businesses face.
      <br />
      <br />
      With its streamlined cannabis marketplace and
      blockchain technologies, {' '}
      <span className="text-body fw-bold">
        Budbo offers a unified solution for cannabis businesses and users to transact safely,
        be rewarded, increase sales, and expand the industry.
        <br />

      </span>
    </p>
  ),
};

export const mockBillionSolution = {
  title: (
    <h2>
      
      <span className="text-primary"></span>
    </h2>
  ),
  image: solutionImage,
  imageMob: solutionImageMob,
  description: (
    <h3>
      {' '}
      Any new industry comes with new challenges(especially when{' '}
      <span style={{ color: 'var(--primary)' }}>
        {' '}
        it’s worth $300+ billion!
      </span>
      ), but also with it brand new opportunities.
    </h3>
  ),
  text: (
    <h4 className="my-4">
      This fast growing sector of the economy presents challenges that no one
      has dealt with before, partly because even in states that have legalized
      the sale of cannabis, cannabis-related businesses still face many business
      restrictions.
    </h4>
  ),
  text2: (
    <p className="text-colored">
      This is particularly true when it comes to{' '}
      <span className="text-body fw-bold">
        {' '}
        banking, legal protection, consumer outreach, and supply chain
        management.{' '}
      </span>
      Governments have historically restricted and penalized cannabis users and
      businesses - but that is changing.
    </p>
  ),
};
