function domainName(url) {
	if (url.includes('//')) {
		url = url.split('//');
		url = url[1];
	}
	if (url.includes('/')) {
		url = url.split('/');
		url = url[0];
	}
	if (url.includes('www')) {
		url = url.slice(4);
	}
	url = url.split('.');
	return url[0];
}
console.log(domainName('http://google.com'));
console.log(domainName('http://google.co.jp'));
console.log(domainName('www.xakep.ru'));
console.log(domainName('https://youtube.com'));
