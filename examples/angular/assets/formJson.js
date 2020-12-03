// https://github.com/zhdonghd/jsonFormat

var generateRes = function(str) {
	try {
		var json = JSON.parse(str);
		if(typeof(json) == "object")
			return formatRes(null, json, 0, false, true);
		else
			return str;
	} catch (err) {
		return str;
	}
}

var formatRes = function(key, obj, depth, isArray, isEnd) {
	var margin = 20;
	var els = "",
		mlValue = margin * (depth + 1);
	
	var jsonType = Object.prototype.toString.call(obj);
	//区分数组和json对象
	if("[object Array]" == jsonType) {	//解析数组
		els += "<p style='margin-left: " + (mlValue - margin) + "px;'>" + (key ? (key + ":") : "") + " [</p>";
		$.each(obj, function(index, element) {
			var type = Object.prototype.toString.call(element),
				isLast = index == (obj.length - 1),
				value = element;
			type = type.match(/\[object (\S*)\]/)[1];
			//基本数据类型
			if("Boolean" == type || "Number" == type || "Null" == type) 
				els += "<p style='margin-left: " + mlValue + "px;'>" + jsonkey + ": <span class='json-" + type + "'>" + value
						+ "</span>" + (isLast ? "" : ",") + "</p>";
			else if("String" == type) {
				value = value.replace(new RegExp(/</g),'\\u003c').replace(new RegExp(/>/g),'\\u003e')
				els += "<p style='margin-left: " + mlValue + "px;'>" + jsonkey + ": <span class='json-" + type + "'>\"" + value
					+ "\"</span>" + (isLast ? "" : ",") + "</p>";
			} else
				els += formatRes(null, element, depth + 1, true, isLast);
		});
		
		els += "<p style='margin-left: " + (mlValue - margin) + "px;'>]" + (isEnd ? "" : ",") + "</p>";
	} else {	//解析json
		els += "<p style='margin-left: " + (mlValue - margin) + "px;'>" + (key ? (key + ":") : "") + " {</p>";
		var length = 0;
		for(var jsonkey in obj) {
			length++;
		}
		var index = 0;
		for(var jsonkey in obj) {
			index++;
			var value = obj[jsonkey],
				isLast = index == length;
			var type = Object.prototype.toString.call(value),
				el;
			type = type.match(/\[object (\S*)\]/)[1];
			//基本数据类型
			if("Boolean" == type || "Number" == type || "Null" == type) 
				el= "<p style='margin-left: " + mlValue + "px;'>" + jsonkey + ": <span class='json-" + type + "'>" + value + "</span>" + (isLast ? "": ",") + "</p>";
			else if("String" == type) {
				value = value.replace(new RegExp(/</g),'\\u003c').replace(new RegExp(/>/g),'\\u003e')
				el= "<p style='margin-left: " + mlValue + "px;'>" + jsonkey + ": <span class='json-" + type + "'>\"" + value + "\"</span>" + (isLast ? "": ",") + "</p>";
			} else if("Array" == type)
				el = formatRes(jsonkey, value, depth + 1, true, isLast);
			else
				el = formatRes(jsonkey, value, depth + 1, false, isLast);
			
			els += el;
		}
		els += "<p style='margin-left: " + (mlValue - margin) + "px;'>}" + (isArray && !isEnd ? ",": "") + "</p>";
	}
	return els;
}