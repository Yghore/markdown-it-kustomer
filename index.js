module.exports = function kustomer(md, options)
{
	// Remember old renderer, if overridden, or proxy to default renderer
	var defaultRender = md.renderer.rules.text || function(tokens, idx, options, env, self) {
		return self.renderToken(tokens, idx, options);
	};

  	md.renderer.rules.text = function (tokens, idx, options, env, self) {
		var pattern = [{pattern: "\\pagebreak", renderer: '<div style="page-break-after:always;"></div>'}, {pattern: "\\test", renderer: '<div style="border-top: 5px solid black">'}]
		for (const el of pattern) {
		
			if(tokens[idx].content == el.pattern)
			{
				return el.renderer;
			}
		};


		return defaultRender(tokens, idx, options, env, self);

	}
}