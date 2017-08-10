$.fn.thesaurusize = function (options) 
{
	$(this).on('dblclick', function ()
	{
        var word = '';
        if (window.getSelection) {
            word = window.getSelection().toString();
        } else if (document.selection && document.selection.type!="Control") {
            word = document.selection.createRange().text;
        }
        word = word.trim();
        if (word!='') {
            window.open("http://urduthesaurus.com/word?q="+word);
        }
	});
};
