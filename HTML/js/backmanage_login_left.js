function click_liebiao()
{
	if(document.getElementById("id_div_liebiao").style.background = "#4c4c4c")
	{
		document.getElementById("id_div_liebiao").style.background = "#4B8DF8";
		document.getElementById("id_div_xiangmu").style.background = "#4c4c4c";
		document.getElementById("id_div_tuandui").style.background = "#4c4c4c";
		document.getElementById("id_div_xuanzhong").style.display="block";
		document.getElementById("iframe_project_id").style.display="none";
		document.getElementById("id_div_xuanzhong").style.top = 50 +'px';
		document.getElementById("iframe_liebiao_id").style.display="block";
	}
}

function click_xiangmu()
{
	if(document.getElementById("id_div_xiangmu").style.background = "#4c4c4c")
	{
		document.getElementById("id_div_xiangmu").style.background = "#4B8DF8";
		document.getElementById("id_div_liebiao").style.background = "#4c4c4c";
		document.getElementById("id_div_tuandui").style.background = "#4c4c4c";
		document.getElementById("id_div_xuanzhong").style.display="block";
		document.getElementById("iframe_project_id").style.display="block";
		document.getElementById("id_div_xuanzhong").style.top = 180 +'px';
		document.getElementById("iframe_liebiao_id").style.display="none";
	}
}

function click_tuandui()
{
	if(document.getElementById("id_div_tuandui").style.background = "#4c4c4c")
	{
		document.getElementById("id_div_xiangmu").style.background = "#4c4c4c";
		document.getElementById("id_div_liebiao").style.background = "#4c4c4c";
		document.getElementById("id_div_tuandui").style.background = "#4B8DF8";
		document.getElementById("id_div_xuanzhong").style.top = 310 +'px';

	}
}
