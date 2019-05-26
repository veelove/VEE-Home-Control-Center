<template>
	<div id="app">
		<particles class="particles" />
		<div class="container">
			<div class="top">
				<a-row>
					<a-col :span="12"
					       :offset="6">
						<icon-font type="icon-logo"
						           class="TOPICON" />
						<span class="TOPTITLE">
							VEE Home Control Center
						</span>
					</a-col>
				</a-row>
			</div>
			<a-row>
				<a-col :span="12"
				       :offset="6">
					<a-list :grid="{ gutter: 16, xs: 2, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4 }"
					        :dataSource="data">
						<a-list-item class="lists"
						             slot="renderItem"
						             slot-scope="item, index">
							<a :href="item.href"
							   target="_blank">
								<icon-font :type="item.type"
								           class="icon shake" />
								<span class="title">
									{{item.title}}
								</span></a>
						</a-list-item>
					</a-list>
				</a-col>
			</a-row>
		</div>
	</div>
</template>

<script>
import particles from "./components/particles";
import { Icon } from 'ant-design-vue';

const IconFont = Icon.createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_1211208_x9mmm1g3mn.js',
})
const data = [
	{
		title: 'ESXI',
		type: 'icon-kongzhitai',
		href: 'https://veelove.myds.me:1000'
	},
	{
		title: 'ROS',
		type: 'icon-luyouqi1',
		href: 'http://veelove.myds.me:2000'
	},
	{
		title: 'LEDE',
		type: 'icon-zhinengluyouqi',
		href: 'http://veelove.myds.me:3000'
	},
	{
		title: '小米AP',
		type: 'icon-luyouqi',
		href: 'http://veelove.myds.me:4000'
	},
	{
		title: 'NAS',
		type: 'icon-nas',
		href: 'http://veelove.myds.me:5000'
	},
	{
		title: 'MOVIE',
		type: 'icon-movie',
		href: 'http://veelove.myds.me:5000/?launchApp=SYNO.SDS.VideoStation.AppInstance#!Home'
	},
	{
		title: 'PHOTO',
		type: 'icon-photo',
		href: 'http://veelove.myds.me:5000/?launchApp=SYNO.Photo.AppInstance#/my_library/timeline'
	}
	, {
		title: 'CLOUD DISK',
		type: 'icon-p_disk',
		href: 'http://veelove.myds.me:5000/?launchApp=SYNO.SDS.Drive.Application'
	}
]
export default {
	name: 'app',
	data () {
		return {
			data
		}
	},
	components: {
		particles,
		IconFont
	},
	created () {
		document.title = 'Home'
	}
}
</script>

<style lang="scss">
body {
	overflow: hidden;
	width: 100%;
	height: 100%;
	font-size: 100%;
	background: -webkit-linear-gradient(315deg, #00c4ff, #9d1bb2) no-repeat
		fixed;
	background: linear-gradient(135deg, #00c4ff, #9d1bb2) no-repeat fixed;
	overflow: hidden;
	font-family: "Helvetica Neue", "Microsoft Yahei", SimHei, sans-serif;
}
#app {
	width: 100%;
	height: 100%;
}
.particles {
	width: 100%;
	height: 100%;
	position: absolute;
}
.container {
	width: 100%;
	height: 100%;
	position: absolute;
}
.top {
	margin-top: 10%;
	text-align: center;
	.TOPICON {
		font-size: 10rem;
		color: #fff;
	}
	.TOPTITLE {
		color: #fff;
		font-size: 18px;
		display: block;
		text-align: center;
	}
}
.lists {
	text-align: center;
	color: #fff;
	a {
		cursor: pointer;
		color: #fff;
	}
	padding-top: 20px;
	.title {
		display: block;
		font-size: 16px;
		padding-top: 20px;
	}
	.icon {
		font-size: 36px;
		width: 96px;
		height: 96px;
		line-height: 96px;
		border: 2px solid #fff;
		border-radius: 50%;
	}
	@-webkit-keyframes shake {
		0%,
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
		}

		10%,
		30%,
		50%,
		70%,
		90% {
			-webkit-transform: translateX(-10px);
			transform: translateX(-10px);
		}

		20%,
		40%,
		60%,
		80% {
			-webkit-transform: translateX(10px);
			transform: translateX(10px);
		}
	}
}
@keyframes shake-bounce {
	0%,
	100% {
		-webkit-transform: rotate(0);
		-moz-transform: rotate(0);
		transform: rotate(0);
		-ms-transform: rotate(0);
	}

	25% {
		-webkit-transform: rotate(15deg);
		-moz-transform: rotate(15deg);
		transform: rotate(15deg);
		-ms-transform: rotate(15deg);
	}

	50% {
		-webkit-transform: rotate(-15deg);
		-moz-transform: rotate(-15deg);
		transform: rotate(-15deg);
		-ms-transform: rotate(-15deg);
	}

	75% {
		-webkit-transform: rotate(5deg);
		-moz-transform: rotate(5deg);
		transform: rotate(5deg);
		-ms-transform: rotate(5deg);
	}

	85% {
		-webkit-transform: rotate(-5deg);
		-moz-transform: rotate(-5deg);
		transform: rotate(-5deg);
		-ms-transform: rotate(-5deg);
	}
}

@-webkit-keyframes shake-bounce {
	0%,
	100% {
		-webkit-transform: rotate(0);
		-moz-transform: rotate(0);
		transform: rotate(0);
		-ms-transform: rotate(0);
	}

	25% {
		-webkit-transform: rotate(15deg);
		-moz-transform: rotate(15deg);
		transform: rotate(15deg);
		-ms-transform: rotate(15deg);
	}

	50% {
		-webkit-transform: rotate(-15deg);
		-moz-transform: rotate(-15deg);
		transform: rotate(-15deg);
		-ms-transform: rotate(-15deg);
	}

	75% {
		-webkit-transform: rotate(5deg);
		-moz-transform: rotate(5deg);
		transform: rotate(5deg);
		-ms-transform: rotate(5deg);
	}

	85% {
		-webkit-transform: rotate(-5deg);
		-moz-transform: rotate(-5deg);
		transform: rotate(-5deg);
		-ms-transform: rotate(-5deg);
	}
}

@-moz-keyframes shake-bounce {
	0%,
	100% {
		-webkit-transform: rotate(0);
		-moz-transform: rotate(0);
		transform: rotate(0);
		-ms-transform: rotate(0);
	}

	25% {
		-webkit-transform: rotate(15deg);
		-moz-transform: rotate(15deg);
		transform: rotate(15deg);
		-ms-transform: rotate(15deg);
	}

	50% {
		-webkit-transform: rotate(-15deg);
		-moz-transform: rotate(-15deg);
		transform: rotate(-15deg);
		-ms-transform: rotate(-15deg);
	}

	75% {
		-webkit-transform: rotate(5deg);
		-moz-transform: rotate(5deg);
		transform: rotate(5deg);
		-ms-transform: rotate(5deg);
	}

	85% {
		-webkit-transform: rotate(-5deg);
		-moz-transform: rotate(-5deg);
		transform: rotate(-5deg);
		-ms-transform: rotate(-5deg);
	}
}

@-o-keyframes shake-bounce {
	0%,
	100% {
		-webkit-transform: rotate(0);
		-moz-transform: rotate(0);
		transform: rotate(0);
		-ms-transform: rotate(0);
	}

	25% {
		-webkit-transform: rotate(15deg);
		-moz-transform: rotate(15deg);
		transform: rotate(15deg);
		-ms-transform: rotate(15deg);
	}

	50% {
		-webkit-transform: rotate(-15deg);
		-moz-transform: rotate(-15deg);
		transform: rotate(-15deg);
		-ms-transform: rotate(-15deg);
	}

	75% {
		-webkit-transform: rotate(5deg);
		-moz-transform: rotate(5deg);
		transform: rotate(5deg);
		-ms-transform: rotate(5deg);
	}

	85% {
		-webkit-transform: rotate(-5deg);
		-moz-transform: rotate(-5deg);
		transform: rotate(-5deg);
		-ms-transform: rotate(-5deg);
	}
}

.shake:hover {
	-webkit-animation: shake-bounce 0.5s alternate;
	-moz-animation: shake-bounce 0.5s alternate;
	-o-animation: shake-bounce 0.5s alternate;
	animation: shake-bounce 0.5s alternate;
}
</style>
