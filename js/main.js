$(document).ready(function(){

    /*省份城市选择*/
    var pc = new Object();
    pc['北京市'] = new Array('朝阳区', '海淀区', '通州区', '房山区', '丰台区', '昌平区', '大兴区', '顺义区', '西城区', '延庆县', '石景山区', '宣武区', '怀柔区', '崇文区', '密云县', '东城区', '平谷区', '门头沟区');
    pc['广东省'] = new Array('东莞市', '广州市', '中山市', '深圳市', '惠州市', '江门市', '珠海市', '汕头市', '佛山市', '湛江市', '河源市', '肇庆市', '清远市', '潮州市', '韶关市', '揭阳市', '阳江市', '梅州市', '云浮市', '茂名市', '汕尾市');
    pc['山东省'] = new Array('济南市', '青岛市', '临沂市', '济宁市', '菏泽市', '烟台市', '淄博市', '泰安市', '潍坊市', '日照市', '威海市', '滨州市', '东营市', '聊城市', '德州市', '莱芜市', '枣庄市');
    pc['江苏省'] = new Array('苏州市', '徐州市', '盐城市', '无锡市', '南京市', '南通市', '连云港市', '常州市', '镇江市', '扬州市', '淮安市', '泰州市', '宿迁市');
    pc['河南省'] = new Array('郑州市', '南阳市', '新乡市', '安阳市', '洛阳市', '信阳市', '平顶山市', '周口市', '商丘市', '开封市', '焦作市', '驻马店市', '濮阳市', '三门峡市', '漯河市', '许昌市', '鹤壁市', '济源市');
    pc['上海市'] = new Array('松江区', '宝山区', '金山区', '嘉定区', '南汇区', '青浦区', '浦东新区', '奉贤区', '徐汇区', '静安区', '闵行区', '黄浦区', '杨浦区', '虹口区', '普陀区', '闸北区', '长宁区', '崇明县', '卢湾区');
    pc['河北省'] = new Array('石家庄市', '唐山市', '保定市', '邯郸市', '邢台市', '河北区','沧州市', '秦皇岛市', '张家口市', '衡水市', '廊坊市', '承德市');
    pc['浙江省'] = new Array('温州市', '宁波市', '杭州市', '台州市', '嘉兴市', '金华市', '湖州市', '绍兴市', '舟山市', '丽水市', '衢州市');
    pc['香港'] = new Array('香港');
    pc['陕西省'] = new Array('西安市', '咸阳市', '宝鸡市', '汉中市', '渭南市', '安康市', '榆林市', '商洛市', '延安市', '铜川市');
    pc['湖南省'] = new Array('长沙市', '邵阳市', '常德市', '衡阳市', '株洲市', '湘潭市', '永州市', '岳阳市', '怀化市', '郴州市', '娄底市', '益阳市', '张家界市', '湘西州');
    pc['重庆市'] = new Array('江北区', '渝北区', '沙坪坝区', '九龙坡区', '万州区', '永川市', '南岸区', '酉阳县', '北碚区', '涪陵区', '秀山县', '巴南区', '渝中区', '石柱县', '忠县', '合川市', '大渡口区', '开县', '长寿区', '荣昌县', '云阳县', '梁平县', '潼南县', '江津市', '彭水县', '綦江县', '璧山县', '黔江区', '大足县', '巫山县', '巫溪县', '垫江县', '丰都县', '武隆县', '万盛区', '铜梁县', '南川市', '奉节县', '双桥区', '城口县');
    pc['福建省'] = new Array('漳州市', '厦门市', '泉州市', '福州市', '莆田市', '宁德市', '三明市', '南平市', '龙岩市');
    pc['天津市'] = new Array('和平区', '北辰区', '河北区','河西区', '西青区', '津南区', '东丽区', '武清区', '宝坻区', '红桥区', '大港区', '汉沽区', '静海县', '塘沽区', '宁河县', '蓟县', '南开区', '河东区');
    pc['云南省'] = new Array('昆明市', '红河州', '大理州', '文山州', '德宏州', '曲靖市', '昭通市', '楚雄州', '保山市', '玉溪市', '丽江地区', '临沧地区', '思茅地区', '西双版纳州', '怒江州', '迪庆州');
    pc['四川省'] = new Array('成都市', '绵阳市', '广元市', '达州市', '南充市', '德阳市', '广安市', '阿坝州', '巴中市', '遂宁市', '内江市', '凉山州', '攀枝花市', '乐山市', '自贡市', '泸州市', '雅安市', '宜宾市', '资阳市', '眉山市', '甘孜州');
    pc['广西'] = new Array('贵港市', '玉林市', '北海市', '南宁市', '柳州市', '桂林市', '梧州市', '钦州市', '来宾市', '河池市', '百色市', '贺州市', '崇左市', '防城港市');
    pc['安徽省'] = new Array('芜湖市', '合肥市', '六安市', '宿州市', '阜阳市', '安庆市', '马鞍山市','蚌埠市', '淮北市', '淮南市', '宣城市', '黄山市', '铜陵市', '亳州市', '池州市', '巢湖市', '滁州市');
    pc['海南省'] = new Array('三亚市', '海口市', '琼海市', '文昌市', '东方市', '昌江县', '陵水县', '乐东县', '保亭县', '五指山市', '澄迈县', '万宁市', '儋州市', '临高县', '白沙县', '定安县', '琼中县', '屯昌县');
    pc['江西省'] = new Array('南昌市', '赣州市', '上饶市', '吉安市', '九江市', '新余市', '抚州市', '宜春市', '景德镇市', '萍乡市', '鹰潭市');
    pc['湖北省'] = new Array('武汉市', '宜昌市', '襄樊市', '荆州市', '恩施州', '黄冈市', '孝感市', '十堰市', '咸宁市', '黄石市', '仙桃市', '天门市', '随州市', '荆门市', '潜江市', '鄂州市', '神农架林区');
    pc['山西省'] = new Array('太原市', '大同市', '运城市', '长治市', '晋城市', '忻州市', '临汾市', '吕梁市', '晋中市', '阳泉市', '朔州市');
    pc['辽宁省'] = new Array('大连市', '沈阳市', '丹东市', '辽阳市', '葫芦岛市', '锦州市', '朝阳市', '营口市', '鞍山市', '抚顺市', '阜新市', '盘锦市', '本溪市', '铁岭市');
    pc['台湾省'] = new Array('台北市', '高雄市', '台中市', '新竹市', '基隆市', '台南市', '嘉义市');
    pc['黑龙江'] = new Array('齐齐哈尔市', '哈尔滨市', '大庆市', '佳木斯市', '双鸭山市', '牡丹江市', '鸡西市', '黑河市', '绥化市', '鹤岗市', '伊春市', '大兴安岭地区', '七台河市');
    pc['内蒙古'] = new Array('赤峰市', '包头市', '通辽市', '呼和浩特市', '鄂尔多斯市', '乌海市', '呼伦贝尔市', '兴安盟', '巴彦淖尔盟', '乌兰察布盟', '锡林郭勒盟', '阿拉善盟');
    pc['澳门'] = new Array('澳门');
    pc['贵州省'] = new Array('贵阳市','黔东南州','黔南州','遵义市','黔西南州','毕节地区','铜仁地区','安顺市','六盘水市');
    pc['甘肃省'] = new Array('兰州市', '天水市', '庆阳市', '武威市', '酒泉市', '张掖市', '陇南地区', '白银市', '定西地区', '平凉市', '嘉峪关市', '临夏回族自治州', '金昌市', '甘南州');
    pc['青海省'] = new Array('西宁市', '海西州', '海东地区', '海北州', '果洛州', '玉树州', '黄南藏族自治州');
    pc['新疆'] = new Array('乌鲁木齐市', '伊犁州', '昌吉州', '石河子市', '哈密地区', '阿克苏地区', '巴音郭楞州', '喀什地区', '塔城地区', '克拉玛依市', '和田地区', '阿勒泰州', '吐鲁番地区', '阿拉尔市', '博尔塔拉州', '五家渠市', '克孜勒苏州', '图木舒克市');
    pc['西藏区'] = new Array('拉萨市', '山南地区', '林芝地区', '日喀则地区', '阿里地区', '昌都地区', '那曲地区');
    pc['吉林省'] = new Array('吉林市', '长春市', '白山市', '延边州', '白城市', '松原市', '辽源市', '通化市', '四平市');
    pc['宁夏'] = new Array('银川市', '吴忠市', '中卫市', '石嘴山市', '固原市');
    (function(){
        var pHtmlStr = '';
        for(var name in pc){
            pHtmlStr = pHtmlStr + '<option>'+name+'</option>';
        }
        $("#province").html(pHtmlStr);
        $("#province").change(function(){
            var pname = $("#province option:selected").text();
            var pHtmlStr = '';
            var cityList = pc[pname];
            for(var index in cityList){
                pHtmlStr = pHtmlStr + '<option>'+cityList[index]+'</option>';
            }
            $("#city").html(pHtmlStr);
        });
        $("#province").change();
    })();

    /*var htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
    document.documentElement.style.fontSize = htmlwidth / 25 + "px";*/
	
	var agency = new Array("大众","福特","奥迪","宝马","别克","雪佛兰","奔驰","标致","雪铁龙","路虎",
	                         "Jeep","保时捷","丰田","现代","本田","日产","起亚","马自达","铃木","三菱",
	                         "雷克萨斯","斯巴鲁","英菲尼迪","比亚迪","吉利","奇瑞","奔腾","中华","海马",
	                         "一汽");
	
	var $select = $("#agency");
	var append_select = $("#first");
    var code = "";
    var sum = 30;
   // var get_prize = false;
	for(var i = 0; i < agency.length; i++){
		$select.append("<option value = '" + agency[i] + "'>" + agency[i] + "</option");
	}

	//获取验证码
    $("#code").click(function(){
        for(i = 0; i < 6; i++){
            code += Math.round(Math.random() * 9);
        }
        alert("您的验证码为：" + code);

    });

	$("#square").click(function(){
		    var selected = $("#selected");
		    if(selected.length > 0){
		    	selected.remove();
			}
			else{
                append_select.append("<div id = 'selected'><img id = 'chk' src = 'img/select.png' alt = 'selected' /></div>");
			}
	       // append_select.append("<div id = 'selected'><img src = 'img/select.png' alt = 'selected' /></div>");
	        
    });
    /*$("form").submit(function(){
        return false;
    })*/
	
	$("#submit_btn").click(function(){
        if($("#name").val() == "" || $("#contact").val() == "" || $("#vertification").val() == "" ||
            $("#province").val() == "" || $("#city").val() == "" || $("#agency").val() == ""){
            alert("请完善信息！")
        }
        else if($("#vertification").val() != code && $("#vertification").val() != ""){
            alert("请输入正确的验证码");
            code = "";
            $("#vertification").value == "";
        }
        var obj = document.getElementById("selected");
        if (!obj){
            alert("请先同意协议内容！");
        }
        
        //信息正确且表单不为空
        else if($("#name").val() != "" && $("#contact").val() != "" && $("#vertification").val() != "" ){
            var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
           $.getJSON("service.php?action=getWinners", function(json){
                if(json.winners.length >= 0){
                    var get_prize = true;
                    $.each(json.winners,function(){
                        var name = this['name'];
                        var contact = this['contact'];
                        if(name == $("#name").val() && contact == $("#contact").val()){
                            alert("您已中奖，请勿重复领奖！");
                            clearInputs();
                            get_prize = false;
                        }
                   
                    });
                    if(get_prize){
                        //alert(get_prize);
                        var result =  Math.round(Math.random() * 10);
                       // alert(result);
                        var total = add();//获取表行数
                        //(total);
                        //表行数<30,可以继续向数据库添加数据
                        if(total < sum){
                            if(result % 2 == 0){
                                 //添加数据
                                 var datas = $("#draw_form").serializeArray();
                                //console.log(datas);
                                $.ajax({
                                    url: "/wanda/service.php?action=addwinner",
                                    async: false,//这一步是非常重要的，作用是设置为同步执行
                                    type: "POST",
                                    data: datas,
                                    success: function (json) {
                                        console.log(json);
                                        //alert("success");
                                    }
                                });
                                // $.post("service.php?action=addwinner", data, function(json){
                                //     alert(json);
                                //     alert("adsd");
                                //     if (json.status == "fail") {
                                //         alert(json.message);
                                //     }
                                //     if (json.status == "success") {
                                //         alert(json.message);
                                //         clearInputs();
                                //     }
                                // }, "json");
                               //跳转获奖页面

                                if (is_mobi) {
                                    window.location.href = "prize.html";
                                }
                                else
                                    window.open("prize.html");


                            }
                            else{
                                if (is_mobi) {
                                    window.location.href = "poor.html";
                                }
                                else
                                    window.open("poor.html");
                                //indow.location.href ="poor.html";
                            }
                        }
                        else{
                            if (is_mobi) {
                                window.location.href = "finish.html";
                            }
                            else
                                window.open("finish.html");
                        }
                            //window.location.href ="finish.html";
                    }//页面之间的交互
                    
                }
           })
        }
           
	});

   
   $("#close").click(function(){
   	   history.back();   //后退为主页
   })


    //方法
    function clearInputs(){
        $("#name").val('');
        $("#contact").val('');
        $("#vertification").val('');
    }

    var length = 0;
    function add(){
        //console.log(length);
        // $.getJSON("service.php?action=getWinners",function(json){
        //     console.log(json);
        //     length = json.winners.length;
        //     alert(length);
        // });
        var aj = $.ajax({
                    url: "/wanda/service.php?action=getWinners",
                    async: false,//这一步是非常重要的，作用是设置为同步执行
                    type: "POST",
                    // success: function (json) {
                    //     console.log(json);
                    //     json = $.parseJSON(json);
                    //     for(var k in json){
                    //         // length=len(json[k]);
                    //         console.log(k);
                    //         console.log(json[k]);
                    //     }
                    //     length=json.length;
                    //     alert("success");
                    // }
                });
        //console.log(aj.responseText);
        var last = $.parseJSON(aj.responseText);    //将符合标准格式的的JSON字符串转为与之对应的JavaScript对象
        var length=0;
        for(var k in last){
            for(var kk in last[k]){
                length+=1;
            }
        }
       // console.log("last: "+length);
        return length;
    }
	
})
