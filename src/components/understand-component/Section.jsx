function Section({title, items}) {
    const item = items.map(item => <li>{item}</li>)
    return (
        <section>
            <h2>{title}</h2>
            <ul>
                {item}
            </ul>
        </section>
    )
}

export default Section;