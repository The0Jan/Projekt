import React, { FunctionComponent, useState, useEffect } from 'react';
import { FetchAPI } from './DBFun';

type AppInterfaceProps = {};

export const AppInterface: FunctionComponent<AppInterfaceProps> = () => {
	const [dbData, setDBData] = useState(["No userinos yet"]);
	const [input, setDBInput] = useState("");

	const onClickLoad = () => {
		FetchAPI("http://127.0.0.1:8000/")
		.then((data: any) => {
			setDBData(data.map((i: any) => i.id));
		},
		(error) => {
			console.log(error);
		});
	};

	const onClickSave = () => {
		FetchAPI("http://127.0.0.1:8000/user/")
		.then((data: any) => {
			//do nothing
		},
		(error) => {
			console.log(error);
		});
	};

	useEffect(() => onClickLoad(), []);

	let loadButton = (
		<button onClick={onClickLoad}>
			Load
		</button>
	);

	let saveForm = (
		<form>
			<input type="text" value={input || ""} onChange={(e) => setDBInput(e.target.value)}></input>
		</form>
	);

	let saveButton = (
		<button onClick={onClickSave}>
			Save
		</button>
	);

	return <>Abba
		<br/>
		{loadButton}
		{saveForm}
		{saveButton}
		<br/>
		{dbData.map(d => d + " ")}
	</>;
}

export default AppInterface;
