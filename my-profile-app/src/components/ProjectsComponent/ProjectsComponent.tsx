import styles from './ProjectsComponent.module.css';
import virtualMapDemoImage from '../../assets/3rd year project/project_demo.png';
import deckedOutDemoImage from '../../assets/1st year project/project_demo.png';

const ProjectsComponent = () => {
    return (
        <section id="projects">
            <h1 className={styles.header}>Projects</h1>
            <div className={styles.projectWrapper}>
                <h2 className={styles.subheader}>
                <a className={styles.whiteLink} target="_blank" href={"https://github.com/k11111t/3rd-year-project"}>Virtual Map of Kilburn</a>
                </h2>
                <p className={styles.description}>
                    This is a virtual map application developed using Javascript, Node.js, PHP, SQL. 
                    It allows users to explore different locations in the Computer Science building of the University of Manchester.
                    The project uses Mapbox API for displaying maps and has a clean and responsive UI.
                    The user can view information, search for rooms, and find shortest path between them.
                </p>
                <div className={styles.demoImageDiv}>
                    <img className={styles.demoImage} src={virtualMapDemoImage}/>
                </div>
            </div>
            
            <div className={styles.projectWrapper}>
                <h2 className={styles.subheader}>
                <a className={styles.whiteLink} target="_blank" href={"https://github.com/k11111t/1st-year-project"}>Decked Out</a>
                </h2>
                <p className={styles.description}>
                    This is a multiplayer card game developed using Node.js, PHP, Javascript, SQL. 
                    It allows users to play Blackjack with friends in real-time. 
                    The project uses WebSocket for real-time communication and has a clean and responsive UI.
                </p>
                <div className={styles.demoImageDiv}>
                    <img className={styles.demoImage} src={deckedOutDemoImage}/>
                </div>
            </div>
        </section>
    );
};

export default ProjectsComponent;