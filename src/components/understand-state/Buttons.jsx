const Buttons = ({increment, decrement}) => {
    return (
        <>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
        </>
    )
}

export default Buttons;