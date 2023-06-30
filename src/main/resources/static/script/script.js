/**
 * 
 */
 
 $(function(){
 
 	// GNB 영역 패턴 시작
 	
	 	// 전체거래내역
 	$("button#dealList").click(function(){
 		location.href="/dealList";
 	});
 		// 계좌등록
 	$("button#accountReg").click(function(){
 		location.href="/accountReg";
 	});
 		// 입출금 거래등록 시작
	$("button#dealReg").click(function(){
 		location.href="/dealReg";
 	});
		// 입출금 거래등록 끝 	
 	
 	// GNB 영역 패턴 끝
 
	// 거래내역 검색버튼 시작
	$("div#searchArea button").click(function(){
	
		let accountNo = $("#accountNo").val().trim();
		if (accountNo == "") {
			alert("계좌번호를 입력해주세요.");
			$("#accountNo").focus();
		} else {
			//alert("accountNo : " + accountNo);
			location.href="searchDeal?accountNo="+accountNo;
		}
		
	});
	// 거래내역 검색버튼 끝 
	
	
	// 신규계좌등록 버튼 시작
	$("div#regBtnArea>button#regBtn").click(function(){
	
		let accountNo = $("#accountNo").val().trim();
		let depositorID = $("#depositorID").val().trim();
		if (accountNo == "") {
			alert("계좌번호를 입력해주세요");
			$("#accountNo").focus();
		} else if (depositorID == "") {
			alert("예금주 ID를 입력해주세요");
			$("#depositorID").focus();
		} else {
			$("form#accRegForm").submit();
		}
	});
	
	// 신규계좌등록 버튼 끝


	// 입출금 거래등록페이지 잔액 선택 시작	
	$("select#accountSel").change(function(){
		let data = $(this).val();
		let ary = data.split("|");
		let accountNo =  ary[0];
		let balance =  ary[1];
		$("input#accountNo").val(accountNo);
		$("input#balance").val(balance);
		
		// 천단위 구분 쉼표를 적용하고 잔액 출력하기
		balance = parseInt(balance);
		$("span#balance").text(balance.toLocaleString());
	});

	// 입출금 거래등록페이지 잔액 선택 끝
	
	
	// 입출금 거래등록 시작
	$("div#regDealBtnArea>button#regBtn").click(function(){
	
		//alert("입출금 Deal 버튼 실행 OK!!");
		// 선택된 계좌번호
		let accountSel = $("select#accountSel").val().trim();
		
		let ary = accountSel.split("|");
		let accountNo =  ary[0];
		
		// 입력한 거래액 
		let amount = $("input#amount").val().trim();
		// 현재 잔액 
		let balance = $("input#balance").val().trim();
		// 출금 여부 확인
		let withdrawChk = $("input#withdrawChk").prop("checked");
		//alert("withdrawChk : " + withdrawChk);
		
		if (accountSel == "") {
			alert("계좌번호를 선택해주세요.");
			$("select#accountSel").focus();
		} else if (amount == 0) {
			alert("거래하실 금액을 입력해주세요.");
			$("input#amount").focus();
			
		
		} else if (withdrawChk==true && parseInt(amount)>parseInt(balance)) {
		
			/*
			alert("withdrawChk : " + withdrawChk + "\namount : " + amount + "\nbalance : " + balance);
			alert("amount 자료형 : " + (typeof amount) + "\nbalance 자료형 : " + (typeof balance));
			alert("amount > balance : " + (amount>balance));
			*/
			
			alert("잔액이 부족합니다.");
			$("input#amount").focus();
			
		} else {
			
			let chkToF = confirm("계좌번호 : " + accountNo + "\n거래액 : " + amount +"\n으로 입출금 거래를 하시겠습니까?");
			
			if (chkToF) {
				//alert("OK!!");
				$("form#dealRegForm").submit();
			} else {
				alert("취소하셨습니다.");
			}
		}
		
	});
	// 입출금 거래등록 끝
	
	
	/* main#main 거래내역 상세보기 시작 */
	$("#main div.listRow").click(function(){
		let num = $(this).attr("data-link");
		//alert("num : " + num + "\n상세보기 OK");
		location.href="/dealView?num="+num;
	});
	/* main#main 거래내역 상세보기 끝 */
	
	
	/* 거래내역 메모 수정페이지 이동 */
	$("#main button#modBtn").click(function(){
		let num = $(this).val().trim();
		location.href="/dealMod?num="+num;
	});
	
	
	/* 거래내역 메모 수정 실행하기 */
	$("#main button#modProcBtn").click(function(){
		$("form#dealModForm").submit();
	});
	
	
	
	
 });
 
 
 
 
 
 
 
 
 
 