
export const IsAuthenticated = () => {
	const storage = localStorage.getItem("token");
	if(storage) {
		return true;
	}
	return false;
}

export const Logout = () =>{
	localStorage.removeItem('token');
}