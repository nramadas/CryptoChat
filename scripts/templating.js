define(() => {
	let breakUpIdAndClasses = (idAndClasses) => {
		let id = null;
		let classes = [];
		let clauses = idAndClasses.split(".");

		for(let i = 0; i < clauses.length; i++) {
			let clause = clauses[i];

			if(clause.indexOf("#") > -1) {
				id = clause.split("#")[1];
				continue; 
			}

			classes.push(clause);
		}

		return {id, classes};
	};

	let isSelector = (selector) => {
		return selector.length > 1 && ["#", "."].indexOf(selector[0]) > -1;
	};

	let parseElementArguments = (idAndClasses, attrsOrChildren, inputChildren) => {
		let innerValue = null;
		let attrs = {};
		let children = [];

		if(isSelector(idAndClasses)) {
			let {id, classes} = breakUpIdAndClasses(idAndClasses);

			if(attrsOrChildren instanceof Array) {
				children = attrsOrChildren;
			} else {
				if(attrsOrChildren) { attrs = attrsOrChildren; }
				if(inputChildren) { children = inputChildren; };
			}
		} else {
			innerValue = idAndClasses;
			let id = null;
			let classes = null;
		}

		return {innerValue, id, classes, attrs, children};
	};

	let element = (opener, closer, idAndClasses, attrsOrChildren, inputChildren) => {
		let htmlString = "";
		let {innerValue,
			 id,
			 classes,
			 attrs,
			 children} = parseElementArguments(idAndClasses, attrsOrChildren, inputChildren);
		
		if(opener) { htmlString += "<" + opener + " "; }
		if(id) { htmlString += "id=\"" + id + "\" "; }
		if(classes) { htmlString += "class=\"" + classes.join(" ") + "\" "; }
		
		for(let key in attrs) {
			let value = attrs[key];
			htmlString += key + "=" + "\"" + value + "\" ";
		}

		htmlString = htmlString.trim();

		if(opener) { htmlString += ">"; }

		if(innerValue) {
			htmlString += innerValue;
		} else {
			for(let i = 0; i < children.length; i++) {
				htmlString += children[i];
			}
		}

		if(closer) { htmlString += "<" + closer + ">"; }

		return htmlString;
	};

	let div = (idAndClasses, attrsOrChildren, inputChildren) => {
		return element("div", "/div", idAndClasses, attrsOrChildren, inputChildren);
	};

	let text = (idAndClasses) => {
		return element(null, null, idAndClasses);
	};

	let input = (idAndClasses, attrsOrChildren, inputChildren) => {
		return element("input", "", idAndClasses, attrsOrChildren, inputChildren);
	};

	return {
		div,
		text,
		input
	};
});
