$(function(){
	var flag = false;
	move = function(n,dir){
		flag = true;
		dir = dir?dir:'left';
		var active = $('.carsousel .active');
		active.addClass(dir)
		.delay(600)
		.queue(function(){
			flag = false;
			$(this).removeClass('active '+dir).dequeue();
		});
		list.removeClass('active');
		var op = (dir === 'left')?'right':'left';
		$(n).addClass(op);
		$(n).get(0).offsetWidth;
		$(n).removeClass(op);
		$(n).addClass('active');
		list.eq(items.index($(n))).addClass('active');
	}
	moveUD = function(n,dir){
		flag = true;
		dir = dir?dir:'up';
		var active = $('.carsousel .active');
		active.addClass(dir)
		.delay(600)
		.queue(function(){
			flag = false;
			$(this).removeClass('active '+dir).dequeue();
		});
		list.removeClass('active');
		var op = (dir === 'up')?'down':'up';
		$(n).addClass(op);
		$(n).get(0).offsetWidth;
		$(n).removeClass(op);
		$(n).addClass('active');
		list.eq(items.index($(n))).addClass('active');
	}
	var btnL = $('.btnL');
	var btnR = $('.btnR');
	var btnU = $('.btnU');
	var btnD = $('.btnD');
	var items = $('.carsousel li');
	var list = $('.indicator li');
	// var index =1;
	btnR.on('click',function(){
		if(flag){
			return;
		}
		if($('.carsousel .active').next().length == 0){
			var next = items.eq(0);
		}else{
			var next = $('.carsousel .active').next();
		}
		move(next,'left');
	});
	btnL.on('click',function(){
		if(flag){
			return;
		}
		if($('.carsousel .active').prev().length == 0){
			var next = items.eq(-1);
		}else{
			var next = $('.carsousel .active').prev();
		}
		move(next,'right');
	});
	btnU.on('click',function(){
		if(flag){
			return;
		}
		if($('.carsousel .active').next().length == 0){
			var next = items.eq(0);
		}else{
			var next = $('.carsousel .active').next();
		}
		moveUD(next,'up');
	});
	btnD.on('click',function(){
		if(flag){
			return;
		}
		if($('.carsousel .active').prev().length == 0){
			var next = items.eq(-1);
		}else{
			var next = $('.carsousel .active').prev();
		}
		moveUD(next,'down');
	});

	list.on('click',function(){
		if($(this).index() > items.index($('.carsousel .active'))){
			var dir = 'left';
		}else{
			var dir = 'right';
		}
		list.removeClass('active');
		list.eq($(this).index()).addClass('active');
		var next = items.eq($(this).index());
		move(next,dir);
	});



	var t = setInterval(function(){
		btnR.trigger('click');
	},2000);
	$('.box').on('mouseenter',function(){
		clearInterval(t);
	});
	$('.box').on('mouseleave',function(){
		t = setInterval(function(){
			btnR.trigger('click');
		},2000)
	});



	var heights = $('.shangxia li').eq(0).innerHeight();

	$(document).on('mousewheel',function(e){
		e.preventDefault();
		if(e.originalEvent.wheelDelta>0){
			btnD.trigger('click');
		}else if(e.originalEvent.wheelDelta<0){
			btnU.trigger('click');
		}
	});

})