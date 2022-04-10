import {useEffect} from "react";

const About = () => {
    useEffect( () => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <div className="about">
            <h2>Our Mission</h2>
            <div className="mission">
                <div className="mission-1">
                    <div className="phrases"><p>Average American THROW AWAY </p><p className="number">37kg</p><p> of clothes every year.</p></div>
                    <div className="phrases"><p>Fashion industry is responsible for </p><p className="number">10%</p><p> of all greenhouse emissions.</p></div>
                    <div className="phrases"><p>Only </p><p className="number">12%</p><p> of all materials used for clothing end up being recycles.</p></div>
                </div>
                <div className="mission-2">
                    <p>Lincoln's Resale is hoping to help establish a new sustainable way of recycling through old clothing. Rather than thinking
                    of us as Goodwill, we want to promote innovation and creativity through giving old clothing a new life. We ask you to think outside-of-the-box,
                    we want to see designs, colors, and potentially going beyond the clothing itself.</p>
                </div>
            </div>
            <h2>Meet the Owners</h2>
            <div className="owners">
                <img src="/images/owners.jpg" alt="A family of six on a hiking trail"/>
                <div>
                    <p>The Smith family has been a member of the Lincoln community for the last 40 years.</p>
                    <p>"We have chosen Lincoln to raise the family because of the community. In the last couple of years, the world has been crazy.
                    Lincoln's Resale simply wants to bring some form of peace and learning into every Lincoln members' lives.
                    We want to promote new hobbies, arts and crafts, and family time.</p>
                </div>
            </div>
            <h2>Resources For Website Creation</h2>
            <div className="about-resources">
                <p>- Images form free images on unsplash by various photographers.</p>
                <p>- Development Tools: ReactJS, Bootstrap, JSON Server</p>
                <p>- Deployed Using Heroku</p>
                <p>- The Net Ninja React Tutorial: github.com/iamshaunjp/Complete-React-Tutorial</p>
                <p>- Research article: https://www.bbc.com/future/article/20200710-why-clothes-are-so-hard-to-recycle</p>
            </div>
        </div>
    );
}

export default About;