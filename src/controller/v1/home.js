'use strict';
import Home from '../../models/v1/home'
/* 前后端统一数据格式
{
	"code":200,
	"message":"获取成功",
	"url":null,
	"data":
	{
		"entries":
		[
			{
				"id":1100,
				"name":"宫灯",
				"defaultImage":"https:\/\/cdn.fangcun.com\/upload\/images\/2018-07-26\/c551f2aea5b34d14b469b6f620a28949.jpg!350",
				"stockCount":4,
				"subTitle":"我所幻想的《宫灯》，都在这一款壶里。",
				"volumes":[350],
				"artistName":"夏惠清"
			},
			{
				"id":1101,
				"name":"璟盈",
				"defaultImage":"https:\/\/cdn.fangcun.com\/upload\/images\/2018-07-26\/1f0f40e072b6470b95fe91da384620b2.jpg!350",
				"stockCount":5,
				"subTitle":"非圆亦圆，如意古风，尽在璟盈一壶。",
				"volumes":[370],
				"artistName":"陈少霆"
			},
		],
		"pager":
		{
			"prev":1,
			"current":"2",
			"next":3,
			"page_size":10,
			"total_page":8,
			"total":72
		}
	}
} 
*/
class homeHandle{
	constructor(){
		
	}
	async getHome(req, res, next){
		const type = req.query.type;
		try{
			res.send({
				"code":200,
				"message":"",
				"url":null,
				"data": Home 
			});
		}catch(err){
			res.send({
				"code":200,
				"message":"获取数据失败",
				"url":null,
				"data": Home 
			});
		}
	}

}
export default new homeHandle()