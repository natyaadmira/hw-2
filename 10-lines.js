function randomlines(quantity){
	var count = 0
	while (count < quantity){
		line(random(width), random(height), random(width), random(height));
		count = count + 1
	}
}
randomlines(10)
