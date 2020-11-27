
exports.index = (request, response) => { 
	response.render('pages/fixed-costs/index');
}

exports.create = (request, response) => { 
	response.render('pages/fixed-costs/create');
}
