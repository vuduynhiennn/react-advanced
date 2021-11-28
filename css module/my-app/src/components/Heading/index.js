import styles from './Heading.module.css'



console.log(styles)

function Heading() {
    return (
        <p className={styles.title}>
            Hello this is a heading
        </p>
    )
}

export default Heading