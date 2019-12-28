use ::phf::{phf_set, Set};

pub static LAYOUT_TAGS: Set<&'static [u8]> = phf_set! {
	b"article",
	b"aside",
	b"blockquote",
	b"body",
	b"colgroup",
	b"datalist",
	b"dialog",
	b"div",
	b"dl",
	b"fieldset",
	b"figure",
	b"footer",
	b"form",
	b"head",
	b"header",
	b"hgroup",
	b"html",
	b"main",
	b"map",
	b"menu",
	b"nav",
	b"ol",
	b"optgroup",
	b"picture",
	b"section",
	b"select",
	b"table",
	b"tbody",
	b"tfoot",
	b"thead",
	b"tr",
	b"ul",
};
