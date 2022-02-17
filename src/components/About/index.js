import coverImage from "../../assets/cover/cover-image.jpg";

const About = () => (
    <section className="my-5">
        <h1 id="about">Whoz am I?</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
)

export default About;