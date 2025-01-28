export default function TabButton({ children, isSelected, ...props}) {
    function handleClick() {
        console.log("Hello!!!");
    }
    console.log("TAB BUTTON COMPONENT EXECUTING");
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
        </li>
    )
}
