function extractTimeIST(dateString) {
	const date = new Date(dateString);

	
	const offsetIST = 5 * 60 + 30;


	const utcOffset = date.getTimezoneOffset();

	
	const istDate = new Date(date.getTime() + (offsetIST + utcOffset) * 60000);

	const hours = padZero(istDate.getHours());
	const minutes = padZero(istDate.getMinutes());

	return `${hours}:${minutes}`;
}

function padZero(number) {
	return number.toString().padStart(2, "0");
}
