export default function ComponentWrapper({textColor, children}) {
    return <div 
        id="component-wrapper"
        style={{
            color: textColor
        }}
    >
        {children}
    </div>
}