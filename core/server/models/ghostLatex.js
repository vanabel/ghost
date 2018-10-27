(function () {
	var ghostLatex = function(){
		return [
		{
			type    : 'lang',
			filter : function (text) {
				return text.replace(/([^\\\\])~D([^$]+[^\\])~D/g,  function(match, g1, g2) {
					res = g1 + '~D' + g2.replace(/\\([^\d\w\s])/g, function (match, g) {
						if (g == '\\')
							g = '\\\\'
								return '\\\\' + g;
					}).replace(/_/g, '\\_')
					//.replace(/\*/g, '\\*')
				 	+ '~D';
					return res;
				});
			}
		},
		{
			type: 'lang',
			filter: function(text) {
				return text.replace(/```([\s\S]*?\n)```/gim, function(match, g){
					return "```" + g.replace(/\\_/g, '_') + "```";
				})
			}
		}
		]
	};
	// Server-side export
	if (typeof module !== 'undefined') {
		module.exports = ghostLatex;
	}
}());
