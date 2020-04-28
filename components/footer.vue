<template>
	<div class="footer">
		<div class="panorama">
			<H2>panorama</H2>
			<br />
			<div class="wrapper">
				<div class="info">
					<h3>all seasons adventure</h3>
					<br />
					<p>
						<a href="/contact"><i class="icon icon-mail"></i> jakim@panoramaspa.com </a>
					</p>
					<p><i class="icon icon-phone"></i> (+389) 070 70 70 72</p>
				</div>
				<div class="media">
					<h3>get in touch</h3>
					<br />
					<br />
					<a href="https://www.facebook.com/PanoramaAdventure" title="Facebook" target="blank">
						<i class="icon icon-facebook"></i>
					</a>
					<a href="#" title="Instagram" target="blank">
						<i class="icon icon-instagram"></i>
					</a>
					<a href="#" title="YouTube" target="blank">
						<i class="icon icon-youtube"></i>
					</a>
				</div>
			</div>
		</div>
		<div class="sitemap">
			<h2>site map</h2>
			<br />
			<div class="wrapper">
				<div class="menu">
					<h3>menu</h3>
					<br />
					<n-link to="/home">home</n-link>
					<n-link to="/events">events</n-link>
					<n-link to="/stay">stay</n-link>
					<n-link to="/about">about</n-link>
					<n-link to="/faq">faq</n-link>
					<n-link to="/contact">contact</n-link>
				</div>
				<div class="inspire">
					<h3>inspire me</h3>
					<br />
					<n-link to="/inspire">Krushevo with kids</n-link>
					<n-link to="/inspire">Monuments</n-link>
					<n-link to="/inspire">Food &amp; Wine</n-link>
					<n-link to="/inspire">Accommodation</n-link>
					<n-link to="/inspire">Outdoor Activites</n-link>
					<n-link to="/inspire">Fitness &amp; SPA</n-link>
				</div>
				<div class="sport">
					<h3>sport</h3>
					<br />
					<n-link to="/sport">mountain biking</n-link>
					<n-link to="/sport">downhill biking</n-link>
					<n-link to="/sport">road cycling</n-link>
					<n-link to="/sport">hiking</n-link>
					<n-link to="/sport">orienting</n-link>
					<n-link to="/sport">climbing</n-link>
				</div>
				<div class="sport">
					<br />
					<br />
					<n-link to="/sport">ATV riding</n-link>
					<n-link to="/sport">paragliding</n-link>
					<n-link to="/sport">hangliding</n-link>
					<n-link to="/sport">roller ski</n-link>
					<n-link to="/sport">snowboarding</n-link>
					<n-link to="/sport">skiing</n-link>
				</div>
			</div>
		</div>
		<div class="copyrights">
			<h4>Copyright <span>©</span> 2020</h4>
			<h4>All rights reserved</h4>
			<h4>
				designed by
				<a href="https://martcube.netlify.com/" target="_blank">
					Mart Cube
				</a>
			</h4>
		</div>
		<div class="arrow" @click="ScrollToTop">
			<i class="icon icon-up" />
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		ScrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		},
	},
}
</script>

<style lang="scss" scoped>
.footer {
	margin-top: 5%;
	padding-top: 50px;
	// background: #2b3a41;
	background: #24292e;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-start;
	align-content: center;
	flex-wrap: wrap;

	position: relative;

	h2 {
		margin: 0;
		color: #7eb241;
		text-transform: uppercase;
	}
	h3 {
		color: #4a88c8;
		text-transform: uppercase;
	}

	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		align-content: center;
		.info,
		.menu,
		.inspire,
		.sport {
			margin-right: 30px;
		}
	}

	.panorama {
		.info {
			color: white;
			p {
				font-family: 'next_demi';
			}
			a {
				text-decoration: none;
				color: white;
				&:hover {
					color: #4a88c8;
					i {
						color: #7eb241;
					}
				}
			}
		}
		.media {
			text-align: right;

			a {
				text-decoration: none;
				color: white;
				border: 1px solid #4a88c8;
				padding: 10px;
				margin-left: 10px;
				transition: all 0.2s ease;

				&:hover {
					border: 1px solid #24292e;
					color: #7eb241;
				}
			}
		}
	}

	.sitemap {
		a {
			display: block;
			font-family: 'next_demi';
			text-decoration: none;
			color: white;
			line-height: 1.5em;
			font-size: 0.9em;
			text-transform: uppercase;

			&:hover {
				opacity: 0.75;
			}
		}
	}

	.copyrights {
		padding-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-basis: 100%;

		span {
			color: #7eb241;
		}
		h4 {
			text-transform: uppercase;
			color: #4a88c8;
			margin: 20px;
		}
		h4:nth-child(2) {
			color: #7eb241;
		}
		a {
			text-decoration: none;
			color: #7eb241;
			&:hover {
				opacity: 0.75;
			}
		}
	}

	.arrow {
		position: absolute;
		top: 20px;
		right: 20px;
		width: 35px;
		height: 35px;
		background: white;

		line-height: 35px;
		text-align: center;
		cursor: pointer;
		i {
			text-decoration: none;
			font-size: 20px;
			color: #343a40;
		}

		transition: all 0.3s cubic-bezier(0.31, -0.105, 0.43, 1.59);
		&:hover {
			transform: scale(1.1);
			box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
		}
	}
}

@media (max-width: 1125px) {
	.footer {
		.panorama,
		.sitemap {
			width: 550px;
			margin-bottom: 20px;
		}
	}
}
@media (max-width: 600px) {
	.footer {
		text-align: center;
		.wrapper {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			align-content: center;

			margin-bottom: 20px;

			.info,
			.menu,
			.inspire,
			.sport {
				margin: 0;
				margin-bottom: 20px;
			}
			.info {
				i {
					display: none;
				}
			}
			.media {
				text-align: center;
				a {
					margin: 10px;
				}
			}
			.sport {
				margin: 0;
			}
		}

		.copyrights {
			padding: 0;
		}
	}
}
@media (max-width: 600px) {
	.footer {
		text-align: center;
		.wrapper {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			align-content: center;

			margin-bottom: 20px;

			.info,
			.menu,
			.inspire,
			.sport {
				margin: 0;
				margin-bottom: 20px;
			}
			.info {
				i {
					display: none;
				}
			}
			.media {
				text-align: center;
				a {
					margin: 10px;
				}
			}
			.sport {
				margin: 0;
			}
		}

		.copyrights {
			padding: 0;
		}

		.arrow {
			top: 10px;
			right: 10px;
		}
	}
}
@media (max-width: 360px) {
	.footer {
		.copyrights {
			flex-direction: column;
			padding: 0;
		}
	}
}
</style>
