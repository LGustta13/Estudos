init:
	pip	install	pipenv
	pipenv	--python	3.10
	pipenv	shell

install:
	pipenv	install	--dev
	
run:
	pipenv	run start

clean:
	rm	-rf	__pycache__

test:
	pipenv	run	pytest	tests