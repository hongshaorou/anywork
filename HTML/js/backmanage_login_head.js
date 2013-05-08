function focus_txt()
{
	if(document.getElementById("id_txt").value== "输入要搜索的内容")
	{
		document.getElementById("id_txt").value="";
		document.getElementById("id_txt").style.color = "#222222";
	}
}

function blur_txt()
{
	if(document.getElementById("id_txt").value== "")
	{
		document.getElementById("id_txt").value="输入要搜索的内容";
		document.getElementById("id_txt").style.color = "#D9D9D9";
	}
}

function click_img_sousou()
{
	alert(document.getElementById("id_txt").value);
}
	

