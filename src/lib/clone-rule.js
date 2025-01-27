import postcss from "postcss";

export default (decl, dir) => {
	const rule =
		Object(decl.parent).type === "rule"
			? decl.parent
					.clone({
						raws: {},
					})
					.removeAll()
			: postcss.rule({ selector: "&" });

	rule.selectors = rule.selectors.map((selector) => {
		return Object(decl.parent).type === "root" || selector.includes("&")
			? `[dir="${dir}"] ${selector}`
			: `[dir="${dir}"] & ${selector}`;
	});

	return rule;
};
