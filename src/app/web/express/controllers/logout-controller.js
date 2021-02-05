
exports.logout = async function(request, _response) { 
	await request.session.destroy();
}
