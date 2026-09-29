import "./App.css";

function Hobbies() {
    const hobbies = [
        {
            name: "Gaming",
            image: "/gaming.jpg",
            description: "I enjoy playing games during my free time."
        },
        {
            name: "Music",
            image: "/music.jpg",
            description: "I love listening to music and discovering new songs."
        },
        {
            name: "Reading",
            image: "/reading.webp",
            description: "Reading helps me learn new things and relax."
        },
        {
            name: "Movies",
            image: "/movies.webp",
            description: "I love watching movies and exploring different genres."
        }
    ];

    return (
        <div className="hobbies">
            <h1>My Hobbies</h1>

            <div className="hobby-container">
                {hobbies.map((hobby) => (
                    <div className="hobby-card" key={hobby.name}>
                        <img src={hobby.image} alt={hobby.name} />
                        <h2>{hobby.name}</h2>
                        <p>{hobby.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hobbies;