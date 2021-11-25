build: test
	$(MAKE) -C front build
	$(MAKE) -C back build

test:
	$(MAKE) -C front test 
	$(MAKE) -C back test

clean:
	$(MAKE) -C front clean 
	$(MAKE) -C back clean 

