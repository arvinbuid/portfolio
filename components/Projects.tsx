import { Dispatch, SetStateAction } from "react";
import styles from "./projects.module.css";

interface ProjectProps {
    index: number;
    title: string;
    link: string;
    setModal: Dispatch<SetStateAction<{ active: boolean; index: number }>>;
}

const Projects = ({ index, title, link, setModal }: ProjectProps) => {
    return (
        <div
            onMouseEnter={() => { setModal({ active: true, index: index }) }}
            onMouseLeave={() => { setModal({ active: false, index: index }) }}
            className={styles.project}
        >
            <div>
                <h2><a href={link} target="_blank" onClick={(e) => e.stopPropagation()}>{title}</a></h2>
                <p>PERSONAL PROJECT</p>
            </div>
        </div>
    );
}

export default Projects;