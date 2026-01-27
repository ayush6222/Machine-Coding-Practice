export default function Button({ url }) {

    function clickHandler() {
        window.open(url, "_blank")
    }

    return (
        <button onClick={() => clickHandler()}>Open Code</button>
    )

}