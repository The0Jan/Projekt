import React, { FunctionComponent, useState } from 'react';
import { LoadFromDB, SaveToDB } from './DBFun';

type AppInterfaceProps = {
    text: string;
};

export const AppInterface: FunctionComponent<AppInterfaceProps> = ({text}) => {
	const [dbData, setDBData] = useState(["a", "a", "a"]);
	const [input, setDBInput] = useState("");

	const onClickLoad = () => {
		LoadFromDB().then((data: string[]) => {
			setDBData(data);
		});
	};

	const onClickSave = () => {
		SaveToDB(input).then((ret: string) => {
			alert(ret);
		});
		//onClickLoad();
	};

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
		<button onClick={() => onClickSave()}>
			Save
		</button>
	);

	return <>Abba
		<br/>
		{loadButton}
		{saveForm}
		{saveButton}
		<br/>
		{dbData}
	</>;
}

export default AppInterface;
