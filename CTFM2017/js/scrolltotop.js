jQuery(document).ready(function() {
				jQuery(document.body).SLScrollToTop({
					'image':		'/images/top.png',
					'text':			'',
					'title':		'',
					'className':	'scrollToTop',
					'duration':		250
				});
			});
			jQuery(window).on('load',  function() {
							
						});
			;
			var modals_class = 'modal_link'; var modals_defaults = { opacity: '0.8',maxWidth: '95%',maxHeight: '95%',current: '{current} / {total}',previous: 'previous',next: 'next',close: 'close',xhrError: 'This content failed to load.',imgError: 'This image failed to load.' };