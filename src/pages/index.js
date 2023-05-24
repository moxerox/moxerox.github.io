import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Section, List, Hr, Button, Icon, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Help for you — Healthcare without the system
			</title>
			<meta name={"description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:title"} content={"Help for you — Healthcare without the system"} />
			<meta property={"og:description"} content={"Chat with a doctor right from your phone, all day and night. No waiting room or appointment needed."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/OGimage.png?v=2021-09-21T16:25:40.647Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon.svg?v=2021-09-21T16:18:29.306Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon152.svg?v=2021-09-21T16:17:59.502Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6123949e957019001e284458/images/favicon270.svg?v=2021-09-21T16:18:07.731Z"} />
			<meta name={"msapplication-TileColor"} content={"#000848"} />
		</Helmet>
		<Image
			md-top="300px"
			lg-top="0px"
			src="https://uploads.quarkly.io/6123949e957019001e284458/images/backgroung-hero.svg?v=2021-09-21T22:07:12.314Z"
			position="absolute"
			right="0px"
			bottom="5414.018102134147px"
			top="130px"
			z-index="1"
			lg-right="-200px"
			md-width="600px"
			height="633.9818978658536px"
		/>
		<Section background="linear-gradient(264.47deg, #000848 29.39%, #000848 93.49%)" padding="36px 0 36px 0" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" />
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				width="30%"
				sm-width="50%"
				display="flex"
				align-items="center"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-color="LightGray"
			>
				<Text margin="0px 0px 0px 0px" color="#ffffff" text-transform="uppercase" font="normal normal 600 25px/120% --fontFamily-googleInter">
					Mohamed Alfaghi
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				width="70%"
				sm-width="50%"
				align-items="center"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
			>
				<Components.QuarklycommunityKitMobileSidePanel md-z-index="9">
					<Override
						slot="Content"
						align-items="center"
						padding="16px 0px 16px 16px"
						md-background="--color-light"
						md-z-index="9"
						md-justify-content="flex-start"
						background="rgba(255, 255, 255, 0)"
						justify-content="center"
					/>
					<Override slot="Children" justify-content="center" display="flex" align-items="center" />
					<Override slot="Button Text" md-display="none" />
					<Override slot="Button Icon" md-color="--white" md-font="36px sans-serif" />
					<Override slot="Cross" md-color="--dark" md-font="36px sans-serif" />
					<Override slot="Wrapper" md-z-index="9" />
					<Box
						display="flex"
						align-items="center"
						justify-content="flex-end"
						md-flex-direction="column"
						md-margin="40px 0px 13px 0px"
						md-font="--headline4"
					>
						<Link
							href="#home"
							font="normal 600 18px/1.5 --fontFamily-googleInter"
							text-decoration-line="initial"
							color="--white"
							margin="0px 20px 0px 20px"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							md-color="--indigo"
						>
							Home
						</Link>
						<Link
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							href="#about"
							font="--base"
							text-decoration-line="initial"
							hover-opacity="1"
							md-font="--lead"
							md-color="--indigo"
							color="--grey"
							margin="0px 20px 0px 20px"
							opacity="0.8"
						>
							Experience
						</Link>
						<Link
							color="--grey"
							margin="0px 20px 0px 20px"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							md-font="--lead"
							href="#projects"
							font="--base"
							text-decoration-line="initial"
							opacity="0.8"
							hover-opacity="1"
							md-color="--indigo"
						>
							Projects
						</Link>
						<Link
							hover-opacity="1"
							md-font="--lead"
							md-color="--indigo"
							font="--base"
							color="--grey"
							opacity="0.8"
							transition="opacity 0.3s ease 0s"
							md-margin="0px 0px 13px 0px"
							href="#contact"
							text-decoration-line="initial"
							margin="0px 8px 0px 20px"
						>
							Contact
						</Link>
					</Box>
				</Components.QuarklycommunityKitMobileSidePanel>
			</Box>
		</Section>
		<Section
			background="linear-gradient(264.47deg, #000848 29.39%, #000848 93.49%)"
			padding="36px 0 80px 0"
			quarkly-title="HeroBlock"
			md-padding="36px 0 60px 0"
			pointer-events="none"
			id="home"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				position="relative"
				z-index="9"
				md-flex-wrap="wrap"
				md-z-index="7"
			/>
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				display="flex"
				align-items="flex-start"
				lg-padding="0px 90px 0px 0px"
				md-width="100%"
				justify-content="center"
				width="70%"
				padding="0px 180px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text
					lg-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 8px 0px"
					color="--grey"
					lg-text-align="left"
					font="--base"
					text-transform="uppercase"
					lg-margin="0px 0px 8px 0px"
					sm-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
				>
					11 years of experience
				</Text>
				<Text
					lg-text-align="left"
					lg-font="normal 700 40px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 28px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline1"
					color="--white"
					sm-font="normal 500 30px/1.2 &quot;Inter&quot;, sans-serif"
				>
					Someone for the long run
				</Text>
				<Text
					font="--base"
					lg-text-align="left"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="--white"
					opacity="1"
				>
					Available for a chat and consultation{" "}
				</Text>
				<Box
					lg-margin="32px 0px 0px 0px"
					md-width="100%"
					md-margin="36px 0px 0px 0px"
					display="flex"
					margin="72px 0px 0px 0px"
				>
					<Link
						sm-margin="0px 22px 0px 0px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						href="#contact"
						text-decoration-line="initial"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						sm-padding="15px 13px 15px 13px"
						md-text-align="center"
						lg-margin="0px 32px 0px 0px"
						padding="15px 30px 15px 30px"
						border-radius="10px"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						md-padding="15px 16px 15px 16px"
						hover-color="--primary"
						color="--white"
						margin="0px 44px 0px 0px"
						lg-padding="15px 23px 15px 23px"
						md-width="50%"
						background="--color-primary"
						font="--lead"
						hover-background="--color-white"
						border-width="2px"
						border-style="solid"
						border-color="--color-primary"
					>
						Connect
					</Link>
					<Link
						padding="15px 30px 15px 30px"
						font="--lead"
						border-radius="10px"
						border-width="2px"
						transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
						lg-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						border-style="solid"
						md-width="50%"
						md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-text-align="center"
						sm-padding="15px 13px 15px 13px"
						text-decoration-line="initial"
						color="--white"
						background="rgba(255, 5, 5, 0)"
						margin="0px 0px 0px 0px"
						border-color="rgba(255, 255, 255, 0.3)"
						sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
						hover-background="--color-white"
						hover-color="--indigo"
						href="#about"
						lg-padding="15px 23px 15px 23px"
						md-padding="15px 16px 15px 16px"
					>
						Learn more
					</Link>
				</Box>
			</Box>
		</Section>
		<Section padding="160px 0 24px 0" sm-padding="80px 0 24px 0" md-padding="50px 0 24px 0" id="about">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				flex-direction="column"
				md-width="100%"
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				display="flex"
				align-items="flex-start"
				justify-content="space-between"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Image
					position="static"
					lg-left="0px"
					md-width="100%"
					border-radius="10px"
					lg-max-height="366px"
					src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					left="-140px"
					max-width="100%"
					object-fit="contain"
					display="inline-block"
				/>
			</Box>
			<Box
				justify-content="space-between"
				empty-min-height="64px"
				empty-border-style="solid"
				width="50%"
				padding="16px 16px 16px 16px"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				flex-direction="column"
				align-items="flex-start"
			>
				<Box display="flex" margin="0px 0px 20px 0px" align-items="center" sm-width="100%">
					<Text
						margin="0px 0px 0px 0px"
						color="--primary"
						font="--lead"
						lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
						md-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					>
						Unlocking Success Through Professional Endeavors
					</Text>
				</Box>
				<Text
					width="85%"
					lg-width="100%"
					lg-font="normal 700 34px/1.2 &quot;Inter&quot;, sans-serif"
					md-font="normal 700 24px/1.2 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--indigo"
					sm-font="normal 800 30px/1.2 &quot;Inter&quot;, sans-serif"
				>
					Professional Experience
				</Text>
				<Text
					font="--base"
					opacity=".7"
					lg-font="normal 400 16px/1.5 &quot;Inter&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Inter&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					color="--dark"
				>
					As a senior web developer with over 10 years of experience, I have a proven track record of delivering high-quality web applications using a wide range of technologies. My expertise spans both front-end and back-end development, allowing me to create robust and scalable solutions. I have worked on various web development projects, from simple single-page applications to complex enterprise-grade systems.
				</Text>
				<Text as="h3" color="--indigo">
					Key Highlights
				</Text>
				<List
					margin="0px 0px 20px 0px"
					padding="0px 0px 0px 20px"
					list-style-type="disc"
					as="ul"
					font="200 18px/1.2 --fontFamily-googleInter"
				>
					<Text margin="0px 0px 0px 0px">
						Proficient in TypeScript, Next.js, React, Node, Laravel, SQL, MongoDB, PostgreSQL, GraphQL, CI/CD, and AWS, enabling me to tackle diverse project requirements.
					</Text>
					<Text margin="0px 0px 0px 0px">
						Solid understanding of front-end technologies such as HTML, CSS, and JavaScript, ensuring intuitive and visually appealing user interfaces.
					</Text>
					<Text margin="0px 0px 0px 0px">
						Extensive experience in designing and implementing responsive user interfaces, developing REST APIs, and integrating with third-party APIs.
					</Text>
					<Text margin="0px 0px 0px 0px">
						Strong knowledge of software engineering principles, Agile methodologies, and project management, facilitating efficient and collaborative development processes.
					</Text>
					<Text margin="0px 0px 0px 0px">
						Skilled in optimizing application performance and database design, resulting in fast and scalable web applications.
					</Text>
					<Text margin="0px 0px 0px 0px">
						Mentored junior developers, providing guidance and fostering a collaborative and knowledge-sharing environment.
					</Text>
					<Text margin="0px 0px 0px 0px">
						Excellent communication skills, allowing effective collaboration with both technical and non-technical stakeholders.
					</Text>
				</List>
				<Link
					href="#projects"
					sm-padding="15px 20px 15px 20px"
					hover-background="rgba(5, 165, 255, 0)"
					border-width="1px"
					border-style="solid"
					font="--lead"
					sm-margin="0px 22px 0px 0px"
					border-color="rgba(255, 255, 255, 0.3)"
					md-width="100%"
					md-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					text-decoration-line="initial"
					color="--white"
					margin="0px 44px 0px 0px"
					hover-color="--primary"
					hover-border-color="--color-primary"
					md-text-align="center"
					background="--color-primary"
					padding="15px 30px 15px 30px"
					border-radius="10px"
					sm-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					transition="background-color 0.3s --transitionTimingFunction-easeInOut 0s"
				>
					Live Projects
				</Link>
			</Box>
		</Section>
		<Section padding="150px 0 150px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/6123949e957019001e284458/images/Group%20177.png?v=2021-08-24T00:44:18.633Z) 0% 30% /cover no-repeat scroll padding-box" sm-padding="0px 0 0px 0" md-padding="50px 0 50px 0">
			<Override
				slot="SectionContent"
				display="grid"
				grid-gap="16px"
				grid-template-columns="repeat(4, 1fr)"
				lg-grid-gap="0px"
				md-grid-template-columns="repeat(2, 1fr)"
			/>
			<Box
				justify-content="center"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				align-items="center"
				display="flex"
				min-height="320px"
				empty-min-height="64px"
				empty-border-style="solid"
				padding="0px 0px 60px 0px"
			>
				<Text
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
				>
					10+
				</Text>
				<Text
					text-align="center"
					opacity="0.7"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					position="relative"
					z-index="1"
					color="--dark"
					font="--lead"
					margin="0px 0px 0px 0px"
				>
					Years of Experience{" "}
				</Text>
			</Box>
			<Box
				empty-min-width="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				min-height="320px"
				padding="0px 0px 60px 0px"
				empty-min-height="64px"
				empty-border-width="1px"
				display="flex"
				align-items="center"
				justify-content="center"
			>
				<Text
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
				>
					100%
				</Text>
				<Text
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					z-index="1"
					font="--lead"
					margin="0px 0px 0px 0px"
					text-align="center"
					opacity="0.7"
					position="relative"
					color="--dark"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
				>
					Projects Completion
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				flex-direction="column"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				sm-margin="0px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				justify-content="center"
				min-height="320px"
				md-margin="30px 0px 0px 0px"
				align-items="center"
				padding="0px 0px 60px 0px"
			>
				<Text
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
				>
					100%
				</Text>
				<Text
					opacity="0.7"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
					z-index="1"
					margin="0px 0px 0px 0px"
					text-align="center"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					position="relative"
					color="--dark"
					font="--lead"
				>
					Client Satisfaction{" "}
				</Text>
			</Box>
			<Box
				flex-direction="column"
				md-margin="30px 0px 0px 0px"
				empty-min-height="64px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				empty-min-width="64px"
				display="flex"
				background="url(https://uploads.quarkly.io/6123949e957019001e284458/images/backtio.png?v=2021-08-24T00:48:34.217Z) center center/91% no-repeat"
				padding="0px 0px 60px 0px"
				sm-margin="0px 0px 0px 0px"
				min-height="320px"
				empty-border-width="1px"
				align-items="center"
				justify-content="center"
			>
				<Text
					position="relative"
					z-index="1"
					color="--indigo"
					font="normal 700 49px/1.2 --fontFamily-googleInter"
					margin="0px 0px 20px 0px"
					lg-font="normal 700 34px/1.2 --fontFamily-googleInter"
					lg-margin="0px 0px 8px 0px"
				>
					11+
				</Text>
				<Text
					lg-width="70%"
					width="70%"
					position="relative"
					z-index="1"
					color="--dark"
					text-align="center"
					opacity="0.7"
					md-font="normal 500 18px/1.6 &quot;Inter&quot;, sans-serif"
					font="--lead"
					margin="0px 0px 0px 0px"
					lg-font="normal 500 16px/1.6 &quot;Inter&quot;, sans-serif"
					sm-font="normal 500 14px/1.6 &quot;Inter&quot;, sans-serif"
				>
					Technologies
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 90px 0" quarkly-title="Product-6" background="rgba(0, 0, 0, 0)" id="projects">
			<Override slot="SectionContent" lg-align-items="center" />
			<Text
				margin="0px 0px 20px 0px"
				font="normal 500 56px/1.2 --fontFamily-sans"
				text-align="center"
				lg-width="70%"
				md-width="100%"
				color="--darkL1"
			>
				Highlighted Projects
			</Text>
			<Text
				margin="0px 0px 20px 0px"
				text-align="center"
				font="normal 400 22px/1.5 --fontFamily-sansHelvetica"
				color="--darkL1"
				padding="0px 280px 0px 280px"
				lg-padding="0px 0 0px 0"
				lg-margin="0px 0px 50px 0px"
			>
				Showcasing my standout web development projects and accomplishments
			</Text>
			<Hr
				min-height="10px"
				margin="0px 0px 50px 0px"
				border-color="--color-darkL1"
				width="40px"
				border-width="2px 0 0 0"
				align-self="center"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="0px 0px 30px 0px"
				grid-template-columns="repeat(2, 1fr)"
				md-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="32.5%"
					lg-width="35%"
					background="#ffdd61"
					border-radius="4px"
					md-width="100%"
					md-margin="0px 0px 35px 0px"
					display="flex"
					flex-direction="column"
				>
					<Image
						src="https://uploads.quarkly.io/646d5587dad7580021a4162c/images/Douj.ly.png?v=2023-05-24T01:16:36.953Z"
						display="block"
						max-width="100%"
						height="300px"
						width="100%"
						object-fit="cover"
						sm-height="220px"
						lg-height="200px"
						md-height="350px"
						border-radius="4px 4px 0 0"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 30px 30px 30px"
						background="#ffdd61"
						border-color="--color-darkL1"
						border-radius="0 0 4px 4px"
						lg-padding="20px 20px 20px 20px"
						display="flex"
						flex-direction="column"
						flex="1 1 0%"
					>
						<Text margin="0px 0px 15px 0px" font="normal 600 20px/1.2 --fontFamily-sans">
							Douj E-Commerce
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-serifGaramond" lg-margin="0px 0px 18px 0px" flex="1 1 0%">
							The biggest e-commerce website in Libya. Considered to be the local Amazon alternative. Managed, planned and fully developed the website.
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							justify-content="space-between"
							align-items="center"
						>
							<Button
								background="--color-darkL1"
								border-radius="4px"
								href="https://douj.ly"
								target="_blank"
								disabled={false}
								user-select="auto"
							>
								Visit
							</Button>
							<Text margin="0px 0px 0px 0px" font="normal 600 20px/1.5 --fontFamily-serifGaramond" quarkly-title="2020">
								2020
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					width="70%"
					display="flex"
					align-items="center"
					flex-direction="column"
					justify-content="center"
					padding="0px 80px 0px 80px"
					lg-width="65%"
					md-width="100%"
					md-margin="0px 0px 15px 0px"
					md-padding="0px 0 0px 0"
					lg-padding="0px 40px 0px 40px"
					background="#ffffff"
				>
					<Text margin="0px 0px 0px 0px" font="normal 300 22px/1.5 --fontFamily-serifGaramond" text-align="center">
						These projects represent a snapshot of my work and demonstrate my skills and expertise in web development. While there are numerous other projects that I have successfully completed, I am unable to showcase them due to non-disclosure agreements (NDAs) with clients. These projects don't highlight the range of my capabilities so don't hesitate to contact me.
					</Text>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-template-rows="auto"
				md-grid-template-columns="1fr"
				md-grid-gap="40px 0"
				md-margin="0px 0px 50px 0px"
				grid-gap="0 35px"
				lg-grid-gap="16px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					background="#d9e9fa"
					border-radius="4px"
				>
					<Image
						src="https://uploads.quarkly.io/646d5587dad7580021a4162c/images/Screenshot%202023-05-23%20at%2020.21.29.png?v=2023-05-24T01:20:38.148Z"
						display="block"
						max-width="100%"
						height="300px"
						width="100%"
						object-fit="cover"
						sm-height="220px"
						lg-height="200px"
						md-height="350px"
						border-radius="4px 4px 0 0"
						border-width="1px"
						border-style="solid"
						border-color="#000000"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 30px 30px 30px"
						border-color="--color-darkL1"
						border-radius="0 0 4px 4px"
						display="flex"
						flex-direction="column"
						lg-padding="20px 20px 20px 20px"
						flex="1 1 0%"
					>
						<Text margin="0px 0px 15px 0px" font="normal 600 20px/1.2 --fontFamily-sans">
							Libyan Credit Guarantee Fund
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-serifGaramond" lg-margin="0px 0px 18px 0px" flex="1 1 0%">
							Worked on the frontend of the website. CGF services include financing projects, supporting SMEs, fostering growth.
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							justify-content="space-between"
							align-items="center"
						>
							<Button background="--color-darkL1" border-radius="4px" href="https://cgf.gov.ly/">
								Visit
							</Button>
							<Text margin="0px 0px 0px 0px" font="normal 600 20px/1.5 --fontFamily-serifGaramond" quarkly-title="2021">
								2021
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					background="#d9e9fa"
					border-radius="4px"
					display="flex"
					flex-direction="column"
				>
					<Image
						src="https://uploads.quarkly.io/646d5587dad7580021a4162c/images/Screenshot%202023-05-24%20at%2011.18.03.png?v=2023-05-24T16:17:08.609Z"
						display="block"
						max-width="100%"
						height="300px"
						width="100%"
						object-fit="cover"
						sm-height="220px"
						lg-height="200px"
						md-height="350px"
						border-radius="4px 4px 0 0"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 30px 30px 30px"
						border-color="--color-darkL1"
						border-radius="0 0 4px 4px"
						lg-padding="20px 20px 20px 20px"
						flex="1 1 0%"
						display="flex"
						flex-direction="column"
					>
						<Text margin="0px 0px 15px 0px" font="normal 600 20px/1.2 --fontFamily-sans">
							Babak App
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-serifGaramond" lg-margin="0px 0px 18px 0px" flex="1 1 0%">
							Managed the planning and development of Babak. It is a food delivery system that supports mobile apps for clients, vendors and drivers.
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							justify-content="space-between"
							align-items="center"
						>
							<Button background="--color-darkL1" border-radius="4px" href="https://babak.ly">
								Visit
							</Button>
							<Text margin="0px 0px 0px 0px" font="normal 600 20px/1.5 --fontFamily-serifGaramond">
								2022
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					background="#d9e9fa"
					border-radius="4px"
					display="flex"
					flex-direction="column"
				>
					<Image
						src="https://uploads.quarkly.io/646d5587dad7580021a4162c/images/Screenshot%202023-05-24%20at%2011.22.37.png?v=2023-05-24T16:22:26.509Z"
						display="block"
						max-width="100%"
						height="300px"
						width="100%"
						object-fit="cover"
						sm-height="220px"
						lg-height="200px"
						md-height="350px"
						border-radius="4px 4px 0 0"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						padding="30px 30px 30px 30px"
						border-color="--color-darkL1"
						border-radius="0 0 4px 4px"
						lg-padding="20px 20px 20px 20px"
						flex="1 1 0%"
						display="flex"
						flex-direction="column"
					>
						<Text margin="0px 0px 15px 0px" font="normal 600 20px/1.2 --fontFamily-sans">
							Alahly Sports Club - Web & App
						</Text>
						<Text margin="0px 0px 25px 0px" font="normal 300 16px/1.5 --fontFamily-serifGaramond" lg-margin="0px 0px 18px 0px" flex="1 1 0%">
							Managed the development of he website and mobile app for Alahly FC
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							justify-content="space-between"
							align-items="center"
						>
							<Button background="--color-darkL1" border-radius="4px" href="https://al-ahly.ly/">
								Visit
							</Button>
							<Text margin="0px 0px 0px 0px" font="normal 600 20px/1.5 --fontFamily-serifGaramond">
								2021
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			background="linear-gradient(0deg,rgba(25, 30, 34, 0.8) 0%,rgba(25, 30, 34, 0.8) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1547619292-240402b5ae5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)"
		>
			<Override slot="SectionContent" md-align-items="center" />
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap" width="100%">
				<Box padding="16px 16px 16px 16px" width="50%" md-width="100%">
					<Box sm-display="flex" sm-flex-direction="column" sm-align-items="flex-start">
						<Box
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
							position="relative"
							sm-display="flex"
							sm-flex-direction="column"
							sm-width="100%"
							sm-max-width="100%"
						>
							<Icon
								position="absolute"
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdEmail}
							/>
							<Text as="h4" margin="6px 0" font="--base" sm-width="100%">
								Email Me
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								<Link
									href="mailto:mo.alfaghi@gmail.com"
									text-decoration="none"
									hover-text-decoration="underline"
									color="--light"
									sm-width="100%"
								>
									mo.alfaghi@gmail.com
								</Link>
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
							position="relative"
							sm-display="flex"
							sm-flex-direction="column"
							sm-width="100%"
							sm-max-width="100%"
						>
							<Icon
								position="absolute"
								size="48px"
								top="0"
								left="0"
								category="md"
								icon={MdPhone}
							/>
							<Text as="h4" margin="6px 0" font="--base" sm-width="100%">
								Call Me
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								<Link
									href="tel:+218926462359"
									text-decoration="none"
									hover-text-decoration="underline"
									color="--light"
									sm-width="100%"
								>
									+218915124078
								</Link>
							</Text>
						</Box>
						<Box
							padding="0 0 0 64px"
							sm-padding="0"
							margin="48px 0"
							max-width="360px"
							position="relative"
							display="flex"
						>
							<LinkBox href="https://linkedin.com/in/malfaghi">
								<Icon
									category="fa"
									icon={FaLinkedinIn}
									width="48px"
									height="48px"
									size="24px"
									margin-right="16px"
									background="--color-primary"
									border-radius="50%"
									color="#ffffff"
								/>
							</LinkBox>
							<LinkBox href="https://wa.me/+218915124078">
								<Icon
									category="fa"
									icon={FaWhatsapp}
									width="48px"
									height="48px"
									size="35px"
									margin-right="16px"
									background="--color-primary"
									border-radius="50%"
									color="#ffffff"
								/>
							</LinkBox>
							<LinkBox href="https://github.com/moxerox">
								<Icon
									category="fa"
									icon={FaGithub}
									width="48px"
									height="48px"
									size="35px"
									margin-right="16px"
									background="--color-primary"
									border-radius="50%"
									color="#ffffff"
								/>
							</LinkBox>
						</Box>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" md-width="100%" sm-padding="0px 0px 0px 0px">
					<Box />
				</Box>
			</Box>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Text margin="0px 0px 0px 0px" font="30px" color="#ffffff">
				All Rights Reserved @ Mohamed Alfaghi 2023
			</Text>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"6123949e957019001e284456"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});