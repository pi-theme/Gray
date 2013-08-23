var content1 = 'وب سایت شما هویت شما در جامعه مجازی است، امروزه یک وب سایت علاوه بر معرفی توانمندی های شما، ابزاری است برای تجارت و تعامل با دیگران، همچنین خدمات تحت وب به شما این امکان را می دهد که بخش قابل توجی از ترافیک کاری خود را به فضای مجازی منتقل نموده و در زمان و در هر نقطه ای به اطلاعات و ابزارهای خود دسترسی داشته باشید';
		var content2 = 'با همه گیر شدن استفاده از تلفن های هوشمند، کاربران خدمات مورد نیاز خود را از طریق نرم افزار های نصب شده بر روی تلفن خود، همیشه به همراه دارند. اگر شما خدماتی را ارائه می دهید که در دسترس بودنشان برای کاربران و مشتریان شما ضروری است ، با عرضه نرم افزار تلفن همراه مخصوص خود، این خدمات همیشه همراه کاربران شما خواهد بود.';
		var content3 = 'همراه مشتریان قبل از اینکه با کیفت محصولات و خدمات شما آشنا شوند، جذب ظاهر و طراحی آن محصولات و خدمات قرار می گیرند. از این رو طراحی زیبا و کاربر پسند وب سایت ، نرم افزار تحت وب و نرم افزار تلفن همراه ، و همچنین بنر ، پستر ، لوگو ، آیکن و دیگر نماد های گرافیکی مورد استفاده شما نقش بسزایی در جلب توجه مشتریان شما خواهد داشت.';
		var content4 = 'تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست تست';
		
		var title1 ='طراحی و توسعه وب';
		var title2 ='نرم افزار تلفن همراه';
		var title3 ='طراحی و گرافیک';
		var title4 ='شبکه و سرور';
		
		$('#pi-popover-1')
		.attr('data-toggle', 'popover')
		.attr('data-content', content1)
		.attr('data-original-title', title1)
		.attr('data-html', 'true')
		.attr('data-placement', 'bottom')
		.popover().click(function(e) {
        $('#pi-popover-2').popover('hide');
        $('#pi-popover-3').popover('hide');
        $('#pi-popover-4').popover('hide');
   });
		$('#pi-popover-2')
		.attr('data-toggle', 'popover')
		.attr('data-content', content2)
		.attr('data-original-title', title2)
		.attr('data-html', 'true')
		.attr('data-placement', 'bottom')
		.popover().click(function(e) {
        $('#pi-popover-1').popover('hide');
        $('#pi-popover-3').popover('hide');
        $('#pi-popover-4').popover('hide');
   });
		$('#pi-popover-3')
		.attr('data-toggle', 'popover')
		.attr('data-content', content3)
		.attr('data-original-title', title3)
		.attr('data-html', 'true')
		.attr('data-placement', 'bottom')
		.popover().click(function(e) {
        $('#pi-popover-1').popover('hide');
        $('#pi-popover-2').popover('hide');
        $('#pi-popover-4').popover('hide');
   });
		$('#pi-popover-4')
		.attr('data-toggle', 'popover')
		.attr('data-content', content4)
		.attr('data-original-title', title4)
		.attr('data-html', 'true')
		.attr('data-placement', 'bottom')
		.popover().click(function(e) {
        $('#pi-popover-1').popover('hide');
        $('#pi-popover-2').popover('hide');
        $('#pi-popover-3').popover('hide');
   });