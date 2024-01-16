var myInterval ="";

function start()
{
	
	document.getElementById("container1").style.display="none";
	document.getElementById("container2").style.display="flex";
	var getimg=getImage();
	setHintImage(getimg);
	
	var level=getlevel();
	createGride(getimg, level);
	randomize();
	setFinishTime();
	slist(document.getElementById("sortlist"));
}

//function for get rendom image
function getImage()
{
	var img_arr=["image1.jpeg", "image11.jpg", "image12.jpg", "image13.jpg", "image15.jpg","image16.jpg", "image3.jpeg","image5.jpg","image6.jpg","image8.jpg","image9.jpg"];
	var arr_length=img_arr.length;
	var img_name=img_arr[Math.floor(Math.random() * arr_length)];
	var img_url="Images/"+img_name;
	return img_url;
}

// function for set hint image
function setHintImage(url)
{
	document.getElementById("hint_image_id").src=url;
}

// function for get number of gride or value from select level
function getlevel()
{
	var level_value=0;
	var get_level1=document.getElementById('radio_1');
	if(get_level1.checked)
	{
		level_value=get_level1.value;
	}
	var get_level2=document.getElementById('radio_2');
	if(get_level2.checked)
	{
		level_value=get_level2.value;
	}
	var get_level3=document.getElementById('radio_3');
	if(get_level3.checked)
	{
		level_value=get_level3.value;
	}
	var get_level4=document.getElementById('radio_4');
	if(get_level4.checked)
	{
		level_value=get_level4.value;
	}
	
	return level_value;
	
}

//function for creating grides
function createGride(url, gride)
{ 
	var arr=["image1.jpeg", "image11.jpg", "image12.jpg", "image13.jpg", "image15.jpg","image16.jpg", "image3.jpeg","image5.jpg","image6.jpg","image8.jpg","image9.jpg"];
	 var list = document.getElementById("sortlist");
	var container_width=document.getElementById('sortlist').clientWidth;
	var container_height=document.getElementById('sortlist').clientHeight;
	 
	var percentage = 100 / (gride - 1);
	for(var i=0; i<gride*gride; i++)
	{
		var xpos = (percentage * (i%gride));
		var ypos = (percentage * Math.floor(i/gride));
	
		var li=document.createElement('li');
		li.setAttribute('id',arr[i]);
		
		li.setAttribute('style', 'display:inline-block; width:'+container_width/gride+'px ; height:'+ container_height/gride + 'px;  border:none; float:left; background-image:url('+url+'); background-size:'+100*gride+'% '+100*gride+'%;  background-position:'+xpos+'% '+ypos+'%; background-repeat:no-repeat;');
		
		list.appendChild(li);
	}
	
}

// function for shuffle li of ul
function shuffle(items)
			{
				var cached = items.slice(0), temp, i = cached.length, rand;
				while(--i)
				{
					rand = Math.floor(i * Math.random());
					temp = cached[rand];
					cached[rand] = cached[i];
					cached[i] = temp;
				}
				return cached;
			}
//function for appending shuffled li into ul
function randomize()
{
	var list = document.getElementById("sortlist");
	var nodes = list.children, i = 0;
	nodes = Array.prototype.slice.call(nodes);
	nodes = shuffle(nodes);
	while(i < nodes.length)
	{
		list.appendChild(nodes[i]);
		++i;
	}
}

// functio for set Time for game 
function setFinishTime()
{
	var selected_time = document.getElementById("selected").value;
	if(selected_time=="")
	{
		selected_time=2;
	}
	
	var  sec=0, min=0;
	myInterval = setInterval(function(){
		
		sec+=1;
		if(sec<60)
		{
			if(sec<10)
			{
				var vv = document.getElementById("second_2").style.display;
				
				if(vv=="none")
				{
					document.getElementById("second_2").style.display="inline-block";
					document.getElementById("second_1").innerHTML = 0;
				}
				document.getElementById("second_2").innerHTML = sec;
			}
			else
			{
				document.getElementById("second_2").style.display= "none";
				document.getElementById("second_1").innerHTML = sec;
			}
		}
		else
		{
			document.getElementById("second_1").innerHTML ="00";
			sec=0;
			min+=1;
			if(min<10)
			{
				var vvv = document.getElementById("minute_2").style.display;
				if(vvv=="none")
				{
					document.getElementById("minute_2").style.display="inline-block";
					document.getElementById("minute_1").innerHTML = 0;
				}
				document.getElementById("minute_2").innerHTML = min;
			}
			else
			{
				document.getElementById("minute_2").style.display= "none";
				document.getElementById("minute_1").innerHTML = min;
			}
		}
		if(min==selected_time  )
		{
			finish();
		} 
		
	 
	},1000);
}

function stop_time()
{
	clearInterval(myInterval);
	document.getElementById("second_2").style.display= "inline-block";
	document.getElementById("second_2").innerHTML= 0;
	document.getElementById("second_1").innerHTML = 0;
	document.getElementById("minute_1").innerHTML= 0;
	document.getElementById("minute_2").innerHTML = 0;
}
// function for finishing the game
function finish()
{
	stop_time();
	var arr=["image1.jpeg", "image11.jpg", "image12.jpg", "image13.jpg", "image15.jpg","image16.jpg", "image3.jpeg","image5.jpg","image6.jpg","image8.jpg","image9.jpg"];
	const vv=document.getElementById("sortlist").children;
	var count=0;
	var gride=getlevel();
	for(var i=0; i<gride*gride; i++)
	{
		var ff=vv[i].id;
		if(ff==arr[i])
		{
			count=count+1;
		}
	}
	
	const el=document.getElementById("sortlist");
	el.innerHTML="";
	document.getElementById("container2_box_1").style.display= "none";
	document.getElementById("container2_box_2").style.display= "none";
	document.getElementById("container2_box_3").style.display= "flex";
	document.getElementById("container2_box_4").style.display= "none";
	if(count==gride*gride)
	{
		document.getElementById("finish_result_1").style.display= "block";
	}
	else
	{
		
		document.getElementById("finish_result_2").style.display= "block";
	}
}

// function for back
function back()
{
	stop_time();
	document.getElementById("container1").style.display="flex";
	const el=document.getElementById("sortlist");
	el.innerHTML="";
	document.getElementById("container2").style.display="none";
}
// function for next level
function next1()
{
	
	document.getElementById("container2_box_1").style.display= "flex";
	document.getElementById("container2_box_2").style.display= "flex";
	document.getElementById("container2_box_3").style.display= "none";
	document.getElementById("finish_result_1").style.display= "none";
	document.getElementById("finish_result_2").style.display= "none";
	
	start();
}
function next2()
{
	
	document.getElementById("container2_box_1").style.display= "flex";
	document.getElementById("container2_box_2").style.display= "flex";
	document.getElementById("container2_box_3").style.display= "none";
	document.getElementById("container2_box_4").style.display= "flex";
	document.getElementById("finish_result_1").style.display= "none";
	document.getElementById("finish_result_2").style.display= "none";
	
	start();
}
