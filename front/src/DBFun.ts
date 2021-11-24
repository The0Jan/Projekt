export const FetchAPI = async (address: string) => {
	return fetch(address).then(res => res.json());
};
