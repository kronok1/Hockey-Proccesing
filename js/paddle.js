const Paddle = function (player, color){
	
	const c = color
	const w = 15
	const h = 90
	const p = player  
					// ? es un if corto   : en caso constrario
	let x = p === 1 ? 0 : width - w 
	const speed = 15
	
	const UP = -1
	const DOWN = 1
	const LEFT = -2
	const RIGHT = 2

	let y = Math.floor(height / 2)
	let score = 0

	const getX = function(){
		return x
	}
	const getY = function(){
		return y
	}

	const getW = function(){
		return w
	}

	const getH = function(){
		return h
	}
	const getScore = function(){
		return score
	}

	const draw = function (){
		rectMode(CORNER)
		noStroke()
		fill(c)
		rect(x, y, w, h)
		
	}

	const move = function(dir){
		if(edge(dir))
		{
			if(dir==UP || dir==DOWN)
				y += (speed * dir)
			else
				x += (5 * dir)
		}
	}

	const edge = function(dir){
		switch(p)
		{
			case 1:
				return (dir === UP && y > 0 || dir === DOWN && y < height - h || dir === LEFT && x>0 || dir === RIGHT && x < width/2-w)
			break;

			case 2:
				return (dir === UP && y > 0 || dir === DOWN && y < height - h || dir === LEFT && x>width/2 || dir === RIGHT && x < width-w)
			break;
		}
	}

	const updateScore = function(){
		score++
	}

	return{
		draw,
		move,
		getH,
		getW,
		getX,
		getY,
		getScore,
		updateScore
	}

}