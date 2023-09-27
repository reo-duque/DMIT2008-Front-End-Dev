import ListGroup from 'react-bootstrap/ListGroup';

const UI_LIBRARY_LIST = [
	{
		name: "MUI",
		url: "https://mui.com/"
	},
	{
		name: "React Bootstrap (the one we're looking at)",
		url: "https://react-bootstrap.github.io/"
	},
	{
		name: "Ant Design",
		url: "https://ant.design/docs/react/introduce"
	},
	{
		name: "Semantic UI",
		url: "https://react.semantic-ui.com/"
	}
]


export default function ComponentLibraryList() {
    return <ListGroup>
        {UI_LIBRARY_LIST.map((uiLibrary, index) => {
            //return jsx for each item in the array
            return <ListGroup.Item>
                <a href={uiLibrary.url} target="_blank">{uiLibrary.name}</a>
            </ListGroup.Item>
        })}
    </ListGroup>
}