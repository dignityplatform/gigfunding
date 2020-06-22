import Typed from 'typed'

window.addEventListener('load', () => {
	if (document.querySelector('#typed_slogan')) {
		const options = {
			stringsElement: '#typed_slogan_strings',
			typeSpeed: 25,
			startDelay: 0,
			backSpeed: 25,
			backDelay: 800,
			loop: true,
			loopCount: Infinity,
			showCursor: false,
			attr: null,
			contentType: 'text'
		}
		let typedSlogan = new Typed('#typed_slogan', options)
	}	
})
