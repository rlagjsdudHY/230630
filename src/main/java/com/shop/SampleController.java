package com.shop;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class SampleController {
	@GetMapping("/images")
	public String images() {
		System.out.println("이미지	파일	요청");
		return "redirect:images/logo.png";
	}

	@GetMapping("/sample")
	public String sample() {
		System.out.println("HTML	파일	요청");
		return "redirect:sample.html";
	}

	@GetMapping("/test")
	public String test(Model model) {
		System.out.println("JSP	파일	요청");
		model.addAttribute("testName", "test.jsp");
		return "test";
	}
}
