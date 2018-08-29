<?php
	if($_POST){
		echo "post";
		if($_POST['action'] == 'addwinner'){
		
			$name = htmlspecialchars($_POST['name']);
			$contact = htmlspecialchars($_POST['contact']);
			$province = htmlspecialchars($_POST['province']);
			$city = htmlspecialchars($_POST['city']);
			$agency = htmlspecialchars($_POST['agency']);
	
			$query = "INSERT INTO winners(name, contact, province, city, agency) ";
			$query .= "VALUES ('$name', '$contact', '$province','$city','$agency') ";
			//$query = "INSERT INTO 中奖者名单 SET 姓名 = '$name', 联系方式 = '$contact', 省份 = '$province', 城市 = '$city', 经销商 = '$agency'";
	
			$result = db_connection($query);
			echo "php文件";
			if ($result) {
				$msg = "Creature added successfully";
				success($msg);
				echo "success";
			} 
			else {
				fail('Insert failed.');
				echo "fail";
			}
			exit;
	    }
	}
	if($_GET){
		if($_GET['action'] == 'getWinners'){
			$query = "SELECT name, contact FROM winners";
			$result = db_connection($query);
			$winners = array();
			while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
				array_push($winners,array('name' => $row['name'],'contact' => $row['contact']));
			}
			echo json_encode(array("winners" => $winners));
			exit;
		}	
	}


	function db_connection($query) {
		$con = mysqli_connect('127.0.0.1', 'root', '123456','getPrize');
		if (mysqli_connect_errno($con)) { 
			echo "连接 MySQL 失败: " . mysqli_connect_error(); 
		}else{
			echo "连接成功";
		}
		return mysqli_query($con,$query);
	}
	
	function fail($message) {
		die(json_encode(array('status' => 'fail', 'message' => $message)));
	}
	function success($message) {
		die(json_encode(array('status' => 'success', 'message' => $message)));
	}
?>