const About =({image = "https://via.placeholder.com/215", about}) => {
    return (
<aside>
    <img src={image} alt="Blog Logo"/>
    <p>{about}</p>
</aside>
)}

export default About