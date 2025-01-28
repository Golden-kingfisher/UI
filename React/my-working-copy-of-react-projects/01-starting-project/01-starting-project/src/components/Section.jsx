export default function Section({title, children, id,...props}) {
    return (
        <section id={id}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}