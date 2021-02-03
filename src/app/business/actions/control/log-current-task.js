function logCurrentTask(message) {
	return (_, next) => {
		console.log(`Log: ${message}`);
		return next();
	};
}

module.exports = logCurrentTask;
