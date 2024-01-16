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
	var img_arr=["image1.jpeg", "image2.jpg", "image3.jpeg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.png", "image8.jpg", "image9.jpg", "image10.jpg", "image11.jpg","image12.jpg", "image13.jpg", "image14.jpg", "image15.jpg", "image16.jpg","image17.jpg", "image18.jpg", "image19.jpg", "image20.jpg", "image21.jpg", "image22.jpg", "image23.jpg", "image24.jpg", "image25.jpg", "image26.jpg", "image27.jpg", "image28.jpg", "image29.jpg", "image30.jpg", "image31.jpg", "image32.jpg", "image33.jpg", "image34.jpg", "image35.jpg", "image36.jpg", "image37.jpg", "image38.jpg", "image39.jpg", "image40.jpg", "image41.jpg", "image42.jpg", "image43.jpg", "image44.jpg", "image45.jpg", "image46.jpg", "image47.jpg", "image48.jpg", "image49.jpg", "image50.jpg", "image51.jpg", "image52.jpg", "image53.jpg", "image54.jpg", "image55.jpg", "image56.jpg", "image57.jpg", "image58.jpg", "image59.jpg", "image60.jpg", "image61.jpg", "image62.jpg", "image63.jpg", "image64.jpg", "image65.jpg", "image66.jpg", "image67.jpg", "image68.jpg", "image69.jpg", "image70.jpg", "image71.jpg", "image72.jpg", "image73.jpg", "image74.jpg", "image75.jpg", "image76.jpg", "image77.jpg", "image78.jpg", "image79jpg", "image80.jpg", "image81.jpg", "image82.jpg", "image83.jpg", "image84.jpg", "image85.jpg", "image86.jpg", "image87.jpg", "image88.jpg", "image89.jpg", "image90.jpg", "image91.jpg", "image92.jpg", "image93.jpg", "image94.jpg", "image95.jpg", "image96.jpg", "image97.jpg", "image98.jpg", "image99.jpg", "image100.jpg", "image101.jpg", "image102.jpg", "image103.jpg", "image104.jpg", "image105.jpg", "image106.jpg", "image107.jpg", "image108.jpg", "image109.jpg", "image110.jpg", "image111.jpg", "image112.jpg", "image113.jpg", "image114.jpg", "image115.jpg", "image116.jpg" ];
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
	var arr=['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10', 'image11', 'image12', 'image13', 'image14', 'image15', 'image16', 'image17', 'image18', 'image19', 'image20', 'image21', 'image22', 'image23', 'image24', 'image25', 'image26', 'image27', 'image28', 'image29', 'image30', 'image31', 'image32', 'image33', 'image34', 'image35', 'image36'];
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
	var arr=['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10', 'image11', 'image12', 'image13', 'image14', 'image15', 'image16', 'image17', 'image18', 'image19', 'image20', 'image21', 'image22', 'image23', 'image24', 'image25', 'image26', 'image27', 'image28', 'image29', 'image30', 'image31', 'image32', 'image33', 'image34', 'image35', 'image36'];
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