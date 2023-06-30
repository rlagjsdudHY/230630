package com.exam.rest;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BasicRestController { // @ResponseBody + @Controller

//	GET:	SELECT
	@GetMapping("restEx")
	public String restExGet() {
		return "GET	요청	처리";
	}

//	POST:	INSERT
	@PostMapping("restEx")
	public String restExPost() {
		return "POST	요청	처리";
	}

//	PUT:	UPDATE
	@PutMapping("restEx")
	public String restExPut() {
		return "PUT	요청	처리";
	}

//	GET:	DELETE
	@DeleteMapping("restEx")
	public String restExDelete() {
		return "DELETE	요청	처리";
	}

}
