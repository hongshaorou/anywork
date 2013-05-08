function focus_text()
{
	if(document.getElementById("id_text").value=="输入内容")
	{
		document.getElementById("id_text").value="";
		document.getElementById("id_text").style.color = "#222222";
	}
}

function blur_text()
{
	if(document.getElementById("id_text").value=="")
	{
		document.getElementById("id_text").value="输入内容";
		document.getElementById("id_text").style.color = "#D9D9D9";
	}	
}

function click_publish()
{
	alert(document.getElementById("id_text").value);
}

function click_xiala()
{
	if(document.getElementById("id_select").style.display = "none")
	{
		document.getElementById("id_select").style.display = "block";
	}
}

function click_dj()
{
	document.getElementById("class_private").value =document.getElementById("id_dj").value;
	document.getElementById("id_select").style.display = "none";
}

function click_hj()
{
	document.getElementById("class_private").value =document.getElementById("id_hj").value;
	document.getElementById("id_select").style.display = "none";
}

function click_nh()
{
	document.getElementById("class_private").value =document.getElementById("id_nh").value;
	document.getElementById("id_select").style.display = "none";
}
