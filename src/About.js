import {useEffect} from "react";

const About = () => {
    useEffect( () => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <div className="about">
            <h2>Our Mission</h2>
            <p>Lincoln's Resale is a shop started back in 2020 during COVID-19 to promote
            healthy activities during a hard time. We dedicate our time and efforts to make the
            Lincoln community a better and safer place to live.</p>
            <h2>Meet the Owners</h2>
            <img src="/images/owners.jpg" alt="A family of six on a hiking trail"/>
            <h2>Resources For Website Creation</h2>
            <div className="about-resources">
                <p>- Images form free images on unsplash by various photographers.</p>
                <p>- Development Tools: ReactJS, Bootstrap, JSON Server</p>
                <p>- The Net Ninja React Tutorial: github.com/iamshaunjp/Complete-React-Tutorial</p>
            </div>
        </div>
    );
}

export default About;