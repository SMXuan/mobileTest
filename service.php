<?php
	// echo "_POST";
	if($_POST){
		// echo "post";
		if($_POST['action'] == 'addwinner'){
		
			$name = htmlspecialchars($_POST['name']);
			// $name = iconv('gbk','utf-8',$name);
			$contact = htmlspecialchars($_POST['contact']);
			// $contact = iconv('gbk','utf-8',$contact);
			$province = htmlspecialchars($_POST['province']);
			// $province = iconv('gbk','utf-8',$province);
			$city = htmlspecialchars($_POST['city']);
			// $city = iconv('gbk','utf-8',$city);
			$agency = htmlspecialchars($_POST['agency']);
			// $agency = iconv('gbk','utf-8',$agency);
	
			$query = "INSERT INTO winners(name, contact, province, city, agency) ";
			$query .= "VALUES('$name', '$contact', '$province','$city','$agency');";
			//$query = "INSERT INTO 中奖者名单 SET 姓名 = '$name', 联系方式 = '$contact', 省份 = '$province', 城市 = '$city', 经销商 = '$agency'";
	
			// echo $query;
			$result = db_connection($query);
			
			if ($result) {
				$msg = "Creature added successfully";
				success($msg);
				// echo "success";
			} 
			else {
				fail('Insert failed.');
				// echo "fail";
			}
			exit;
	    }
	}
	if($_GET){
		// echo "get";
		if($_GET['action'] == 'getWinners'){

			$query = "SELECT name, contact FROM winners";
			$result = db_connection($query);
			// echo $result;
			$winners = array();
			while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
				array_push($winners,array('name' => $row['name'],'contact' => $row['contact']));
			}
			echo json_encode(array("winners" => $winners));
			exit;
		}
		// } else if($_GET['action'] == 'getLength'){

		// 	echo "asdasda";
		// 	$sql = "select count(*) from newWinner";
		// 	$result = db_connection($query);
		// 	$row = mysqli_fetch_array($result)[0];

		// 	echo json_encode(array("length" => $row));
		// 	exit;
		// }
	}

	function db_connection($query) {
		$con = mysqli_connect('127.0.0.1', 'root', '123456','getPrize');
		if (mysqli_connect_errno($con)) {
			echo "连接 MySQL 失败: " . mysqli_connect_error();
		} else {
			// echo "连接成功";
		}
		mysqli_query($con,"set names 'utf8'");
		$res = mysqli_query($con,$query);
		// echo mysqli_query($con,$query) or die(mysqli_error( $con ));
		// mysqli_query($con,"COMMIT");
		// mysqli_close($con);
		// echo $res;
		return $res;
	}
	
	function fail($message) {
		die(json_encode(array('status' => 'fail', 'message' => $message)));
	}
	function success($message) {
		die(json_encode(array('status' => 'success', 'message' => $message)));
	}
?>