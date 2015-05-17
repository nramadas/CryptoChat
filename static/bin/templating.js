"use strict";

define(function () {
	var breakUpIdAndClasses = function breakUpIdAndClasses(idAndClasses) {
		var id = null;
		var classes = [];
		var clauses = idAndClasses.split(".");

		for (var i = 0; i < clauses.length; i++) {
			var clause = clauses[i];

			if (clause.indexOf("#") > -1) {
				id = clause.split("#")[1];
				continue;
			}

			classes.push(clause);
		}

		return { id: id, classes: classes };
	};

	var isSelector = function isSelector(selector) {
		return selector.length > 1 && ["#", "."].indexOf(selector[0]) > -1;
	};

	var parseElementArguments = function parseElementArguments(idAndClasses, attrsOrChildren, inputChildren) {
		var innerValue = null;
		var attrs = {};
		var children = [];

		if (isSelector(idAndClasses)) {
			var _breakUpIdAndClasses = breakUpIdAndClasses(idAndClasses);

			var id = _breakUpIdAndClasses.id;
			var classes = _breakUpIdAndClasses.classes;

			if (attrsOrChildren instanceof Array) {
				children = attrsOrChildren;
			} else {
				if (attrsOrChildren) {
					attrs = attrsOrChildren;
				}
				if (inputChildren) {
					children = inputChildren;
				};
			}
		} else {
			innerValue = idAndClasses;
			var id = null;
			var classes = null;
		}

		return { innerValue: innerValue, id: id, classes: classes, attrs: attrs, children: children };
	};

	var element = function element(opener, closer, idAndClasses, attrsOrChildren, inputChildren) {
		var htmlString = "";

		var _parseElementArguments = parseElementArguments(idAndClasses, attrsOrChildren, inputChildren);

		var innerValue = _parseElementArguments.innerValue;
		var id = _parseElementArguments.id;
		var classes = _parseElementArguments.classes;
		var attrs = _parseElementArguments.attrs;
		var children = _parseElementArguments.children;

		if (opener) {
			htmlString += "<" + opener + " ";
		}
		if (id) {
			htmlString += "id=\"" + id + "\" ";
		}
		if (classes) {
			htmlString += "class=\"" + classes.join(" ") + "\" ";
		}

		for (var key in attrs) {
			var value = attrs[key];
			htmlString += key + "=" + "\"" + value + "\" ";
		}

		htmlString = htmlString.trim();

		if (opener) {
			htmlString += ">";
		}

		if (innerValue) {
			htmlString += innerValue;
		} else {
			for (var i = 0; i < children.length; i++) {
				htmlString += children[i];
			}
		}

		if (closer) {
			htmlString += "<" + closer + ">";
		}

		return htmlString;
	};

	var div = function div(idAndClasses, attrsOrChildren, inputChildren) {
		return element("div", "/div", idAndClasses, attrsOrChildren, inputChildren);
	};

	var text = function text(idAndClasses) {
		return element(null, null, idAndClasses);
	};

	var input = function input(idAndClasses, attrsOrChildren, inputChildren) {
		return element("input", "", idAndClasses, attrsOrChildren, inputChildren);
	};

	return {
		div: div,
		text: text,
		input: input
	};
});